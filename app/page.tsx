import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EventSearch from "@/components/event-search"
import EventTypes from "@/components/event-types"
import UpcomingEvents from "@/components/upcoming-events"
import PopularCities from "@/components/popular-cities"
import Testimonials from "@/components/testimonials"
import WorldMap from "@/components/world-map"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "iFolk - The Ultimate Crypto Events Platform",
  description:
    "The all-in-one platform for DAOs, NFT projects, and crypto educators to plan, host, and monetize events with token-gated access and NFT ticketing.",
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventSearch />
        <EventTypes />
        <UpcomingEvents />
        <PopularCities />
        <Testimonials />
        <WorldMap />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

