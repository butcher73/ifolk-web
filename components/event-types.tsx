import type React from "react"
import Link from "next/link"
import { Wallet, Code, Users, Presentation } from "lucide-react"

interface EventType {
  icon: React.ReactNode
  title: string
  count: number
}

export default function EventTypes() {
  const eventTypes: EventType[] = [
    {
      icon: <Wallet className="h-8 w-8 text-coral-500" />,
      title: "DAO Meetings",
      count: 75,
    },
    {
      icon: <Code className="h-8 w-8 text-coral-500" />,
      title: "Hackathons",
      count: 42,
    },
    {
      icon: <Presentation className="h-8 w-8 text-coral-500" />,
      title: "Workshops",
      count: 89,
    },
    {
      icon: <Users className="h-8 w-8 text-coral-500" />,
      title: "Meetups",
      count: 120,
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Start Your Journey with Lots of <span className="text-coral-500">Events!</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="#" className="text-coral-500 hover:text-coral-600 font-medium">
              View All Events →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {eventTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-coral-50 rounded-full mb-4">
                {type.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
              <p className="text-gray-500 mt-1">{type.count} Events</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

