import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 bg-coral-500 rounded-full opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <Image
                src="/img/get-inspired.svg"
                alt="Customer"
                width={400}
                height={400}
                className="relative z-10 mx-auto rounded-full"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              Feedback from Our
              <br />
              Community
            </h2>

            <div className="mt-8 bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 text-lg italic">
                &quot;I&apos;ve been organizing DAO meetings for years, but iFolk has completely transformed our experience. The
                token-gating works flawlessly, and the NFT ticketing feature has helped us increase attendance by 40%.
                This is the platform Web3 communities have been waiting for!&quot;
              </p>

              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src="/img/avatar-01.png"
                    alt="Alex Thompson"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">Alex Thompson</div>
                  <div className="text-sm text-gray-500">Community Lead at HopelessDAO</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

