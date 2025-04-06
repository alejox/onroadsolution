"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold text-black">
              OnRoad Solutions
            </span>
          </Link>
          <p className="text-sm text-gray-700">Bogotá, Colombia</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Link href="/empresa" className="text-sm text-black hover:underline">
            La empresa
          </Link>
          <Link
            href="/productos"
            className="text-sm text-black hover:underline"
          >
            Productos
          </Link>
          <Link href="/contacto" className="text-sm text-black hover:underline">
            Contacto
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700">John Gil - Gerente comercial</p>
          <p className="text-sm text-gray-700">gerencia@onroadsolutions.com</p>
          <p className="text-sm text-gray-700">+57-317-404-4551</p>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm text-gray-700 md:text-left">
            © {new Date().getFullYear()} OnRoad Solutions. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
