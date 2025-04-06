import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashcamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Dashcam
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Registra cada momento de tu viaje con nuestra dashcam de alta
                  calidad y resolución
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/dashcam.jpg"
                  alt="Dashcam"
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
                  <CardTitle>Dashcam de Alta Resolución</CardTitle>
                  <CardDescription>
                    Seguridad y calidad en cada viaje
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/dashcam.jpg"
                        alt="Dashcam de Alta Resolución"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestra dashcam de alta resolución te ofrece la mejor
                        calidad de video para registrar cada momento de tu
                        viaje. Con una cámara de 4K y visión nocturna, podrás
                        capturar todos los detalles importantes, incluso en
                        condiciones de poca luz.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Resolución 4K Ultra HD</li>
                        <li>Visión nocturna de alta calidad</li>
                        <li>Sensor de movimiento</li>
                        <li>Grabación en bucle</li>
                        <li>GPS integrado</li>
                        <li>WiFi para transferencia de archivos</li>
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
                  <CardTitle>Kit de Instalación Profesional</CardTitle>
                  <CardDescription>
                    Instalación segura y discreta
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/dashcam-installation.jpg"
                        alt="Kit de Instalación Profesional"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación profesional incluye todo lo
                        necesario para montar la dashcam de forma segura y
                        discreta en tu vehículo. Con cables ocultos y soportes
                        ajustables, la instalación será limpia y profesional.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Cables de alimentación ocultos</li>
                        <li>Soportes ajustables</li>
                        <li>Kit de cableado profesional</li>
                        <li>Manual de instalación detallado</li>
                        <li>Garantía de instalación</li>
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
                  <CardTitle>Funciones de Seguridad</CardTitle>
                  <CardDescription>
                    Protección total para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/dashcam-features.jpg"
                        alt="Funciones de Seguridad"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Disfruta de funciones avanzadas de seguridad que te
                        ayudarán a proteger tu vehículo y documentar cualquier
                        incidente. Desde detección de colisiones hasta grabación
                        automática, nuestra dashcam te ofrece tranquilidad en
                        cada viaje.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Detección de colisiones</li>
                        <li>Grabación automática en caso de impacto</li>
                        <li>Modo de estacionamiento</li>
                        <li>Alerta de carril</li>
                        <li>Advertencia de distancia</li>
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
  );
}
