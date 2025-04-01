import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdaptadoresPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Adaptadores CP, AA y Carbitlink
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Convierte tu experiencia de manejo en una experiencia completamente inalámbrica
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/carplay-adapter.jpg"
                  alt="Adaptadores CP, AA y Carbitlink"
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
                  <CardTitle>Adaptador Carplay/Android Auto</CardTitle>
                  <CardDescription>Conectividad inalámbrica para tu vehículo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/carplay-adapter.jpg"
                        alt="Adaptador Carplay/Android Auto"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Convierte tu experiencia de manejo en una experiencia completamente inalámbrica. Si tu vehículo
                        cuenta con CP o AA por cable, este dispositivo te permite hacer uso de forma inalámbrica.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Conexión inalámbrica instantánea</li>
                        <li>Compatible con iOS y Android</li>
                        <li>Fácil instalación</li>
                        <li>Sin retrasos en la transmisión</li>
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
              <Card>
                <CardHeader>
                  <CardTitle>Adaptador para interfaz Carbitlink</CardTitle>
                  <CardDescription>Conecta tu dispositivo móvil a través de Carbitlink</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/android-auto.jpg"
                        alt="Adaptador para interfaz Carbitlink"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Si tu vehículo cuenta con conexión Carbitlink, este dispositivo te permitirá conectar tu
                        dispositivo móvil para que puedas utilizar conexión por medio de Carplay/Android Auto.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Compatible con sistemas Carbitlink</li>
                        <li>Integración perfecta con tu vehículo</li>
                        <li>Mantiene todas las funciones originales</li>
                        <li>Actualizable por USB</li>
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
              <Card>
                <CardHeader>
                  <CardTitle>Adaptador Carplay Box</CardTitle>
                  <CardDescription>Expande las capacidades de tu sistema Carplay</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/carplay-box.jpg"
                        alt="Adaptador Carplay Box"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        ¿Tu vehículo cuenta con Carplay? Entonces con este dispositivo podrás conectarte de forma
                        adicional Android Auto y lo que es mejor, podrás descargar tus aplicaciones de streaming
                        favoritas por medio de la App Store. Por si fuera poco, cuenta con entrada HDMI para conectar tu
                        dispositivo Roku, Chromecast y más.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Añade soporte para Android Auto</li>
                        <li>Acceso a aplicaciones de streaming</li>
                        <li>Entrada HDMI para dispositivos externos</li>
                        <li>Interfaz intuitiva y fácil de usar</li>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

