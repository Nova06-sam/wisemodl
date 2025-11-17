"use client";
import { usePathname } from "next/navigation";
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FlashBanner } from "./flash-banner"
import { FreebieModal } from "./freebie-modal"
import { useRouter } from "next/router"



export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDomainsOpen, setIsDomainsOpen] = useState(false)
  const [isFreebieModalOpen, setIsFreebieModalOpen] = useState(false)
  const currentPath = usePathname(); 
  const NavLinks = [
    // {name:"Bootcamp",href:"/webinar"},
    {name:"For Institutions",href:"/institute"},
    {name:"Books",href:"/books"},
    {name:"Contact Us",href:"/contact"},
  ]

  return (
    <>
      <FlashBanner />
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 py-5 pt-0 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Wrench Wise"
                width={200}
                height={200}
                className="transform hover:scale-120 transition-transform duration-300 "
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-8 pt-5">
            
              <div className="relative group ">
                 {/* hover:from-emerald-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl' */}
                <button className="bg-gradient-to-r from-emerald-600 to-cyan-600 flex  px-3 py-1 rounded-full items-center text-white hover:text-white-600 transition-colors font-medium">
                  Domains
                  <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  
                  <Link
                    href="/domains/cse"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-t-lg"
                  >
                    Computer Science & Engineering
                  </Link>
                  <div className="px-4 py-3 text-sm text-gray-400 cursor-not-allowed rounded-b-lg">
                    Mechanical Engineering - Coming Soon
                  </div>
                </div>
              </div>
              {NavLinks.map((nav,index)=>(
                    <Link key={index} href={nav.href} className={`${currentPath===nav.href?"bg-gradient-to-r from-emerald-600 to-cyan-600 py-1 px-2 rounded-full text-white":"text-gray-700 hover:text-emerald-600 transition-colors font-medium"}`}>
                      {nav.name}
                    </Link>
                  ))} 
              {/* <Link href="/webinar" className="text-gray-700 hover:text-white  transition-colors font-medium hover:bg-gradient-to-r from-emerald-600 to-cyan-600 py-1 px-2 rounded-full ">
                Bootcamp
              </Link>
              <Link href="/books" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Books
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
                Contact Us
              </Link> */}
            </nav>

            <div className="hidden md:flex items-center space-x-4 pt-5">
              {/* <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsFreebieModalOpen(true)}
              >
                Freebie
              </Button> */}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 animate-fade-in-up">
              <div className="py-4 space-y-4">
                <Link href="/" className="block text-gray-700 hover:text-emerald-600 font-medium">
                  Home
                </Link>
                <div>
                  <button
                    onClick={() => setIsDomainsOpen(!isDomainsOpen)}
                    className="flex items-center justify-between w-full text-gray-00 hover:text-emerald-600 font-medium"
                  >
                    Domains
                    <ChevronDown className={`h-4 w-4 transition-transform ${isDomainsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isDomainsOpen && (
                    <div className="mt-2 ml-4 space-y-2 animate-fade-in-up">
                      <Link href="/domains/cse" className="block text-sm text-gray-600 hover:text-emerald-600">
                        Computer Science & Engineering
                      </Link>
                      <div className="text-sm text-gray-400">Mechanical Engineering - Coming Soon</div>
                    </div>
                  )}
                </div>
                <Link href="/institute" className="block text-gray-700 hover:text-emerald-600 font-medium">
                 For Institutions
                </Link>
                <Link href="/books" className="block text-gray-700 hover:text-emerald-600 font-medium">
                  Books
                </Link>
                <Link href="/contact" className="block text-gray-700 hover:text-emerald-600 font-medium">
                  Contact Us
                </Link>
                {/* <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300"
                  onClick={() => setIsFreebieModalOpen(true)}
                >
                  Freebie
                </Button> */}
              </div>
            </div>
          )}
        </div>
      </header>
      <FreebieModal isOpen={isFreebieModalOpen} onClose={() => setIsFreebieModalOpen(false)} />
    </>
  )
}
