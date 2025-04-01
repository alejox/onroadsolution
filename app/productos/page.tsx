import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function ProductosPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Productos</h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubra nuestra amplia gama de soluciones tecnológicas para vehículos
              </p>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/carplay-adapter.jpg"
                    alt="Adaptadores CP, AA y Carbitlink"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
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
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/car-screen.jpg"
                    alt="Pantalla Carplay / Android Auto para carro"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
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
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/moto-screen.jpg"
                    alt="Pantalla Carplay / Android Auto para moto"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Pantalla Carplay / Android Auto para moto</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Con nuestra pantalla con conectividad CP/AA para moto, puedes navegar y olvidarte de estar sacando
                    tu teléfono mientras manejas.
                  </p>
                  <Link href="/productos/pantalla-moto">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/rear-entertainment.jpg"
                    alt="Pantalla entretenimiento trasera"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Pantalla entretenimiento trasera</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Transforma la experiencia de traslado de tus pasajeros en la mejor parte de su día.
                  </p>
                  <Link href="/productos/entretenimiento">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/electric-trunk.jpg"
                    alt="Baúl eléctrico"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Baúl eléctrico</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Qué gran experiencia es tener un baul trasero que se abre y cierra por sí solo, en el momento que lo
                    desees.
                  </p>
                  <Link href="/productos/baul">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/dashcam.jpg"
                    alt="Cámara de tablero (Dashcam)"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
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
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/mirror-camera.jpg"
                    alt="Espejo retrovisor con cámara"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Espejo retrovisor con cámara</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Seguridad y tecnología. Graba tus recorridos y utiliza lo mejor del mercado para mantener
                    conectividad.
                  </p>
                  <Link href="/productos/espejo">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-md">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/images/car-starter.jpg"
                    alt="Iniciador portatil para carro"
                    width={500}
                    height={300}
                    className="object-cover h-full w-full transition-all group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">Iniciador portatil para carro</h3>
                  <p className="line-clamp-2 text-sm text-gray-500">
                    Con nuestros iniciadores portátiles, podemos iniciar desde vehículos de pasajeros hasta vehículos
                    comerciales.
                  </p>
                  <Link href="/productos/iniciador">
                    <Button variant="link" className="p-0 h-auto mt-2">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

