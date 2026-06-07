import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-[#94A3B8] py-16 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <div className="mb-4">
            <Logo size={32} wordmarkColor="white" />
          </div>
          <p className="text-[14px] leading-relaxed mb-3">
            Entrena mejor, repetición por repetición.
          </p>
          <p className="text-[12px] text-[#475569]">
            WiseRep es parte del ecosistema Gymoss,<br />desarrollado por Zivelo.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[13px] mb-5">Producto</h4>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li><Link href="#funciones" className="hover:text-white transition-colors">Funciones</Link></li>
            <li><Link href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</Link></li>
            <li><Link href="#precios" className="hover:text-white transition-colors">Precios</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[13px] mb-5">Ecosistema</h4>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li><Link href="#gymoss" className="hover:text-white transition-colors">Gymoss</Link></li>
            <li><a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">Para gimnasios</a></li>
            <li><a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">Para entrenadores</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-[13px] mb-5">Contacto</h4>
          <ul className="flex flex-col gap-3 text-[14px]">
            <li>
              <a href="mailto:contacto@zivelo.dev" className="hover:text-white transition-colors">
                contacto@zivelo.dev
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-6 border-t border-[#1E293B] text-[12px] text-[#475569]">
        © {new Date().getFullYear()} WiseRep · Gymoss · Zivelo
      </div>
    </footer>
  );
}
