"use client";

import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden lg:flex items-center justify-between w-[52rem] px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          className="h-8 w-8 object-contain"
          alt="Bauna Logo"
        />
        <span className="text-lg font-semibold text-white tracking-wide">
          Bauna
        </span>
      </div>

      {/* Nav Actions */}
      <div className="flex items-center gap-6">
        <Button
          variant="link"
          className="text-white hover:text-purple-400 transition-colors"
        >
          Shorten
        </Button>
        <Button
          size="sm"
          className="rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-md"
        >
          Get Started
        </Button>
      </div>
    </nav>
  );
};
