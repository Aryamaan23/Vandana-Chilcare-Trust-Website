'use client';

import { useState, useEffect } from 'react';
import { galleryItems, type GalleryItem } from '@/lib/gallery-data';
import { InstagramIcon, LinkedInIcon } from './SocialIcons';

const FALLBACK_IMAGE = '/vct-image.jpeg';

function Lightbox({
  item,
  src,
  onClose,
}: {
  item: GalleryItem;
  src: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-trust-navy/95 flex flex-col md:flex-row md:items-center md:justify-center p-4 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition z-10"
        aria-label="Close"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="flex-1 flex flex-col items-center justify-center max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={item.title}
          className="max-w-full max-h-[70vh] md:max-h-[80vh] w-auto object-contain rounded-lg shadow-2xl"
        />
        <div className="mt-4 text-white text-center max-w-2xl">
          <p className="text-sm text-white/80">{item.date || 'Event'}</p>
          <h3 className="font-display text-xl font-semibold mt-1">{item.title}</h3>
          <p className="text-sm text-white/90 mt-2 line-clamp-3">{item.caption}</p>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  index,
  onOpenLightbox,
}: {
  item: GalleryItem;
  index: number;
  onOpenLightbox: (item: GalleryItem, src: string) => void;
}) {
  const sources = [item.imagePng, item.image, item.imageJpg].filter((s): s is string => Boolean(s));
  const firstGallerySrc = sources[0];
  const [currentSrc, setCurrentSrc] = useState(firstGallerySrc || FALLBACK_IMAGE);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!firstGallerySrc) return;
    setCurrentSrc(firstGallerySrc);
  }, [item.id, firstGallerySrc]);

  const handleImageError = () => {
    setCurrentSrc(FALLBACK_IMAGE);
  };

  const shortCaption = item.caption.length > 160 ? item.caption.slice(0, 160) + '…' : item.caption;

  return (
    <article
      className="group relative bg-white rounded-2xl border border-trust-peach-warm overflow-hidden shadow-card hover:shadow-card-hover hover:border-trust-accent/30 hover:-translate-y-0.5 transition-all duration-300"
    >
      <button
        type="button"
        className="aspect-[4/3] relative bg-trust-peach-warm/50 overflow-hidden w-full block text-left focus:outline-none focus:ring-2 focus:ring-trust-accent focus:ring-offset-2 rounded-t-2xl"
        onClick={() => onOpenLightbox(item, currentSrc)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={currentSrc}
          src={currentSrc}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-trust-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/90">{item.date || 'Event'}</p>
          <h3 className="font-display text-lg md:text-xl font-semibold drop-shadow-md">{item.title}</h3>
        </div>
        <span className="sr-only">View full size</span>
      </button>
      <div className="p-5 md:p-6">
        <p className="text-trust-navy/85 text-sm leading-relaxed">
          {expanded ? item.caption : shortCaption}
        </p>
        {item.caption.length > 160 && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-trust-accent font-semibold text-sm hover:text-trust-accent-light transition"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
    </article>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{ item: GalleryItem; src: string } | null>(null);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-trust-peach/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-trust-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="section-title mb-2">Our Moments</h2>
          <div className="section-subtitle section-subtitle-center" />
          <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mt-4 mb-4">
          Events and memories from the field—health drives, celebrations, and moments of care. Click any image to view full size.
          </p>
          <p className="text-center mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://instagram.com/vandana_childcare_trust"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-2"
          >
            <InstagramIcon className="w-5 h-5 text-trust-accent" />
            Follow us on Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/vandana-childcare-trust/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-2"
          >
            <LinkedInIcon className="w-5 h-5 text-[#0A66C2]" />
            Follow us on LinkedIn
          </a>
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={i}
              onOpenLightbox={(it, src) => setLightbox({ item: it, src })}
            />
          ))}
        </div>
      </div>
      {lightbox && (
        <Lightbox
          item={lightbox.item}
          src={lightbox.src}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
