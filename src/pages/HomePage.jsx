import React from 'react';
import HeroSection from '../components/HeroSection';
import ScrollShowcaseSection from '../components/ScrollShowcaseSection';
import PosterMarquee from '../components/PosterMarquee';
import BenefitsMarquee from '../components/BenefitsMarquee';
import BentoGrid from '../components/BentoGrid';
import FAQ from '../components/FAQ';
import DownloadCTA from '../components/DownloadCTA';

export default function HomePage({ openDownloadModal, openContactModal }) {
  return (
    <div className="space-y-0">
      <HeroSection openDownloadModal={openDownloadModal} />
      <ScrollShowcaseSection openDownloadModal={openDownloadModal} />
      <PosterMarquee />
      <BenefitsMarquee />
      <BentoGrid openDownloadModal={openDownloadModal} />
      <DownloadCTA openDownloadModal={openDownloadModal} />
      <FAQ openContactModal={openContactModal} />
    </div>
  );
}
