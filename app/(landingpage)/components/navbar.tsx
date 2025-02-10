"use client";

import { ModeToggle } from "@/components/modetoggle";
import { cn } from "@/lib/utils";
import Link from "next/link";  
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavLinks = [
  { label: "Home", href: "/" },
  { label: "Share your story", href: "/story" },
  { label: "Browse stories", href: "/stories" },
];

const Navbar = () => {  
  const pathname = usePathname();

  return (
    <div className="py-5 fixed z-50 w-full bg-background">
      <div className="flex max-w-7xl mx-auto px-5 items-center justify-between">
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
        
        {/* Desktop Navigation */}
        <div className="md:flex hidden gap-x-3">
          {NavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === href && "text-primary font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <button>Log In</button>
          {/* Mobile Navigation */}
          <div className="md:hidden flex">
            <Sheet>
            <SheetTrigger>
            <div  style={{border:" 1px solid #e5e7eb", margin: "0px", padding:" 7px", borderRadius:" 6px"}}>
            <Menu size={20} />
            </div>
            </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-5">
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
                  {NavLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={cn(
                        "text-lg text-muted-foreground hover:text-primary transition-colors",
                        pathname === href && "text-primary font-semibold"
                      )}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
