import Image from "next/image";

const images = [
  {
    src: "/images/interno-dining-room.jpg",
    alt: "The main dining room, marble tables and low brass light",
    className: "md:col-span-7 md:row-span-2 aspect-[4/3] md:aspect-auto",
  },
  {
    src: "/images/interno-wine-pour.jpg",
    alt: "Wine being poured at the table",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "/images/interno-ingredients.jpg",
    alt: "Fresh tomatoes, basil, and olive oil laid out on a wood counter",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "/images/italian-table.avif",
    alt: "The entrance to Controluce at dusk",
    className: "md:col-span-12 aspect-[16/8]",
  },
];

export default function Gallery() {
  return (
    <section id="interno" className="bg-ivory py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex max-w-lg flex-col">
          <p className="label-caps mb-5 text-sm text-wine">L&rsquo;Interno</p>
          <h2 className="font-display text-4xl italic leading-[1.1] text-ink sm:text-5xl">
            A room built for staying a while.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-12">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden ${img.className}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
