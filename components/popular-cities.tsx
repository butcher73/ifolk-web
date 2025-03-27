import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface City {
  name: string
  eventCount: number
  image: string
}

export default function PopularCities() {
  const cities: City[] = [
    {
      name: "Miami",
      eventCount: 24,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Lisbon",
      eventCount: 18,
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Singapore",
      eventCount: 15,
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-900">
              Most Popular
              <br />
              Crypto Event Cities
            </h2>
            <p className="mt-4 text-gray-600">
              Crypto events consistently attract enthusiasts and investors from around the world, creating vibrant hubs
              of innovation and networking.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button className="bg-coral-500 hover:bg-coral-600 text-white">Explore</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Link key={index} href="#" className="group">
              <div className="relative rounded-xl overflow-hidden h-80">
                <Image
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                  <p className="mt-1">{city.eventCount} Events</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

