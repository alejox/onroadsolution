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

export default function InfladorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Inflador portátil profesional
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Solución portátil y profesional para inflar neumáticos y otros
                  elementos inflables
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
                <Image
                  src="/images/inflador.jpg"
                  alt="Inflador portátil profesional"
                  width={800}
                  height={500}
                  className="object-cover object-center w-full h-full"
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
                  <CardTitle>Inflador Portátil de Alta Presión</CardTitle>
                  <CardDescription>
                    Potencia y precisión en un dispositivo compacto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                      <Image
                        src="/images/inflador.jpg"
                        alt="Inflador Portátil de Alta Presión"
                        width={500}
                        height={300}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro inflador portátil profesional te ofrece la
                        potencia y precisión necesarias para inflar neumáticos y
                        otros elementos inflables. Con su diseño compacto y
                        robusto, es la solución perfecta para emergencias y uso
                        profesional.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Alta presión de inflado</li>
                        <li>Diseño compacto y portátil</li>
                        <li>Batería de larga duración</li>
                        <li>Pantalla digital de presión</li>
                        <li>Múltiples adaptadores incluidos</li>
                        <li>Protección contra sobrecalentamiento</li>
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
                  <CardTitle>Kit de Accesorios Completo</CardTitle>
                  <CardDescription>
                    Todo lo necesario para un uso profesional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 flex items-center justify-center">
                      <Image
                        src="/images/inflador-accesorios.jpg"
                        alt="Kit de Accesorios Completo"
                        width={500}
                        height={300}
                        className="object-cover object-center w-full h-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        El kit incluye todos los accesorios necesarios para un
                        uso profesional. Con adaptadores universales y
                        herramientas específicas, podrás inflar cualquier tipo
                        de neumático o elemento inflable con facilidad y
                        precisión.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Adaptadores universales</li>
                        <li>Cables de carga rápida</li>
                        <li>Maletín de transporte</li>
                        <li>Manual de usuario detallado</li>
                        <li>Garantía extendida</li>
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
