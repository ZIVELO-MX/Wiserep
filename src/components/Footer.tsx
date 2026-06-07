import Link from "next/link";
import Logo from "./Logo";

const navColumns = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "#funciones" },
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Precios", href: "#precios" },
    ],
  },
  {
    title: "Gymoss",
    links: [
      { label: "Para gimnasios", href: "mailto:contacto@zivelo.dev" },
      { label: "Para entrenadores", href: "mailto:contacto@zivelo.dev" },
      { label: "Ecosistema", href: "#gymoss" },
    ],
  },
  {
    title: "Soporte",
    links: [
      { label: "Contacto", href: "mailto:contacto@zivelo.dev" },
      { label: "Beta feedback", href: "mailto:contacto@zivelo.dev" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFC] dark:bg-[#0F172A] px-4 sm:px-6 pt-4 pb-6">
      {/* Rounded card: white / #1E293B */}
      <div className="max-w-[1280px] mx-auto bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-[32px] px-8 sm:px-12 pt-10 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand area */}
          <div className="lg:col-span-2">
            <Logo size={34} wordmarkColor="dark" />
            <p className="text-[14px] text-[#475569] dark:text-[#94A3B8] mt-4 leading-relaxed max-w-[220px]">
              Entrena mejor, repetición por repetición.
            </p>
            <p className="text-[12px] text-[#94A3B8] dark:text-[#475569] mt-3 leading-relaxed">
              WiseRep es parte del ecosistema Gymoss,
              <br />
              desarrollado por Zivelo.
            </p>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[#0F172A] dark:text-white font-semibold text-[13px] mb-5 tracking-wide">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("mailto") ? (
                      <a
                        href={link.href}
                        className="text-[14px] text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[14px] text-[#475569] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-[#E2E8F0] dark:border-[#1E3A8A]/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#94A3B8] dark:text-[#475569]">
            © {new Date().getFullYear()} WiseRep · Gymoss · Zivelo
          </p>
          <a
            href="mailto:contacto@zivelo.dev"
            className="text-[12px] text-[#94A3B8] dark:text-[#475569] hover:text-[#475569] dark:hover:text-[#94A3B8] transition-colors"
          >
            contacto@zivelo.dev
          </a>
        </div>
      </div>
    </footer>
  );
}
