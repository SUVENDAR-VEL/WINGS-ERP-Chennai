
import { PublicHeader } from './PublicHeader';
import { HeroSection } from './HeroSection';
import { CapabilitiesBanner } from './CapabilitiesBanner';
import { AboutSection } from './AboutSection';
import { ManufacturingCapabilities } from './ManufacturingCapabilities';
import { ProcessSection } from './ProcessSection';
import { QualityAndInfraSection } from './QualityAndInfraSection';
import { PartsGallery } from './PartsGallery';
import { PublicFooter } from './PublicFooter';

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-600 selection:text-white">
      <PublicHeader />
      <HeroSection />
      <CapabilitiesBanner />
      <AboutSection />
      <ManufacturingCapabilities />
      <ProcessSection />
      <QualityAndInfraSection />
      <PartsGallery />
      <PublicFooter />
    </div>
  );
};
