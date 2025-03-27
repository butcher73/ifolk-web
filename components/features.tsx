import type React from "react"
import { Wallet, Calendar, Ticket, Lock, Award, Globe, MessageSquare, Users } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

export default function Features() {
  const features: Feature[] = [
    {
      icon: <Lock className="h-10 w-10 text-orange-500" />,
      title: "Token-Gated Access",
      description: "Restrict events to specific token holders or DAO members with seamless wallet verification.",
    },
    {
      icon: <Ticket className="h-10 w-10 text-orange-500" />,
      title: "NFT Ticketing",
      description: "Issue, verify and collect NFT tickets that serve as both entry passes and digital collectibles.",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-orange-500" />,
      title: "Interactive Social Audio",
      description: "Host engaging audio rooms where audience members can be invited on stage to speak.",
    },
    {
      icon: <Wallet className="h-10 w-10 text-orange-500" />,
      title: "Crypto & Fiat Payments",
      description: "Accept payments in both cryptocurrency and traditional currency for your events.",
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      title: "Automated POAPs",
      description: "Automatically distribute POAPs and on-chain rewards to event attendees without manual work.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Community Building",
      description: "Convert event participants into long-term community members with integrated follow-up tools.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-orange-500" />,
      title: "Unified Event Management",
      description: "Create, promote, and manage events in one place with automatic reminders across time zones.",
    },
    {
      icon: <Globe className="h-10 w-10 text-orange-500" />,
      title: "Hybrid Event Support",
      description: "Seamlessly blend physical and virtual experiences for truly global participation.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-orange-500 uppercase tracking-wide">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">The All-In-One Web3 Events Solution</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Stop juggling Discord, Twitter Spaces, Zoom, and Eventbrite. iFolk brings everything you need into one
            seamless platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-4 bg-white p-2 rounded-lg shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 pt-4">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

