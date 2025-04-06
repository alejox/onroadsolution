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

export default function EspejoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Espejo retrovisor con cámara
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Mejora tu visibilidad y seguridad con un espejo retrovisor
                  inteligente con cámara integrada
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/espejo.jpg"
                  alt="Espejo retrovisor con cámara"
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
                  <CardTitle>Espejo Retrovisor Inteligente</CardTitle>
                  <CardDescription>
                    Visibilidad y seguridad mejoradas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/espejo.jpg"
                        alt="Espejo Retrovisor Inteligente"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro espejo retrovisor inteligente con cámara
                        integrada te ofrece una visibilidad excepcional y mayor
                        seguridad en la carretera. Con una pantalla de alta
                        resolución y funciones avanzadas, podrás ver claramente
                        lo que hay detrás de tu vehículo en cualquier condición.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Pantalla de 9.35 pulgadas</li>
                        <li>Resolución HD 1920x480</li>
                        <li>Cámara trasera de alta calidad</li>
                        <li>Modo nocturno automático</li>
                        <li>Sensor de lluvia</li>
                        <li>Detección de movimiento</li>
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
                  <CardTitle>Kit de Instalación Completo</CardTitle>
                  <CardDescription>
                    Instalación profesional garantizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/espejo-instalacion.jpg"
                        alt="Kit de Instalación Completo"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación completo incluye todo lo
                        necesario para montar el espejo retrovisor inteligente
                        en tu vehículo. Con adaptadores universales y cables de
                        alta calidad, la instalación será limpia y profesional,
                        manteniendo todas las funciones originales de tu
                        vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Adaptadores universales</li>
                        <li>Cables de conexión específicos</li>
                        <li>Herramientas de instalación</li>
                        <li>Manual detallado</li>
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
                    Características avanzadas de seguridad
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/espejo-funciones.jpg"
                        alt="Funciones Adicionales"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro espejo retrovisor inteligente incluye funciones
                        adicionales diseñadas para mejorar tu seguridad y
                        comodidad. Desde grabación de video en bucle hasta
                        alertas de colisión trasera, estas características te
                        ayudarán a mantenerte seguro en la carretera.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Grabación de video en bucle</li>
                        <li>Alertas de colisión trasera</li>
                        <li>Modo dividido para múltiples cámaras</li>
                        <li>Guía de estacionamiento</li>
                        <li>Conexión Bluetooth</li>
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
