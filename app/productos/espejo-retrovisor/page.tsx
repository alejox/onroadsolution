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

export default function EspejoRetrovisorPage() {
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
                  Mejora tu visibilidad y seguridad con nuestro espejo
                  retrovisor inteligente con cámara integrada
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/espejo-retrovisor.jpg"
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
                        src="/images/espejo-retrovisor.jpg"
                        alt="Espejo Retrovisor Inteligente"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro espejo retrovisor inteligente con cámara
                        integrada te ofrece una visibilidad excepcional y
                        funciones avanzadas de seguridad. Con una pantalla de
                        alta resolución y cámara de visión trasera, podrás ver
                        claramente lo que hay detrás de tu vehículo, incluso en
                        condiciones de poca luz.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Pantalla de 9.35 pulgadas</li>
                        <li>Resolución HD 1920x480</li>
                        <li>Cámara de visión trasera de alta calidad</li>
                        <li>Modo nocturno automático</li>
                        <li>Sensor de lluvia</li>
                        <li>Detección de objetos en movimiento</li>
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
                    Fácil instalación en cualquier vehículo
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
                        Nuestro kit de instalación incluye todo lo necesario
                        para montar el espejo retrovisor con cámara en tu
                        vehículo. Con adaptadores universales y cables
                        específicos, la instalación será sencilla y profesional,
                        sin necesidad de modificaciones permanentes en tu
                        vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Adaptadores universales</li>
                        <li>Cables de conexión específicos</li>
                        <li>Herramientas de instalación</li>
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
                    Tecnología avanzada para tu seguridad
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
                        Disfruta de funciones adicionales que mejoran tu
                        experiencia de conducción y seguridad. Desde grabación
                        de video hasta alertas de colisión, nuestro espejo
                        retrovisor inteligente te ofrece tranquilidad en cada
                        viaje.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Grabación de video en bucle</li>
                        <li>Alerta de colisión trasera</li>
                        <li>Modo dividido para múltiples cámaras</li>
                        <li>Guía de estacionamiento</li>
                        <li>Conectividad Bluetooth</li>
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
