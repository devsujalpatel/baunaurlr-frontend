import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-zinc-900 via-black to-zinc-950 px-4">
      <div className="flex flex-col items-center text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Welcome to Bauna
        </h1>
        <p className="mt-3 text-base md:text-lg text-zinc-400">
          Shorten your links and make them{" "}
          <span className="font-semibold text-purple-400">bauna</span>.
        </p>
        <div className="mt-6">
          <Button
            size="lg"
            className="rounded-2xl shadow-[0_0_15px_rgba(168,85,247,0.6)] bg-purple-600 hover:bg-purple-700 transition-transform hover:scale-105"
          >
            <Link href="/shorten" className="flex items-center gap-2">
              🚀 Get Started
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
