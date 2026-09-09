import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-end overflow-hidden bg-forest-deep"
    >
      <Image
        src="/images/hero-dining-room.jpg"
        alt="The dining room at Controluce, lit by the last light of evening"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-forest-deep via-forest-deep/55 to-forest-deep/10" />
      <div className="absolute inset-0 bg-linear-to-r from-forest-deep/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <div
          className="max-w-xl opacity-0 animate-[rise_1.1s_0.15s_ease-out_forwards]"
          style={{ animationName: "rise" }}
        >
          <p className="label-caps mb-6 text-sm text-brass-light">Cucina Italiana &middot; Since 2014</p>
          <h1 className="font-display text-[3.4rem] italic leading-[0.98] text-ivory sm:text-7xl">
            Controluce
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-ivory/85">
            We open our doors when the light turns amber, and we don&rsquo;t rush
            anyone home before it fades. Handmade pasta, a wood-fired hearth,
            and a table built for the long evening.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#prenota"
              className="rounded-[2px] bg-brass px-7 py-3.5 text-[15px] font-medium text-forest-deep transition-colors hover:bg-brass-light"
            >
              Reserve a table
            </a>
            <a
              href="#storia"
              className="label-caps text-[15px] text-ivory/80 underline decoration-ivory/30 underline-offset-4 transition-colors hover:text-brass-light hover:decoration-brass-light"
            >
              Our story
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes rise {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
