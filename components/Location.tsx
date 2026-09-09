const hours = [
  { day: "Tuesday \u2013 Thursday", time: "5:30pm \u2013 10:00pm" },
  { day: "Friday \u2013 Saturday", time: "5:30pm \u2013 11:00pm" },
  { day: "Sunday", time: "1:00pm \u2013 9:00pm" },
  { day: "Monday", time: "Closed" },
];

export default function Location() {
  return (
    <section id="dove" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="label-caps mb-5 text-sm text-wine">Dove Siamo</p>
          <h2 className="font-display text-4xl italic leading-[1.1] text-ink sm:text-5xl">
            Find us on the corner,
            <br />
            past the fig tree.
          </h2>
          <div className="mt-9 space-y-1 text-[17px] leading-relaxed text-ink/80">
            <p>14 Via dell&rsquo;Orto</p>
            <p>Monastir, Tunisia</p>
          </div>
          <a
            href="#"
            className="label-caps mt-6 inline-block text-[15px] text-wine underline decoration-wine/30 underline-offset-4 hover:decoration-wine"
          >
            Get directions
          </a>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="border-t border-ink/10">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-baseline justify-between border-b border-ink/10 py-4"
              >
                <span className="text-[16px] text-ink/80">{h.day}</span>
                <span className="font-display italic text-ink">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
