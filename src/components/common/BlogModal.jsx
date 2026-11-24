import React, { useEffect } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import Button from '../ui/Button';

export default function BlogModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/55 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={article.title}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#f8f9fb] border border-black/10 rounded-[28px] shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-black/10 bg-white/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="badge hot" style={{ fontSize: 12 }}>{article.category}</span>
            <span className="text-xs text-black/45 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-black/5 border border-black/5 text-black/60 hover:text-black hover:bg-black/10 transition-colors grid place-items-center"
            aria-label="Close article"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 sm:p-9 overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs text-black/45">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.byline}</span>
            </div>

            <h2 className="t-h3">{article.title}</h2>

            <p className="text-lg text-black/70 font-medium border-l-2 border-coral pl-4 py-1 leading-relaxed">
              “{article.excerpt}”
            </p>
          </div>

          {article.image && (
            <div className="photo aspect-[16/9] rounded-2xl">
              <img src={article.image} alt={article.title} />
            </div>
          )}

          <div className="space-y-4 text-black/70 leading-relaxed text-base">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-black/45">
              Published by <strong className="text-black">ZYVO Studio</strong> · Insights series
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              Back to insights
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
