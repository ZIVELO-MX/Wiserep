import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-[#94A3B8] py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <div className="text-white font-bold text-xl mb-2">WiseRep</div>
          <p className="text-sm leading-relaxed mb-3">
            Entrena mejor, repetición por repetición.
          </p>
          <p className="text-xs text-[#475569]">
            WiseRep es parte del ecosistema Gymoss,<br />desarrollado por Zivelo.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Producto</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="#funciones" className="hover:text-white transition-colors">Funciones</Link></li>
            <li><Link href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link></li>
            <li><Link href="#precios" className="hover:text-white transition-colors">Precios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Ecosistema</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="#gymoss" className="hover:text-white transition-colors">Gymoss</Link></li>
            <li><a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">Para gimnasios</a></li>
            <li><a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">Para entrenadores</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Contacto</h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">
                contacto@zivelo.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-[#1E293B] text-xs text-[#475569]">
        © {new Date().getFullYear()} WiseRep · Gymoss · Zivelo
      </div>
    </footer>
  );
}
