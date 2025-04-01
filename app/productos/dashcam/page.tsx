import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashcamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Cámara de tablero (Dashcam)
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seguridad y tranquilidad en cada viaje
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dashcam.jpg"
                  alt="Cámara de tablero (Dashcam)"
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
            <div className="mx-auto grid max-w-5xl gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Cámara de tablero (Dashcam)</CardTitle>
                  <CardDescription>Grabación continua para tu seguridad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/dashcam.jpg"
                        alt="Cámara de tablero (Dashcam)"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        La inseguridad de la ciudad o un choque inesperado no se eligen, pero si puedes elegir la mejor
                        forma de monitorearlo. Con nuestras cámaras de tablero siempre tendrás las pruebas necesarias,
                        lo que se traduce en seguridad para ti y la comunidad.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Grabación en alta definición</li>
                        <li>Visión nocturna avanzada</li>
                        <li>Detección de impactos</li>
                        <li>Grabación en bucle automática</li>
                        <li>Fácil instalación y uso</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contacto">
                    <Button>Solicitar información</Button>
                  </Link>
                </CardFooter>
              </Card>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">¿Por qué necesitas una dashcam?</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Evidencia en accidentes</h3>
                    <p className="text-sm text-gray-500">
                      Proporciona pruebas claras de lo sucedido en caso de accidentes de tráfico, facilitando los
                      trámites con seguros.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Seguridad personal</h3>
                    <p className="text-sm text-gray-500">
                      Disuade a posibles delincuentes y documenta cualquier incidente de seguridad que pueda ocurrir.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Monitoreo de flotillas</h3>
                    <p className="text-sm text-gray-500">
                      Ideal para empresas que necesitan supervisar el uso de sus vehículos y garantizar la seguridad de
                      sus conductores.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

