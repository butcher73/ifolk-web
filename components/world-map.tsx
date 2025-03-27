import Image from "next/image"

interface Country {
  name: string
  flag: string
  eventCount: number
  position: {
    top: string
    left: string
  }
}

export default function WorldMap() {
  const countries: Country[] = [
    {
      name: "United States",
      flag: "🇺🇸",
      eventCount: 120,
      position: {
        top: "40%",
        left: "20%",
      },
    },
    {
      name: "Singapore",
      flag: "🇸🇬",
      eventCount: 45,
      position: {
        top: "55%",
        left: "75%",
      },
    },
    {
      name: "Switzerland",
      flag: "🇨🇭",
      eventCount: 38,
      position: {
        top: "35%",
        left: "48%",
      },
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            World Top Crypto
            <br />
            Event Locations in 2025
          </h2>
        </div>

        <div className="relative">
          <Image
            src="/img/wm.svg"
            alt="World Map"
            width={1200}
            height={600}
            className="w-full h-auto"
          />

          {countries.map((country, index) => (
            <div
              key={index}
              className="absolute flex flex-col items-center"
              style={{ top: country.position.top, left: country.position.left }}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">
                {country.flag}
              </div>
              <div className="mt-2 bg-white rounded-lg shadow-md p-2 text-center">
                <p className="font-bold text-gray-900">{country.name}</p>
                <p className="text-sm text-gray-600">{country.eventCount} Events</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

