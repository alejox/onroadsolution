import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function EmpresaPage() {
  return (
    <div className="flex-1">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Sobre Nosotros
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Onroad Solutions nace de la experiencia de más de 12 años en
                  comercio internacional, trabajando de cerca con las
                  principales empresas asiáticas del sector automotriz.
                </p>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con la visión de convertirnos en un aliado estratégico,
                  creamos Onroad Solutions, una empresa que se enfoca en ofrecer
                  una solución integral de distribución.
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/company.webp"
                  alt="OnRoad Solutions Empresa"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">
                  Nuestra Historia
                </h2>
                <p className="text-gray-700">
                  Onroad Solutions nace de la experiencia de más de 12 años en
                  comercio internacional, trabajando de cerca con las
                  principales empresas asiáticas del sector automotriz. Durante
                  este tiempo, comprendimos a fondo las necesidades del mercado
                  y los desafíos que enfrentan distribuidores, talleres y
                  empresas en la búsqueda de soluciones confiables y eficientes.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">
                  Nuestra Visión
                </h2>
                <p className="text-gray-700">
                  Con la visión de convertirnos en un aliado estratégico,
                  creamos Onroad Solutions, una empresa que se enfoca en ofrecer
                  una solución integral de distribución. Nuestro compromiso es
                  conectar a nuestros clientes con productos de alta calidad,
                  optimizando tiempos, costos y garantizando un servicio
                  confiable en cada paso. La comunicación es el pilar de nuestra
                  operación.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-black">
                  Nuestro Presente
                </h2>
                <p className="text-gray-700">
                  Hoy, Onroad Solutions no solo es un puente entre Asia y
                  Latinoamérica, sino también un socio de confianza para
                  aquellos que buscan eficiencia, calidad y una red de
                  suministro sólida en el mundo tecnológico.
                </p>
              </div>
              <div className="flex justify-center pt-8">
                <Link href="/contacto">
                  <Button>Contáctanos</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
