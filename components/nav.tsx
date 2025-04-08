"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface NavProps {
  onClose?: () => void;
}

export function Nav({ onClose }: NavProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    onClose?.();
  };

  return (
    <nav className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <Link
        href="/"
        className="text-sm font-medium text-foreground hover:text-primary"
        onClick={handleLinkClick}
      >
        Inicio
      </Link>
      <div className="relative w-full md:w-auto">
        <button
          className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary w-full md:w-auto"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Productos y Soluciones
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`${
            isDropdownOpen ? "block" : "hidden"
          } md:group-hover:block absolute left-0 top-full bg-white shadow-lg rounded-md p-2 w-full md:w-64 z-50`}
        >
          <Link
            href="/productos/adaptadores"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Adaptadores CP, AA y Carbitlink
          </Link>
          <Link
            href="/productos/pantalla-carro"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Pantalla Carplay / Android Auto para carro
          </Link>
          <Link
            href="/productos/pantalla-moto"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Pantalla Carplay / Android Auto para moto
          </Link>
          <Link
            href="/productos/baul"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Baúl eléctrico
          </Link>
          <Link
            href="/productos/dashcam"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Cámara de tablero (Dashcam)
          </Link>
          <Link
            href="/productos/espejo"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Espejo retrovisor con cámara
          </Link>
          <Link
            href="/productos/inflador"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Inflador portátil profesional
          </Link>
          <Link
            href="/productos/iniciador"
            className="block p-2 text-sm text-black hover:bg-gray-100 rounded-md"
            onClick={handleLinkClick}
          >
            Iniciador portatil para carro
          </Link>
        </div>
      </div>
      <Link
        href="/empresa"
        className="text-sm font-medium text-foreground hover:text-primary"
        onClick={handleLinkClick}
      >
        La empresa
      </Link>
      <Link
        href="/contacto"
        className="text-sm font-medium text-foreground hover:text-primary"
        onClick={handleLinkClick}
      >
        Contacto
      </Link>
    </nav>
  );
}
