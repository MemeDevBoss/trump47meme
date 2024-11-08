"use client"

import React, { useState, useEffect } from 'react'
import { Twitter, Send, ChevronDown } from 'lucide-react'
// import './index.css';

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-20 ${className}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </div>
  </section>
)

const SocialButton: React.FC<{
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}> = ({ href, icon, children, className = '' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center font-bold py-3 px-6 rounded-full transition duration-300 shadow-lg group ${className}`}
  >
    {icon}
    {children}
  </a>
)

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-red-800 to-red-900 text-white">
      <header className={`fixed w-full transition-all duration-300 ${isScrolled ? 'bg-blue-900/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold animate-fade-in-down">$Trump47</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
            <a href="#info" className="hover:text-yellow-400 transition-colors">Info</a>
            <a href="#join" className="hover:text-yellow-400 transition-colors">Join</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        <section className="h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden animate-fade-in mb-8 shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20241106-WA0016.jpg-BdcwODX20YzE2rfikNR0mOv2wRfcQL.jpeg"
              alt="Presidential figure with American flags"
              className="object-cover w-full h-full"
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">The Movement Begins</h2>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">Launching Soon on @memedotcooking</p>
          <ChevronDown className="animate-bounce w-8 h-8" />
        </section>

        <Section id="about" title="About $Trump47" className="bg-blue-900/30 backdrop-blur-md">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg md:text-xl">
              This is the official memecoin celebrating the 47th President, exclusively on NEAR.
            </p>
            <p className="text-lg md:text-xl font-bold">
              This isn't just a meme – it's a movement.
            </p>
          </div>
        </Section>

        <Section id="info" title="Important Information" className="bg-red-900/30 backdrop-blur-md">
          <div className="max-w-3xl mx-auto bg-red-800/50 p-8 rounded-lg shadow-xl">
            <ul className="list-disc list-inside space-y-4 text-lg">
              <li>$Trump47 will only be deployed from trump47.near</li>
              <li>Don't trust any fake listings – only follow official announcements.</li>
            </ul>
          </div>
        </Section>

        <Section id="join" title="Join the Movement">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <SocialButton
              href="https://x.com/us_trump47"
              icon={<Twitter className="mr-2 group-hover:animate-spin" />}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Follow on X
            </SocialButton>
            <SocialButton
              href="https://t.me/+4iYrEi9tDfBmZjZk"
              icon={<Send className="mr-2 group-hover:translate-x-1 transition-transform" />}
              className="bg-[#229ED9] hover:bg-[#1E8BC3] text-white"
            >
              Join Telegram
            </SocialButton>
          </div>
        </Section>
      </main>

      <footer className="bg-blue-900/80 backdrop-blur-md py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 $Trump47. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
