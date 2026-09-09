type Dish = {
  name: string;
  description: string;
  price: string;
};

type Course = {
  title: string;
  dishes: Dish[];
};

const courses: Course[] = [
  {
    title: "Antipasti",
    dishes: [
      {
        name: "Burrata al Tartufo",
        description: "Burrata, black truffle honey, toasted hazelnut, warm sourdough",
        price: "16",
      },
      {
        name: "Vitello Tonnato",
        description: "Thin-sliced veal, tuna-caper cream, fried capers, chive",
        price: "18",
      },
      {
        name: "Carciofi alla Romana",
        description: "Braised artichoke, mint, garlic, pecorino, lemon oil",
        price: "14",
      },
    ],
  },
  {
    title: "Primi",
    dishes: [
      {
        name: "Tagliatelle al Ragù Bianco",
        description: "Hand-cut tagliatelle, veal and pork ragù, aged parmigiano",
        price: "24",
      },
      {
        name: "Risotto al Nero di Seppia",
        description: "Squid-ink risotto, seared scallop, lemon zest",
        price: "27",
      },
      {
        name: "Cacio e Pepe",
        description: "Tonnarelli, pecorino romano, cracked black pepper",
        price: "21",
      },
    ],
  },
  {
    title: "Secondi",
    dishes: [
      {
        name: "Branzino al Sale",
        description: "Salt-crusted branzino, fennel, blood orange, olive oil",
        price: "34",
      },
      {
        name: "Osso Buco alla Milanese",
        description: "Braised veal shank, saffron risotto, gremolata",
        price: "38",
      },
      {
        name: "Costata alla Fiorentina",
        description: "Dry-aged rib eye for two, rosemary, sea salt, lemon",
        price: "72",
      },
    ],
  },
  {
    title: "Dolci",
    dishes: [
      {
        name: "Tiramisù della Casa",
        description: "Espresso-soaked savoiardi, mascarpone, cocoa",
        price: "12",
      },
      {
        name: "Panna Cotta al Limone",
        description: "Lemon panna cotta, wild berry, basil oil",
        price: "11",
      },
      {
        name: "Affogato",
        description: "Vanilla gelato, hot espresso, hazelnut biscotti",
        price: "10",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="bg-forest py-28 text-ivory md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-lg">
          <p className="label-caps mb-5 text-sm text-brass-light">Il Menu</p>
          <h2 className="font-display text-4xl italic leading-[1.1] sm:text-5xl">
            A short list, chosen on purpose.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-ivory/75">
            The full menu changes with the season and the market. Here is
            what tends to stay.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title}>
              <div className="flex items-center gap-4">
                <h3 className="font-display text-2xl italic text-brass-light">
                  {course.title}
                </h3>
                <span className="h-px flex-1 bg-ivory/15" />
              </div>

              <ul className="mt-7 space-y-7">
                {course.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-lg text-ivory">
                        {dish.name}
                      </span>
                      <span className="h-px flex-1 border-b border-dotted border-ivory/20 -translate-y-1" />
                      <span className="text-[15px] text-brass-light">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-ivory/65">
                      {dish.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
