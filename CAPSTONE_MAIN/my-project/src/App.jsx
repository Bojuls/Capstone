"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

// Constants moved outside component for better organization
const NAVIGATION = [
  { name: "Product", href: "#product" },
  { name: "Features", href: "#features" },
  { name: "Marketplace", href: "#marketplace" },
  { name: "Company", href: "#company" },
];

const FEATURES = [
  {
    name: "Feature One",
    description: "Description for feature one.",
    icon: "🚀",
  },
  {
    name: "Feature Two",
    description: "Description for feature two.",
    icon: "⚡",
  },
  {
    name: "Feature Three",
    description: "Description for feature three.",
    icon: "🔒",
  },
];

const TESTIMONIALS = [
  {
    name: "John Doe",
    feedback: "This product changed my life!",
    company: "Company A",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Amazing service and support!",
    company: "Company B",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TRUSTED_BRANDS = [
  { name: "Brand 1", logo: "https://via.placeholder.com/100" },
  { name: "Brand 2", logo: "https://via.placeholder.com/100" },
  { name: "Brand 3", logo: "https://via.placeholder.com/100" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Smooth scroll handler
  const handleNavigation = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white min-h-screen">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="bg-white flex items-center justify-between p-6 lg:px-8 shadow-sm">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Company Logo"
                src="Hotel_Zeke_Logo.png"
                className="h-15 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              aria-label="Open main menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavigation(e, item.href)}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-500 transition-colors"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                aria-label="Close menu"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {NAVIGATION.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        handleNavigation(e, item.href);
                        setMobileMenuOpen(false);
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative isolate px-6 pt-32 pb-20 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="pt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Unlock Your Business Potential
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide data-driven insights to help you grow your business in
              5 seconds or less.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                onClick={() => navigate("/pricing")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-10 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-[#494949] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
              >
                Get Started
                <ArrowRightIcon className="h-5 w-5 " />
              </button>
              <a
                href="#features"
                onClick={(e) => handleNavigation(e, "#features")}
                className="text-m font-semibold leading-6 text-gray-900 hover:text-[#494949] transition-colors underline "
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-16 flex justify-center">
            <img
              src="mockup_dash1.png"
              alt="Product dashboard"
              className="rounded-xl shadow-xl w-full max-w-4xl object-cover"
              loading="lazy"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section id="features" className="py-24 sm:py-10 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to deploy your app
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our platform provides all the tools you need to launch and grow
                your business.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16  ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              {TESTIMONIALS.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-black/80">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-4 text-black">
                    <p className="text-lg leading-relaxed">
                      "{testimonial.feedback}"
                    </p>
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Elements Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Trusted by Leading Brands
              </h2>
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-8">
              {TRUSTED_BRANDS.map((brand) => (
                <img
                  key={brand.name}
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-8 bg-center mb-5 rounded-3xl mx-5"
          style={{ backgroundImage: "url('/learn_more.avif')" }}
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Join thousands of businesses already using our platform.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#features"
                  onClick={(e) => handleNavigation(e, "#features")}
                  className="text-sm font-semibold leading-6 text-white hover:text-indigo-300 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt="Company Logo"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <p className="ml-4 text-sm text-gray-400">
                © 2023 Your Company. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              {NAVIGATION.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Privacy Policy</span>
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Terms of Service</span>
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
