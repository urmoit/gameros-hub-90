import { Link } from 'react-router-dom';
import { ArrowRight, Download, Monitor, Smartphone, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alphaPreview from '@/assets/alpha-preview.png';

const HeroSection = () => (
  <section className="pt-28 pb-12 border-b border-border">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/news/build-1520" className="inline-flex items-center gap-2 text-xs font-mono text-primary mb-5 hover:underline"><span className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />Build 1.520 Released — 00m2<ArrowRight className="w-3 h-3 shrink-0" /></Link>
      <h1 className="text-5xl sm:text-5xl font-semibold mb-4">GamerOS</h1>
      <p className="text-lg text-muted-foreground max-w-2xl mb-6">The next-generation operating system that runs Windows, Linux, and Android apps seamlessly.</p>
      <div className="flex flex-wrap items-center gap-3 mb-8"><Button asChild><Link to="/download"><Download />Download</Link></Button><Button variant="outline" asChild><Link to="/about">Learn More<ArrowRight /></Link></Button></div>
      <div className="flex flex-wrap gap-6 text-xs text-muted-foreground mb-6">{[{icon:Monitor,label:'Windows Apps'},{icon:Terminal,label:'Linux Apps'},{icon:Smartphone,label:'Android APKs'}].map(item => <span key={item.label} className="flex items-center gap-2"><item.icon className="h-4 w-4" />{item.label}</span>)}</div>
      <figure className="max-w-3xl border border-border rounded-lg overflow-hidden bg-muted">
        <figcaption className="flex items-center justify-between gap-2 px-4 py-2.5 border-b border-border text-xs font-mono text-muted-foreground"><span>GamerOS Desktop / Alpha preview</span><Monitor className="h-3.5 w-3.5 shrink-0" /></figcaption>
        <img src={alphaPreview} alt="GamerOS alpha desktop with Notepad, Settings, and Explorer" className="block w-full h-auto" />
      </figure>
    </div>
  </section>
);
export default HeroSection;
