import { Link } from 'react-router-dom';
import { Coffee, Gamepad2, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-semibold mb-3"><Gamepad2 className="h-5 w-5 text-primary" />GamerOS</Link>
          <p className="text-sm text-muted-foreground mb-3">An open-source operating system built from scratch for gamers.</p>
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground -ml-3"><a href="https://buymeacoffee.com/urmoit" target="_blank" rel="noopener noreferrer"><Coffee />Support the Developer</a></Button>
        </div>
        <div><h4 className="text-xs font-semibold mb-4">Navigation</h4><ul className="space-y-2 text-sm text-muted-foreground">{[{name:'Home',path:'/'},{name:'About',path:'/about'},{name:'News',path:'/news'}].map(item => <li key={item.path}><Link className="hover:text-foreground transition-colors" to={item.path}>{item.name}</Link></li>)}</ul></div>
        <div><h4 className="text-xs font-semibold mb-4">Resources</h4><ul className="space-y-2 text-sm text-muted-foreground"><li><Link to="/download" className="hover:text-foreground">Download</Link></li><li><Link to="/all-versions" className="hover:text-foreground">All Versions</Link></li><li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li><li><a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Documentation</a></li></ul></div>
        <div className="col-span-2 md:col-span-1"><h4 className="text-xs font-semibold mb-4">Current release</h4><Link to="/news/build-1520" className="text-sm font-mono hover:text-primary">00m2 / Build 1.520</Link><p className="text-xs text-muted-foreground mt-2 mb-3">Released October 10, 2026</p><Button variant="outline" size="sm" asChild><a href="https://github.com/urmoit/GamerOS" target="_blank" rel="noopener noreferrer"><Github />GitHub</a></Button></div>
      </div>
      <div className="border-t border-border mt-8 pt-5 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground"><span>© {new Date().getFullYear()} GamerOS. Built by a solo developer.</span><span className="font-mono">00m2 · 1.520</span></div>
    </div>
  </footer>
);
export default Footer;
