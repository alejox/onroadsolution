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

export default function IniciadorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Iniciador portátil para carro
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solución de emergencia confiable para cuando tu batería falle
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/iniciador.jpg"
                  alt="Iniciador portátil para carro"
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
                  <CardTitle>Iniciador Portátil de Alta Potencia</CardTitle>
                  <CardDescription>
                    Energía de emergencia cuando la necesites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/iniciador.jpg"
                        alt="Iniciador Portátil de Alta Potencia"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro iniciador portátil de alta potencia es la
                        solución perfecta para emergencias cuando tu batería
                        falle. Con 2000 amperes pico, este dispositivo compacto
                        puede arrancar incluso los motores más grandes. La
                        batería de litio de larga duración te dará la
                        tranquilidad de saber que siempre tendrás una solución a
                        mano.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Batería de litio de larga duración</li>
                        <li>Pantalla LED para monitoreo</li>
                        <li>Protección contra sobrecarga</li>
                        <li>Diseño compacto y portátil</li>
                        <li>Compatible con la mayoría de vehículos</li>
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
                  <CardTitle>Kit Completo de Accesorios</CardTitle>
                  <CardDescription>
                    Todo lo que necesitas para emergencias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/iniciador-kit.jpg"
                        alt="Kit Completo de Accesorios"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit completo incluye todos los accesorios
                        necesarios para usar el iniciador portátil de manera
                        efectiva y segura. Con cables de alta calidad,
                        adaptadores universales y una funda protectora, estarás
                        preparado para cualquier emergencia.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Cables de arranque de alta calidad</li>
                        <li>Adaptadores universales</li>
                        <li>Funda protectora resistente</li>
                        <li>Manual de usuario detallado</li>
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
