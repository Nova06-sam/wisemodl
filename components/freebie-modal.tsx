"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, CheckCircle, ChevronRight, ChevronLeft } from "lucide-react"

interface FreebieModalProps {
  isOpen: boolean
  onClose: () => void
}

const domainOptions = ["CSE", "Mechanical"] as const
type Domain = (typeof domainOptions)[number]

const titlesByDomain: Record<Domain, string[]> = {
  CSE: ["Software Engineering (Full Stack)", "Data Structures & Algorithms (DSA)", "Artificial Intelligence (AI)"],
  Mechanical: ["Design Engineering", "Manufacturing & Quality", "Simulation & Validation"],
}

export function FreebieModal({ isOpen, onClose }: FreebieModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1)
  const [domain, setDomain] = useState<Domain | null>(null)
  const [title, setTitle] = useState<string>("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const canNextFromDomain = domain !== null
  const canNextFromTitle = !!title
  const canSubmit = email.length > 3 && email.includes("@")

  const resetAndClose = () => {
    setStep(1)
    setDomain(null)
    setTitle("")
    setEmail("")
    setIsLoading(false)
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canSubmit || !domain || !title) return
    setIsLoading(true)
    // simulate a server call
    await new Promise((r) => setTimeout(r, 1000))
    setIsLoading(false)
    setStep(4)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Steps indicator */}
        <div className="mb-6 flex items-center justify-center gap-2 text-xs text-gray-500">
          <span className={`h-1 w-10 rounded ${step >= 1 ? "bg-emerald-600" : "bg-gray-200"}`} />
          <span className={`h-1 w-10 rounded ${step >= 2 ? "bg-emerald-600" : "bg-gray-200"}`} />
          <span className={`h-1 w-10 rounded ${step >= 3 ? "bg-emerald-600" : "bg-gray-200"}`} />
          <span className={`h-1 w-10 rounded ${step >= 4 ? "bg-emerald-600" : "bg-gray-200"}`} />
        </div>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Domain</h2>
            <p className="text-gray-600 mb-4">Pick the domain to tailor your resources.</p>
            <div className="grid grid-cols-2 gap-3">
              {domainOptions.map((d) => {
                const active = domain === d
                return (
                  <button
                    key={d}
                    onClick={() => setDomain(d)}
                    className={`rounded border px-4 py-3 text-left transition ${
                      active ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-gray-200 hover:bg-gray-50"
                    }`}
                    aria-pressed={active}
                  >
                    <div className="font-semibold">{d}</div>
                    <div className="text-sm text-gray-600">
                      {d === "CSE" ? "Full Stack, DSA, AI and more" : "Design Engg, M&Q and more"}
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <Button variant="outline" onClick={resetAndClose}>
                Cancel
              </Button>
              <Button onClick={() => canNextFromDomain && setStep(2)} disabled={!canNextFromDomain}>
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Title</h2>
            <p className="text-gray-600 mb-4">Select the specific track to receive curated resources.</p>
            <div className="grid gap-3">
              {(domain ? titlesByDomain[domain] : []).map((t) => {
                const active = title === t
                return (
                  <button
                    key={t}
                    onClick={() => setTitle(t)}
                    className={`rounded border px-4 py-3 text-left transition ${
                      active ? "border-emerald-600 bg-emerald-50 text-emerald-700" : "border-gray-200 hover:bg-gray-50"
                    }`}
                    aria-pressed={active}
                  >
                    <div className="font-semibold">{t}</div>
                  </button>
                )
              })}
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" onClick={() => setStep(1)}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" onClick={resetAndClose}>
                  Cancel
                </Button>
                <Button onClick={() => canNextFromTitle && setStep(3)} disabled={!canNextFromTitle}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Your Resources</h2>
            <p className="text-gray-600 mb-4">
              Domain: <span className="font-medium">{domain}</span> - Title:{" "}
              <span className="font-medium">{title}</span>
            </p>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500">We'll email you a curated resource pack for your selection.</p>
            </div>
            <div className="mt-6 flex justify-between">
              <Button variant="ghost" type="button" onClick={() => setStep(2)}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" type="button" onClick={resetAndClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={!canSubmit || isLoading}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {isLoading ? "Sending..." : "Send Me the Resources"}
                </Button>
              </div>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Resources Sent!</h2>
            <p className="text-gray-600 mb-6">
              We've emailed your resources for <span className="font-medium">{domain}</span> -{" "}
              <span className="font-medium">{title}</span> to <span className="font-medium">{email}</span>.
            </p>
            <Button onClick={resetAndClose} className="bg-emerald-600 hover:bg-emerald-700">
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
