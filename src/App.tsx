import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppGallery } from './components/AppGallery';
import { BentoGrid } from './components/BentoGrid';
import { HowItWorks } from './components/HowItWorks';
import { CTABanner } from './components/CTABanner';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { VideoModal } from './components/VideoModal';
import { ForgeLoader } from './components/ForgeLoader';

export function App() {
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-root">
      {loading && <ForgeLoader onFinish={() => setLoading(false)} />}

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero
          onOpenDownload={() => setDownloadOpen(true)}
          onOpenVideo={() => setVideoOpen(true)}
        />
        <AppGallery />
        <BentoGrid />
        <HowItWorks onOpenDownload={() => setDownloadOpen(true)} />
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
