"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import { mainNavigation } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 relative">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Ironwood Business Consulting"
            height={32}
            width={160}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {mainNavigation.map((item) => (
              <NavigationMenuItem key={item.href}>
                {item.children ? (
                  <>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm font-medium",
                        isActive(item.href) && "text-accent-blue"
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors duration-200 hover:bg-slate-100 hover:text-accent-blue focus:bg-slate-100 focus:text-accent-blue",
                                  isActive(child.href) && "bg-slate-100 text-accent-blue"
                                )}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {child.label}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-100 hover:text-accent-blue focus:bg-slate-100 focus:text-accent-blue focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                        isActive(item.href) && "text-accent-blue bg-slate-100"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button - Desktop - Stitch Style: accent-blue */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            variant="cta"
            className="bg-accent-blue hover:bg-accent-blue-dark text-white shadow-sm shadow-accent-blue/20"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Request a Callback
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-brand-teal hover:text-accent-blue hover:bg-slate-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Dropdown Menu - Full Width Below Header */}
      <div
        ref={mobileMenuRef}
        className={cn(
          "absolute top-full left-0 w-full lg:hidden",
          "bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800",
          "shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50",
          "transition-all duration-200 ease-out origin-top",
          isOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        )}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="container mx-auto px-4 md:px-6 py-6">
          {/* Navigation Content */}
          <nav className="flex flex-col gap-2">
            {mainNavigation.map((item) => (
              <div key={item.href}>
                {item.children ? (
                  <div className="flex flex-col gap-2">
                    <span className="px-4 py-2 text-sm font-semibold text-slate-500">
                      {item.label}
                    </span>
                    <div className="flex flex-col gap-1 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "px-4 py-2 text-sm rounded-md transition-colors duration-200",
                            isActive(child.href)
                              ? "bg-accent-blue/10 text-accent-blue"
                              : "text-slate-700 hover:bg-slate-100"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                      isActive(item.href)
                        ? "bg-accent-blue/10 text-accent-blue"
                        : "text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-4 pt-4 border-t border-slate-200 mt-4">
            <Button
              asChild
              variant="cta"
              className="w-full bg-accent-blue hover:bg-accent-blue-dark text-white"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Phone className="mr-2 h-4 w-4" />
                Request a Callback
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
