import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div id="home" className="relative bg-gray-50 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gray-50">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fuel Mind
              <br />
              <span className="text-coral-500">by Crypto</span>
            </h1>

            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Extraordinary shared experiences transform communities. Join the best crypto community events worldwide.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-6 text-lg">Explore Events</Button>
              <Button variant="outline" className="border-coral-500 text-coral-500 hover:bg-coral-50 px-8 py-6 text-lg">
                Host an Event
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
            <div className="absolute -z-10 w-72 h-72 bg-coral-500 rounded-full opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Crypto Event"
              width={500}
              height={500}
              className="relative z-10 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

