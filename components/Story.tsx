import Image from "next/image";

export default function Story() {
  return (
    <section id="storia" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <div className="relative aspect-4/5 w-full overflow-hidden">
              <Image
                src="/images/story-hands-pasta.jpg"
                alt="Hands shaping fresh tagliatelle by hand on a floured board"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <p className="label-caps mb-5 text-sm text-wine">La Storia</p>
          <h2 className="font-display max-w-md text-4xl italic leading-[1.1] text-ink sm:text-5xl">
            One recipe, one Sunday, one table that kept getting longer.
          </h2>

          <div className="mt-9 max-w-md space-y-5 text-[17px] leading-relaxed text-ink/80">
            <p>
              My grandmother rolled pasta on this same table for forty years
              before anyone thought to open a restaurant around it. Controluce
              started the way most good kitchens do &mdash; without a plan, just
              a recipe worth repeating and more people showing up to eat it.
            </p>
            <p>
              Nothing here takes a shortcut. The tomatoes still come from the
              same two farms outside Sarno. The bread is baked before sunrise,
              three doors down. And the pasta is cut by hand, every morning,
              by someone who learned it the same way I did &mdash; standing on
              a stool, too short to reach the board.
            </p>
          </div>

          <blockquote className="mt-10 max-w-md border-l-2 border-brass py-1 pl-6 font-display text-xl italic leading-snug text-ink/90">
            We never set out to be authentic. We just never saw a reason to
            change what already worked.
          </blockquote>
        </div>
      </div>
    </section>
  );
}
