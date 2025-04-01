import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">OnRoad Solutions</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Inicio
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary">
                Productos y Soluciones
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md p-2 w-64 z-50">
                <Link href="/productos/adaptadores" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Adaptadores CP, AA y Carbitlink
                </Link>
                <Link href="/productos/pantalla-carro" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Pantalla Carplay / Android Auto para carro
                </Link>
                <Link href="/productos/pantalla-moto" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Pantalla Carplay / Android Auto para moto
                </Link>
                <Link href="/productos/entretenimiento" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Pantalla entretenimiento trasera
                </Link>
                <Link href="/productos/baul" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Baúl eléctrico
                </Link>
                <Link href="/productos/dashcam" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Cámara de tablero (Dashcam)
                </Link>
                <Link href="/productos/espejo" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Espejo retrovisor con cámara
                </Link>
                <Link href="/productos/iniciador" className="block p-2 text-sm hover:bg-muted rounded-md">
                  Iniciador portatil para carro
                </Link>
              </div>
            </div>
            <Link href="/empresa" className="text-sm font-medium hover:text-primary">
              La empresa
            </Link>
            <Link href="/contacto" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="relative z-20 h-10 w-10" aria-label="Toggle Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Soluciones tecnológicas para su vehículo
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conectando Asia y Latinoamérica con productos de alta calidad para el sector automotriz.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/productos">
                    <Button>Ver Productos</Button>
                  </Link>
                  <Link href="/contacto">
                    <Button variant="outline">Contactar</Button>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Productos</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubra nuestra amplia gama de soluciones tecnológicas para vehículos
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
                  <h3 className="text-lg font-bold">Adaptadores CP, AA y Carbitlink</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Convierte tu experiencia de manejo en una experiencia completamente inalámbrica.
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
                  <h3 className="text-lg font-bold">Pantalla Carplay / Android Auto para carro</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    No pierdas conectividad! Maneja tus aplicaciones como si tuvieras un radio de última tecnología.
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
                  <h3 className="text-lg font-bold">Cámara de tablero (Dashcam)</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Con nuestras cámaras de tablero siempre tendrás las pruebas necesarias.
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
        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">La empresa</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Onroad Solutions nace de la experiencia de más de 12 años en comercio internacional, trabajando de
                  cerca con las principales empresas asiáticas del sector automotriz.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con la visión de convertirnos en un aliado estratégico, creamos Onroad Solutions, una empresa que se
                  enfoca en ofrecer una solución integral de distribución.
                </p>
                <Link href="/empresa">
                  <Button variant="outline">Conocer más</Button>
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
      <footer className="border-t bg-gray-100">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-bold">OnRoad Solutions</span>
            </Link>
            <p className="text-sm text-gray-500">Bogotá, Colombia</p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <Link href="/empresa" className="text-sm hover:underline">
              La empresa
            </Link>
            <Link href="/productos" className="text-sm hover:underline">
              Productos
            </Link>
            <Link href="/contacto" className="text-sm hover:underline">
              Contacto
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">John Gil - Gerente comercial</p>
            <p className="text-sm text-gray-500">gerencia@onroadsolutions.com</p>
            <p className="text-sm text-gray-500">+57-317-404-4551</p>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
            <p className="text-center text-sm text-gray-500 md:text-left">
              © {new Date().getFullYear()} OnRoad Solutions. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

