import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-800 to-purple-900 rounded-3xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
            <div className="lg:w-0 lg:flex-1">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to transform your crypto events?
              </h2>
              <p className="mt-4 max-w-3xl text-lg text-purple-100">
                Join the growing community of DAOs, NFT projects, and crypto educators who are using iFolk to create
                engaging, monetizable, and secure events for their global Web3 communities.
              </p>
            </div>
            <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
              <div className="sm:flex">
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                    Schedule Your First Event
                  </Button>
                </div>
              </div>
              <p className="mt-4 text-sm text-purple-200 text-center">
                No credit card required. Connect your wallet to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

