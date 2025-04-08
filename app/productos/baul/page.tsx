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

export default function BaulPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Baúl eléctrico
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Moderniza tu vehículo con un baúl eléctrico de alta calidad y
                  seguridad
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/baul.jpg"
                  alt="Baúl eléctrico"
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
                  <CardTitle>Baúl Eléctrico Premium</CardTitle>
                  <CardDescription>
                    Seguridad y comodidad para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/baul.jpg"
                        alt="Baúl Eléctrico Premium"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro baúl eléctrico premium ofrece una solución
                        elegante y segura para tu vehículo. Con un motor
                        silencioso y un sistema de bloqueo avanzado, podrás
                        abrir y cerrar el baúl con solo presionar un botón,
                        mejorando significativamente tu experiencia de uso.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Motor eléctrico silencioso</li>
                        <li>Sistema de bloqueo de seguridad</li>
                        <li>Control remoto incluido</li>
                        <li>Sensor de obstáculos</li>
                        <li>Función de emergencia manual</li>
                        <li>Instalación profesional garantizada</li>
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
                    Instalación perfecta para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/baul-instalacion.jpg"
                        alt="Kit de Instalación Profesional"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación profesional incluye todo lo
                        necesario para montar el baúl eléctrico en tu vehículo.
                        Con soportes específicos para tu modelo y cables de alta
                        calidad, la instalación será limpia y profesional,
                        manteniendo la estética original de tu vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Soportes específicos para tu modelo</li>
                        <li>Cables de conexión de alta calidad</li>
                        <li>Interfaz de control integrada</li>
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
