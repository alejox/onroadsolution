import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Contacto
                </h1>
                <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarte. Contáctanos para más información
                  sobre nuestros productos y servicios.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de Contacto</CardTitle>
                    <CardDescription>
                      Nuestros datos para que puedas comunicarte con nosotros
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 mt-0.5 text-gray-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Teléfono</p>
                        <p className="text-sm text-gray-500">
                          +57-317-404-4551
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 mt-0.5 text-gray-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-gray-500">
                          gerencia@onroadsolutions.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 mt-0.5 text-gray-500" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Ubicación</p>
                        <p className="text-sm text-gray-500">
                          Bogotá, Colombia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name" className="text-gray-900">
                        Nombre
                      </Label>
                      <Input id="first-name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name" className="text-gray-900">
                        Apellido
                      </Label>
                      <Input id="last-name" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-900">
                      Email
                    </Label>
                    <Input id="email" placeholder="tu@email.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      placeholder="Tu número de teléfono"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-900">
                      Mensaje
                    </Label>
                    <Textarea
                      className="min-h-[150px]"
                      id="message"
                      placeholder="¿Cómo podemos ayudarte?"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
