import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Soluciones tecnológicas para su vehículo
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conectando Asia y Latinoamérica con productos de alta calidad
                  para el sector automotriz.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/productos">
                    <Button>Ver Productos</Button>
                  </Link>
                  <Link href="/contacto">
                    <Button
                      variant="outline"
                      className="text-white border-white hover:bg-white hover:text-black"
                    >
                      Contactar
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-banner.jpg"
                  alt="OnRoad Solutions"
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Nuestros Productos
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra nuestra amplia gama de soluciones tecnológicas para
                  vehículos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Adaptador+CarPlay"
                    alt="Adaptadores CP, AA y Carbitlink"
                    width={500}
                    height={300}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Adaptadores CP, AA y Carbitlink
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    Convierte tu experiencia de manejo en una experiencia
                    completamente inalámbrica.
                  </p>
                  <Link href="/productos/adaptadores">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Pantalla+CarPlay"
                    alt="Pantalla Carplay / Android Auto para carro"
                    width={500}
                    height={300}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Pantalla Carplay / Android Auto para carro
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    No pierdas conectividad! Maneja tus aplicaciones como si
                    tuvieras un radio de última tecnología.
                  </p>
                  <Link href="/productos/pantalla-carro">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Dashcam"
                    alt="Cámara de tablero (Dashcam)"
                    width={500}
                    height={300}
                    className="object-cover transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-foreground">
                    Cámara de tablero (Dashcam)
                  </h3>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    Con nuestras cámaras de tablero siempre tendrás las pruebas
                    necesarias.
                  </p>
                  <Link href="/productos/dashcam">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/productos">
                <Button variant="outline">Ver todos los productos</Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  La empresa
                </h2>
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
                <Link href="/empresa">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Conocer más
                  </Button>
                </Link>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/company-image.jpg"
                  alt="OnRoad Solutions Empresa"
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
