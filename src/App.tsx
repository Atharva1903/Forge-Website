import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { AppGallery } from './components/AppGallery';
import { BentoGrid } from './components/BentoGrid';
import { Personalization } from './components/Personalization';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { HowItWorks } from './components/HowItWorks';
import { Articles } from './components/Articles';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { VideoModal } from './components/VideoModal';

export function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="app-root">
      <Navbar onOpenDownload={() => setDownloadOpen(true)} />

      <main>
        <Hero
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
        />
        <ProblemSolution onOpenDownload={() => setDownloadOpen(true)} />
        <AppGallery />
        <BentoGrid />
        <Personalization />
        <Testimonials />
        <Pricing onOpenDownload={() => setDownloadOpen(true)} />
        <FAQ />
        <HowItWorks onOpenDownload={() => setDownloadOpen(true)} />
        <Articles />
        <CTABanner
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
        />
      </main>

      <Footer />

      <DownloadModal
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </div>
  );
}

export default App;
