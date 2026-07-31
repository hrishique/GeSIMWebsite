import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollShowcaseSection from './ScrollShowcaseSection';
import PosterMarquee from './PosterMarquee';

export default function HorizontalScrollSection({ openDownloadModal }) {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // 4 screens total (3,4,5,6) -> travel 3 screen-widths left
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);

  if (!isDesktop) {
    return (
      <div className="flex flex-col">
        <ScrollShowcaseSection openDownloadModal={openDownloadModal} />
        <PosterMarquee />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full">
          <ScrollShowcaseSection openDownloadModal={openDownloadModal} />
          <PosterMarquee />
        </motion.div>
      </div>
    </div>
  );
}
