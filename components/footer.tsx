import Link from "next/link"
import Image from "next/image"
import { Linkedin, Instagram, Youtube, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Wrench Wise"
                width={250}
                height={200}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-900 mb-6 max-w-md">
              Innovate. Engineer. Excel. Empowering the next generation of engineers with industry-relevant skills and
              hands-on experience.
            </p>
            <div className="flex space-x-4">
              <Link
              target="_blank"
                href="https://www.facebook.com/people/Wrench-Wise/61578397160217/"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
              target="_blank"
                href="https://www.linkedin.com/company/wrench-wise"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
              target="_blank"
                href="https://www.instagram.com/wrench_wise_official/ "
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              {/* <Link
                href="#"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Youtube className="h-6 w-6" />
              </Link> */}
              {/* <Link
                href="#"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Twitter className="h-6 w-6" />
              </Link> */}
            </div>
          </div>

          <div className="h-auto  flex flex-col justify-center items-center" >
            <h3 className="text-lg text-gray-900  font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/domains/cse" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  CSE Programs
                </Link>
              </li>
              <li>
                <Link href="/institute" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  For Institutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

         <div className="h-auto  flex flex-col justify-center items-center" >
            <h3 className="text-lg font-semibold mb-4 text-gray-900 ">Contact Info</h3>
            <div className="space-y-2 text-gray-900">
              <p>hello@wrench-wise.com</p>
              <p>Book a Free Consultation</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-900">
          <p>&copy; 2025  <span className="g1 ">Wrench</span> <span className="g2">Wise</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
