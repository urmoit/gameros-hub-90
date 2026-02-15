import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";

import News from "./pages/News";
import XPImplementation from "./pages/news/XPImplementation";
import XPTransformation from "./pages/news/XPTransformation";
import BugFixPass from "./pages/news/BugFixPass";
import AlphaRelease from "./pages/news/AlphaRelease";
import Build1200Walkthrough from "./pages/news/Build1200Walkthrough";
import MonthlyNews from "./pages/MonthlyNews";
import Download from "./pages/Download";
import AllVersions from "./pages/AllVersions";
import Changelog from "./pages/Changelog";
import GamerOSChangelog from "./pages/GamerOSChangelog";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/news" element={<News />} />
          <Route path="/news/monthly/:month" element={<MonthlyNews />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="/gameros-changelog" element={<GamerOSChangelog />} />
          <Route path="/download" element={<Download />} />
          <Route path="/all-versions" element={<AllVersions />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news/xp-implementation" element={<XPImplementation />} />
          <Route path="/news/xp-transformation" element={<XPTransformation />} />
          <Route path="/news/bug-fix-pass" element={<BugFixPass />} />
          <Route path="/news/alpha-release" element={<AlphaRelease />} />
          <Route path="/news/build-1200" element={<Build1200Walkthrough />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
