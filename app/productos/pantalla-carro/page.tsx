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

export default function PantallaCarroPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Pantalla Carplay / Android Auto para carro
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Actualiza tu vehículo con una pantalla multimedia de última
                  generación compatible con Carplay y Android Auto
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
                  <CardTitle>Pantalla Multimedia de Alta Resolución</CardTitle>
                  <CardDescription>
                    Navegación y entretenimiento para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/car-screen.jpg"
                        alt="Pantalla Multimedia de Alta Resolución"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestra pantalla multimedia de alta resolución te ofrece
                        una experiencia premium de navegación y entretenimiento.
                        Compatible con Carplay y Android Auto, esta pantalla
                        táctil de 10.1 pulgadas te permite acceder a todas tus
                        aplicaciones favoritas mientras conduces de forma
                        segura.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Pantalla táctil de 10.1 pulgadas</li>
                        <li>Resolución HD 1280x720</li>
                        <li>Compatible con Carplay y Android Auto</li>
                        <li>Procesador de alta velocidad</li>
                        <li>WiFi y Bluetooth integrados</li>
                        <li>Entrada para cámara de reversa</li>
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
                  <CardTitle>Kit de Instalación Universal</CardTitle>
                  <CardDescription>
                    Adaptable a la mayoría de vehículos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/car-installation.jpg"
                        alt="Kit de Instalación Universal"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación universal está diseñado para
                        adaptarse a la mayoría de vehículos. Incluye todos los
                        cables y adaptadores necesarios para una instalación
                        profesional y segura, manteniendo todas las funciones
                        originales de tu vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Adaptadores para diferentes modelos</li>
                        <li>Cables de conexión universales</li>
                        <li>Interfaz de retención de funciones</li>
                        <li>Manual de instalación detallado</li>
                        <li>Soporte técnico post-instalación</li>
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
                  <CardTitle>Funciones Adicionales</CardTitle>
                  <CardDescription>
                    Mejora tu experiencia de conducción
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/car-features.jpg"
                        alt="Funciones Adicionales"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Disfruta de funciones adicionales que mejoran tu
                        experiencia de conducción. Desde control de clima hasta
                        monitoreo del vehículo, nuestra pantalla te ofrece todo
                        lo que necesitas para un viaje más seguro y entretenido.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Control de clima integrado</li>
                        <li>Monitoreo del vehículo en tiempo real</li>
                        <li>Modo split screen para múltiples funciones</li>
                        <li>Ecualizador de audio personalizable</li>
                        <li>Soporte para aplicaciones de streaming</li>
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
