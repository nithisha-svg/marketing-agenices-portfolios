import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SectionTag from '../components/ui/SectionTag';
import Button from '../components/ui/Button';
import Mark from '../components/ui/Mark';

export default function NotFound() {
  return (
    <section className="hero min-h-[82vh] flex items-center">
      <div className="container-x text-center flex flex-col items-center">
        <SectionTag className="mb-7">ERROR 404 <b>/</b> LOST PAGE</SectionTag>

        <div className="flex items-center gap-4 mb-2" aria-hidden="true">
          <Mark className="w-12 h-12" />
          <span className="t-hero leading-none">4</span>
          <span className="t-hero leading-none text-coral">0</span>
          <span className="t-hero leading-none">4</span>
        </div>

        <h1 className="t-h2 max-w-2xl mt-4">This page took a creative detour.</h1>

        <p className="t-lead mt-5 max-w-xl">
          The link you followed does not exist — or the page has moved on to bigger things. Let’s
          get you back to something worth seeing.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button to="/">
            <span className="inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back home
            </span>
          </Button>
          <Button to="/work" variant="outline">Explore our work</Button>
        </div>

        <div className="mt-10 pt-6 border-t border-black/10 text-xs text-black/45">
          Looking for something specific?{' '}
          <Link to="/contact" className="text-black underline underline-offset-4 font-medium">
            Contact the studio
          </Link>
        </div>
      </div>
    </section>
  );
}
