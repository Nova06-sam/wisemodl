"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const quickMessages = [
  "Tell me about your courses",
  "What are the fees?",
  "How do I enroll?",
  "Placement assistance details",
]

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)

  const handleQuickMessage = (message: string) => {
    window.open(`https://wa.me/917550077725?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917550077725?text=Hi! I'm interested in WrenchWise programs. Can you help me?", "_blank")
  }

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 ">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg p-2 chat"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <img src="/chaticon.gif"/>}
        </Button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-xl border w-80 max-w-[calc(100vw-3rem)]">
          <div className="bg-green-500 text-white p-4 rounded-t-lg">
            <h3 className="font-semibold">WrenchWise Support</h3>
            <p className="text-sm text-green-100">We're here to help!</p>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-700">
                👋 Hi there! Welcome to WrenchWise!
                <br />
                <br />
                How can we help you today? Choose a quick option below:
              </p>
            </div>

            {/* Quick Message Buttons */}
            <div className="space-y-2 mb-4">
              {quickMessages.map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start text-sm h-auto py-2 px-3 border-emerald-200 hover:bg-emerald-50 bg-transparent"
                  onClick={() => handleQuickMessage(message)}
                >
                  {message}
                </Button>
              ))}
            </div>

            <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="mr-2 h-4 w-4" />
              Start WhatsApp Chat
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
