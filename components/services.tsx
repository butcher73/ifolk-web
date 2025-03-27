import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

interface Service {
  title: string
  description: string
  image: string
  features: string[]
}

export default function Services() {
  const services: Service[] = [
    {
      title: "For DAOs & Communities",
      description: "Host secure, token-gated town halls and community calls with seamless wallet verification.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Token-gated access for members only",
        "Automatic event reminders across time zones",
        "Interactive audio with moderation tools",
        "Integrated POAP distribution",
      ],
    },
    {
      title: "For NFT Projects",
      description: "Create exclusive experiences for holders and monetize events to grow your community.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "NFT-based access control",
        "Holder-only and public ticketed events",
        "Commemorative NFT tickets",
        "Community analytics and insights",
      ],
    },
    {
      title: "For Crypto Educators",
      description: "Monetize your knowledge with paid workshops, courses, and exclusive content.",
      image: "/placeholder.svg?height=400&width=600",
      features: [
        "Seamless crypto and fiat payments",
        "Screen sharing for presentations",
        "Event recording and distribution",
        "Audience engagement tools",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-orange-500 uppercase tracking-wide">Solutions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Tailored for Web3 Communities</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Whether you&apos;re running a DAO, managing an NFT project, or educating the crypto community, iFolk has you
            covered.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-4 text-lg text-gray-600">{service.description}</p>

                <ul className="mt-8 space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Button className="bg-purple-600 hover:bg-purple-700">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

