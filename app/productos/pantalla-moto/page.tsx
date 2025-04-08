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

export default function PantallaMotoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Pantalla Carplay / Android Auto para moto
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transforma tu moto con una pantalla inteligente resistente al
                  agua y con todas las funciones de navegación y entretenimiento
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/moto-screen.jpg"
                  alt="Pantalla Carplay / Android Auto para moto"
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
                  <CardTitle>Pantalla Táctil Resistente al Agua</CardTitle>
                  <CardDescription>
                    Navegación y entretenimiento para tu moto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/moto-screen.jpg"
                        alt="Pantalla Táctil Resistente al Agua"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Diseñada específicamente para motos, esta pantalla
                        táctil resistente al agua te permite disfrutar de todas
                        las funciones de Carplay y Android Auto mientras
                        conduces. Con una pantalla de alta resolución y brillo
                        ajustable, podrás ver claramente tu navegación y
                        controlar tu música sin importar las condiciones
                        climáticas.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Resistente al agua IP67</li>
                        <li>Pantalla táctil de 5 pulgadas</li>
                        <li>Brillo ajustable para visibilidad diurna</li>
                        <li>Montaje universal para motos</li>
                        <li>Control de música y llamadas</li>
                        <li>Navegación GPS integrada</li>
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
                    Todo lo necesario para una instalación profesional
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/moto-installation.jpg"
                        alt="Kit de Instalación Completo"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación incluye todo lo necesario
                        para montar la pantalla en tu moto de forma segura y
                        profesional. Con soportes ajustables y cables
                        específicos para tu modelo, la instalación será sencilla
                        y duradera.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Soportes ajustables para diferentes modelos</li>
                        <li>Cables de conexión específicos</li>
                        <li>Kit de montaje antivibración</li>
                        <li>Manual de instalación detallado</li>
                        <li>Garantía de instalación profesional</li>
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
