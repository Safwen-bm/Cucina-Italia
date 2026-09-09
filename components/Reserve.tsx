"use client";

import { useState } from "react";

export default function Reserve() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="prenota"
      className="bg-wine-deep py-28 text-ivory md:py-36"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="label-caps mb-5 text-sm text-brass-light">Prenota</p>
          <h2 className="font-display text-4xl italic leading-[1.1] sm:text-5xl">
            Reserve a table.
          </h2>
          <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ivory/75">
            We hold tables for dinner, Tuesday through Sunday. For parties of
            seven or more, call us directly and we&rsquo;ll set the long table.
          </p>
          <div className="mt-10 space-y-1 text-[15px] text-ivory/70">
            <p>+1 (555) 019&ndash;2244</p>
            <p>tavolo@controluce.example</p>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          {sent ? (
            <div className="rounded-[2px] border border-ivory/20 px-8 py-10">
              <p className="font-display text-2xl italic text-brass-light">
                Grazie.
              </p>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ivory/75">
                We&rsquo;ve noted your request and will confirm by phone within
                the day. This form is a design preview and isn&rsquo;t
                connected to a booking system yet.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="label-caps text-[13px] text-ivory/60">Name</span>
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  className="border-b border-ivory/25 bg-transparent py-2.5 text-ivory placeholder:text-ivory/35 focus:border-brass-light focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="label-caps text-[13px] text-ivory/60">Date</span>
                <input
                  type="date"
                  required
                  className="border-b border-ivory/25 bg-transparent py-2.5 text-ivory scheme-dark focus:border-brass-light focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="label-caps text-[13px] text-ivory/60">Time</span>
                <input
                  type="time"
                  required
                  className="border-b border-ivory/25 bg-transparent py-2.5 text-ivory scheme-dark focus:border-brass-light focus:outline-none"
                />
              </label>

              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="label-caps text-[13px] text-ivory/60">Party size</span>
                <input
                  type="number"
                  min={1}
                  max={6}
                  defaultValue={2}
                  required
                  className="border-b border-ivory/25 bg-transparent py-2.5 text-ivory focus:border-brass-light focus:outline-none"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-fit rounded-[2px] bg-brass px-7 py-3.5 text-[15px] font-medium text-wine-deep transition-colors hover:bg-brass-light sm:col-span-2"
              >
                Request a table
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
