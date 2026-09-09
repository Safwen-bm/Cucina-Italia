import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-forest-deep py-16 text-ivory/70">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-display text-2xl italic text-ivory">
              Controluce
            </span>
            <p className="label-caps mt-3 text-sm text-ivory/50">
              Cucina Italiana &middot; Monastir
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-[15px]">
            <a href="#storia" className="hover:text-brass-light">La Storia</a>
            <a href="#menu" className="hover:text-brass-light">Il Menu</a>
            <a href="#interno" className="hover:text-brass-light">L&rsquo;Interno</a>
            <a href="#dove" className="hover:text-brass-light">Dove Siamo</a>
            <a href="#prenota" className="hover:text-brass-light">Prenota</a>
          </nav>

          <div className="flex flex-col gap-1 text-[15px]">
            <a href="tel:+21658221658" className="hover:text-brass-light">
              +216 58 221 658
            </a>
            <a href="mailto:safwenbenmabrouk@gmail.com" className="hover:text-brass-light">
              safwenbenmabrouk@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-6 border-t border-ivory/10 pt-8 md:flex-row md:items-center">
          <p className="text-[13px] text-ivory/40">
            &copy; {new Date().getFullYear()} Controluce. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <p className="flex items-center gap-3 text-[13px] text-ivory/40">
              <span>Site by Safwen Ben Mabrouk</span>
              <a
                href="https://www.linkedin.com/in/safwen-ben-mabrouk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Safwen Ben Mabrouk on LinkedIn"
                className="text-ivory/50 transition-colors hover:text-brass-light"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="https://github.com/Safwen-bm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Safwen Ben Mabrouk on GitHub"
                className="text-ivory/50 transition-colors hover:text-brass-light"
              >
                <FaGithub size={15} />
              </a>
            </p>

            <div className="tricolore-rule">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}