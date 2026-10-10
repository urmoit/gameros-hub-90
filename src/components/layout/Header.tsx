import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coffee, Download, Gamepad2, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'News', path: '/news' },
  { name: 'Download', path: '/download' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const dark = resolvedTheme === 'dark';
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => { setIsOpen(false); }, [location.pathname]);
  const active = (path: string) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <motion.header initial={reducedMotion ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-shadow duration-200 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="GamerOS home">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">GamerOS<span className="ml-2 text-[10px] font-mono font-normal text-muted-foreground hidden lg:inline">00m2</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex self-stretch gap-6 ml-4">
          {navItems.map(item => <Link key={item.path} to={item.path} aria-current={active(item.path) ? 'page' : undefined}
            className={`relative flex items-center text-sm transition-colors ${active(item.path) ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'}`}>
            {item.name}
            {active(item.path) && <motion.span layoutId="header-active" className="absolute bottom-0 inset-x-0 h-0.5 bg-primary" transition={{ duration: reducedMotion ? 0 : 0.2, ease: 'easeOut' }} />}
          </Link>)}
        </nav>
        <div className="ml-auto flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="sm" asChild className="hidden lg:inline-flex text-muted-foreground"><a href="https://buymeacoffee.com/urmoit" target="_blank" rel="noopener noreferrer"><Coffee />Support</a></Button>
          <Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setTheme(dark ? 'light' : 'dark')}>
            <AnimatePresence mode="wait" initial={false}><motion.span key={dark ? 'dark' : 'light'} initial={{ opacity: 0, rotate: reducedMotion ? 0 : -30 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.span></AnimatePresence>
          </Button></TooltipTrigger><TooltipContent>{dark ? 'Light theme' : 'Dark theme'}</TooltipContent></Tooltip>
          <Button asChild size="sm" className="hidden md:inline-flex"><Link to="/download"><Download />Download</Link></Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen(open => !open)}>{isOpen ? <X /> : <Menu />}</Button>
        </div>
      </div>
      <AnimatePresence initial={false}>{isOpen && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="md:hidden overflow-hidden border-t border-border bg-background"
        initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.18 }}>
        <div className="px-4 py-3 space-y-1">{navItems.map(item => <Button asChild variant="ghost" key={item.path} className={`w-full justify-start ${active(item.path) ? 'bg-muted text-foreground' : 'text-muted-foreground'}`}><Link to={item.path} aria-current={active(item.path) ? 'page' : undefined}>{item.name}</Link></Button>)}
        <Button variant="ghost" asChild className="w-full justify-start text-muted-foreground"><a href="https://buymeacoffee.com/urmoit" target="_blank" rel="noopener noreferrer"><Coffee />Support</a></Button></div>
      </motion.nav>}</AnimatePresence>
    </motion.header>
  );
};
export default Header;
