'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const features = [
  {
    name: 'Feature One',
    description: 'Description for feature one.',
  },
  {
    name: 'Feature Two',
    description: 'Description for feature two.',
  },
  {
    name: 'Feature Three',
    description: 'Description for feature three.',
  },
]

const testimonials = [
  {
    name: 'John Doe',
    feedback: 'This product changed my life!',
    company: 'Company A',
  },
  {
    name: 'Jane Smith',
    feedback: 'Amazing service and support!',
    company: 'Company B',
  },
]

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
            Unlock Your Business Potential
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-400 sm:text-xl">
            We provide data-driven insights to help you grow your business in 5 seconds or less.
          </p>
          <p className="mt-2 text-lg font-medium text-gray-400 sm:text-xl">
            Experience the unique benefits of our solutions tailored for your needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Get Started
            </a>
            <a href="#" className="text-sm font-semibold text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center mb-20">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Hero"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Benefits Section */}
        <div className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Benefits</h2>
            <ul className="mt-10 space-y-4 text-gray-300">
              <li>✔️ Save time and increase efficiency.</li>
              <li>✔️ Gain insights to make informed decisions.</li>
              <li>✔️ Improve customer engagement and satisfaction.</li>
            </ul>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
            <div className="mt-10 space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="bg-gray-800 p-6 rounded-lg">
                  <p className="text-lg text-gray-300">"{testimonial.feedback}"</p>
                  <p className="mt-2 font-semibold text-white">{testimonial.name}, {testimonial.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Elements Section */}
        <div className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Trusted by Leading Brands</h2>
            <div className="mt-10 flex justify-center space-x-6">
              <img src="https://via.placeholder.com/100" alt="Client Logo" className="h-10" />
              <img src="https://via.placeholder.com/100" alt="Client Logo" className="h-10" />
              <img src="https://via.placeholder.com/100" alt="Client Logo" className="h-10" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Features</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                  <p className="mt-2 text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2023 Your Company. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
