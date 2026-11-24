import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Check,
  Pause,
  Play,
} from 'lucide-react';
import { servicesData } from '../../data/agencyData';

export default function ServicesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const currentService = servicesData[currentIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % servicesData.length);
      }, 5200);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentIndex]);

  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % servicesData.length);

  return (
    <div className="slider-shell rv">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
        <div className="flex items-center gap-3">
          <div className="slider-num">{currentService.num}</div>
          <div>
            <span className="t-small">Discipline {currentIndex + 1} of {servicesData.length}</span>
            <h4 className="text-sm font-medium">Interactive capabilities reel</h4>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="slider-ctl"
            title={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
            aria-label="Toggle auto-slide"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button onClick={goToPrev} className="slider-ctl" title="Previous service" aria-label="Previous slide">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={goToNext} className="slider-ctl on" title="Next service" aria-label="Next slide">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] pt-8 items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-2">
            {currentService.tags.map((tag) => (
              <span key={tag} className="badge neutral" style={{ fontSize: 12 }}>
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h3 className="t-h3">{currentService.title}</h3>
            <p className="t-body mt-3 max-w-lg">{currentService.lead}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl soft-tint border border-black/5">
            {currentService.outcomes.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="text-lg sm:text-2xl font-medium tracking-[-.03em]">{item.value}</div>
                <div className="text-[11px] sm:text-xs text-black/50 leading-tight">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2.5">
            <h5 className="text-[11px] font-semibold uppercase tracking-[.14em] text-black/45">
              Core deliverables included
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-black/70">
              {currentService.included.slice(0, 4).map((inc) => (
                <div key={inc} className="flex items-center gap-2">
                  <span className="w-[18px] h-[18px] rounded-full bg-forest/10 text-forest grid place-items-center flex-none">
                    <Check className="w-3 h-3" strokeWidth={2.5} />
                  </span>
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-1 flex flex-wrap items-center gap-3">
            <Link
              to={`/services/${currentService.slug}`}
              className="pill-btn pill-btn--sm"
            >
              <span>
                <i>Explore full service</i>
                <i aria-hidden="true">Explore full service</i>
              </span>
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium underline underline-offset-4 decoration-black/25 hover:decoration-coral transition-colors"
            >
              Book a discovery call
            </Link>
          </div>
        </div>

        <div>
          <div className="photo aspect-[4/3]">
            <img src={currentService.image} alt={currentService.title} loading="lazy" />
            <div className="photo-caption">
              <small>Discipline in action</small>
              <b>{currentService.photoCaption}</b>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] uppercase tracking-[.14em] text-black/40 font-semibold mr-1">
              Built with
            </span>
            {currentService.tools.slice(0, 5).map((tool) => (
              <span key={tool} className="tool-pill">{tool}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {servicesData.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(idx)}
              className={`slider-pager ${currentIndex === idx ? 'on' : ''}`}
            >
              <span>{s.num}</span>
              <span className="hidden md:inline ml-1">{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <Link
          to="/services"
          className="text-xs font-semibold text-black/60 hover:text-black flex items-center gap-1 transition-colors"
        >
          <span>View all 10 services</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
