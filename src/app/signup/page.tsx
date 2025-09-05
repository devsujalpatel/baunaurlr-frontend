"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { z } from "zod";

// Schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // validate with Zod
    const result = formSchema.safeParse(user);

    if (!result.success) {
      setErrors("Form is invalid");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/signup", user, {
        withCredentials: true,
      });
      console.log("✅ Signup success:", res.data);
      alert("Signup successful!");
      setErrors({});
    } catch (err: any) {
      console.error("❌ Signup failed:", err.response?.data || err.message);
      alert("Signup failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="h-screen w-full flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl"
      >
        <h1 className="text-2xl font-semibold text-center">
          Create an Account
        </h1>
        <p className="text-sm text-zinc-400 text-center">
          Join <span className="text-purple-400 font-medium">Bauna</span> and
          start shortening your links 🚀
        </p>

        {/* First & Last Name */}
        <div className="flex gap-3">
          <div className="w-1/2">
            <input
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              value={user.firstName}
              type="text"
              placeholder="First Name"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          <div className="w-1/2">
            <input
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              value={user.lastName}
              type="text"
              placeholder="Last Name"
              className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            value={user.password}
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none text-sm"
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">{errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={loading}
          className="mt-4 cursor-pointer rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium shadow-md"
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>

        {/* Already have an account */}
        <p className="text-xs text-center text-zinc-400 mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-400 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
