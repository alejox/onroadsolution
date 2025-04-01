import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PantallaCarroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pantalla Carplay / Android Auto para carro
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  No pierdas conectividad!
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/car-screen.jpg"
                  alt="Pantalla Carplay / Android Auto para carro"
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
                  <CardTitle>Pantalla Carplay / Android Auto para carro</CardTitle>
                  <CardDescription>Conectividad avanzada para tu vehículo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/car-screen.jpg"
                        alt="Pantalla Carplay / Android Auto para carro"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Con nuestra pantalla con conectividad CP/AA puedes manejar tus aplicaciones como si tuvieras un
                        radio de última tecnología.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Pantalla táctil de alta resolución</li>
                        <li>Compatible con Apple CarPlay y Android Auto</li>
                        <li>Conexión Bluetooth, USB y auxiliar</li>
                        <li>Fácil instalación en la mayoría de vehículos</li>
                        <li>Control por voz integrado</li>
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
                <h2 className="text-2xl font-bold">Beneficios de nuestras pantallas</h2>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Navegación intuitiva</h3>
                    <p className="text-sm text-gray-500">
                      Accede a mapas y navegación en tiempo real sin necesidad de usar tu teléfono mientras conduces.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Entretenimiento a bordo</h3>
                    <p className="text-sm text-gray-500">
                      Disfruta de tu música, podcasts y aplicaciones de streaming favoritas directamente desde la
                      pantalla de tu vehículo.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Comunicación segura</h3>
                    <p className="text-sm text-gray-500">
                      Realiza y recibe llamadas, envía mensajes por voz y mantente conectado de forma segura mientras
                      conduces.
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

