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

export default function EntretenimientoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Entretenimiento para vehículos
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transforma tu vehículo en un centro de entretenimiento con
                  nuestros sistemas multimedia de alta calidad
                </p>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/entretenimiento.jpg"
                  alt="Entretenimiento para vehículos"
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
                  <CardTitle>Sistema Multimedia Premium</CardTitle>
                  <CardDescription>
                    Entretenimiento de alta calidad para tu vehículo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/entretenimiento.jpg"
                        alt="Sistema Multimedia Premium"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro sistema multimedia premium te ofrece una
                        experiencia de entretenimiento excepcional en tu
                        vehículo. Con una pantalla táctil de alta resolución,
                        sistema de audio de alta fidelidad y múltiples opciones
                        de conectividad, podrás disfrutar de tu música, videos y
                        aplicaciones favoritas mientras viajas.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Pantalla táctil de 10.1 pulgadas</li>
                        <li>Resolución HD 1920x1200</li>
                        <li>Sistema de audio de 8 altavoces</li>
                        <li>Compatible con Carplay y Android Auto</li>
                        <li>WiFi y Bluetooth integrados</li>
                        <li>Entrada para dispositivos externos</li>
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
                        src="/images/entretenimiento-instalacion.jpg"
                        alt="Kit de Instalación Profesional"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Nuestro kit de instalación profesional incluye todo lo
                        necesario para montar el sistema multimedia en tu
                        vehículo. Con adaptadores específicos para tu modelo y
                        cables de alta calidad, la instalación será limpia y
                        profesional, manteniendo todas las funciones originales
                        de tu vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Adaptadores específicos para tu modelo</li>
                        <li>Cables de conexión de alta calidad</li>
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
                  <CardTitle>Accesorios Adicionales</CardTitle>
                  <CardDescription>
                    Mejora tu experiencia de entretenimiento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 items-center">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src="/images/entretenimiento-accesorios.jpg"
                        alt="Accesorios Adicionales"
                        width={500}
                        height={300}
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="space-y-4">
                      <p>
                        Complementa tu sistema multimedia con nuestros
                        accesorios adicionales diseñados para mejorar tu
                        experiencia de entretenimiento. Desde subwoofers hasta
                        pantallas adicionales, tenemos todo lo que necesitas
                        para crear el ambiente perfecto en tu vehículo.
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Subwoofers de alta potencia</li>
                        <li>Amplificadores de audio</li>
                        <li>Pantallas adicionales para pasajeros</li>
                        <li>Kits de iluminación ambiental</li>
                        <li>Controles remotos inalámbricos</li>
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
