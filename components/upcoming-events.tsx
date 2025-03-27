import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Calendar } from "lucide-react"

interface Event {
  id: string
  title: string
  location: string
  date: string
  price: string
  image: string
  rating: number
  tokenGated: boolean
}

export default function UpcomingEvents() {
  const events: Event[] = [
    {
      id: "1",
      title: "ETHNewYork",
      location: "New York, USA",
      date: "May 15-17, 2025",
      price: "0.5 ETH",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.8,
      tokenGated: false,
    },
    {
      id: "2",
      title: "DeFi Summit",
      location: "Singapore",
      date: "June 10-12, 2025",
      price: "0.8 ETH",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.9,
      tokenGated: true,
    },
    {
      id: "3",
      title: "NFT Paris",
      location: "Paris, France",
      date: "July 5-7, 2025",
      price: "0.3 ETH",
      image: "/placeholder.svg?height=400&width=600",
      rating: 4.7,
      tokenGated: false,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Upcoming
            <br />
            Crypto Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <div className="relative">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-coral-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.price}
                </div>
                {event.tokenGated && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Token Gated
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{event.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{event.location}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{event.date}</span>
                </div>

                <Button className="w-full bg-coral-500 hover:bg-coral-600 text-white">Book Now</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="border-coral-500 text-coral-500 hover:bg-coral-50">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}

