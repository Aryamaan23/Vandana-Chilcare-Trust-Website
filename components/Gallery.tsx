'use client';

import { useState, useEffect } from 'react';
import { galleryItems, type GalleryItem } from '@/lib/gallery-data';

const FALLBACK_IMAGE = '/vct-image.jpeg';

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const sources = [item.imagePng, item.image, item.imageJpg].filter((s): s is string => Boolean(s));
  // Prefer gallery image; show logo only if image fails to load
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
      className="group relative bg-white rounded-2xl border border-trust-peach-warm overflow-hidden shadow-soft hover:shadow-soft-hover hover:border-trust-accent/30 transition-all duration-300"
    >
      <div className="aspect-[4/3] relative bg-trust-peach-warm/50 overflow-hidden">
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
      </div>
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
  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-4">Our Moments</h2>
        <p className="text-center text-trust-navy/80 max-w-2xl mx-auto mb-4">
          Events and memories from the field—health drives, celebrations, and moments of care.
        </p>
        <p className="text-center mb-14">
          <a
            href="https://instagram.com/vandana_childcare_trust"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent inline-flex items-center gap-1.5"
          >
            Follow us on Instagram
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, i) => (
            <GalleryCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
