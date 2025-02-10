import React from 'react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-background py-6 border-t">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-5 items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo-black.png"
            className="dark:hidden"
            width={150}
            height={150}
            alt="logo"
          />
          <img
            src="/logo-white.png"
            className="hidden dark:block"
            width={150}
            height={150}
            alt="logo"
          />
        </div>

        {/* Liens */}
        <div className="flex items-center flex-wrap gap-4">
          <Button variant="link">Privacy Policy</Button>
          <Button variant="link">Terms of Service</Button>
        </div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © Created by Ilhame Sadik - 2025
        </p>

      </div>
    </footer>
  )
}

export default Footer
