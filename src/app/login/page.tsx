import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Login() {
  return (
    <main className="h-screen w-full flex items-center justify-center px-4">
      <form className="w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
        <h1 className="text-2xl font-semibold text-center">Welcome Back 👋</h1>
        <p className="text-sm text-zinc-400 text-center">
          Login to your{" "}
          <span className="text-purple-400 font-medium">Bauna</span> account
        </p>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
        />

        {/* Submit Button */}
        <Button className="mt-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md">
          Login
        </Button>

        {/* Extra Actions */}
        <div className="flex justify-between items-center text-xs text-zinc-400 mt-2">
          <Link
            href="/forgot-password"
            className="hover:underline text-purple-400"
          >
            Forgot Password?
          </Link>
          <Link href="/signup" className="hover:underline text-purple-400">
            Create Account
          </Link>
        </div>
      </form>
    </main>
  );
}
