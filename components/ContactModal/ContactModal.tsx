"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"
import { User, Mail, Phone, MessageSquare } from "lucide-react"

interface ContactModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const { toast } = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsLoading(false)
        onClose()
        toast({
            title: "Success",
            description: "Submitted! We will contact you soon.",
        })
        setFormData({ name: "", email: "", phone: "", message: "" })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] bg-white text-slate-900 border-0 shadow-2xl rounded-2xl p-0 overflow-hidden">
                <div className="px-8 py-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-slate-900 mb-1">Contact Us</h2>
                        <p className="text-sm text-slate-500">Enter your details below and we&apos;ll get back to you shortly.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-colors">
                            <User size={18} className="text-slate-400 shrink-0" />
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                required
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-colors">
                            <Mail size={18} className="text-slate-400 shrink-0" />
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address"
                                required
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-colors">
                            <Phone size={18} className="text-slate-400 shrink-0" />
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-colors">
                            <MessageSquare size={18} className="text-slate-400 shrink-0 mt-0.5" />
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help you?"
                                rows={4}
                                className="flex-1 bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#1a9de8] hover:bg-[#1389d0] disabled:opacity-60 transition-colors text-white font-semibold text-sm rounded-xl py-3.5 mt-2"
                        >
                            {isLoading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )
}
