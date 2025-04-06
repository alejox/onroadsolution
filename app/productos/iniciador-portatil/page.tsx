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

export default function IniciadorPortatilPage() {
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
                  Nunca te quedes varado con nuestro iniciador portátil de alta
                  potencia para emergencias
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/iniciador-portatil.jpg"
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
                    Energía de emergencia para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/iniciador-portatil.jpg"
                        alt="Iniciador Portátil de Alta Potencia"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro iniciador portátil de alta potencia te ofrece la
                        tranquilidad de saber que nunca te quedarás varado. Con
                        una capacidad de 2000 amperios pico, este dispositivo
                        compacto puede iniciar incluso los motores más grandes,
                        desde motos hasta camiones.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>2000 amperios pico de potencia</li>
                        <li>Batería de litio de larga duración</li>
                        <li>Pantalla LED con indicador de carga</li>
                        <li>Protección contra sobrecarga</li>
                        <li>Puerto USB para cargar dispositivos</li>
                        <li>Linterna LED integrada</li>
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
                    Todo lo necesario para emergencias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/iniciador-accesorios.jpg"
                        alt="Kit Completo de Accesorios"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit completo incluye todos los accesorios
                        necesarios para utilizar el iniciador portátil de forma
                        segura y eficiente. Desde cables de alta calidad hasta
                        adaptadores para diferentes tipos de vehículos, tenemos
                        todo lo que necesitas para estar preparado en caso de
                        emergencia.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Cables de inicio de alta calidad</li>
                        <li>Adaptadores para diferentes vehículos</li>
                        <li>Maletín de transporte resistente</li>
                        <li>Cargador de pared incluido</li>
                        <li>Manual de usuario detallado</li>
                        <li>Guantes de seguridad</li>
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
                  <CardDescription>Más que un simple iniciador</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/iniciador-funciones.jpg"
                        alt="Funciones Adicionales"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro iniciador portátil ofrece funciones adicionales
                        que lo convierten en una herramienta versátil para
                        emergencias. Desde cargar dispositivos móviles hasta
                        iluminar tu camino en la oscuridad, este dispositivo te
                        ayudará en múltiples situaciones.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Carga rápida de dispositivos USB</li>
                        <li>Linterna LED de alta luminosidad</li>
                        <li>Modo SOS para emergencias</li>
                        <li>Diagnóstico de batería</li>
                        <li>Protección contra cortocircuitos</li>
                        <li>Diseño compacto y portátil</li>
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
