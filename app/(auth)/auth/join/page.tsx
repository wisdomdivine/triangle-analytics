"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { api } from "@/lib/api";

export default function JoinPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      await api.auth.signUp(name, email, password);
      const searchParams = new URLSearchParams(window.location.search);
      const redirectUrl = searchParams.get("redirect") || "/auth/claim-onboarding";
      if (redirectUrl.startsWith("http")) {
        window.location.href = redirectUrl;
      } else {
        router.push(redirectUrl);
      }
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || "Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setErrorMessage("");
    setIsGoogleLoading(true);
    try {
      await api.auth.signInWithGoogle();
      const searchParams = new URLSearchParams(window.location.search);
      const redirectUrl = searchParams.get("redirect") || "/auth/claim-onboarding";
      if (redirectUrl.startsWith("http")) {
        window.location.href = redirectUrl;
      } else {
        router.push(redirectUrl);
      }
    } catch (err: unknown) {
      setErrorMessage((err as Error).message || "Google sign-up failed. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#1E1E1C] flex items-center justify-center px-4 py-8 relative overflow-hidden">
      {/* Top Left Floating Back Navigation */}
      <Link
        href="/"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-20 inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E5D59] hover:text-[#1E1E1C] bg-white/80 hover:bg-white backdrop-blur-md px-3.5 py-2 rounded-full border border-[#EAE5D9] transition-all shadow-[0_2px_8px_rgba(0,0,0,0.03)] group"
      >
        <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-x-0.5">
          arrow_back
        </span>
        <span>Back to home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[1000px] bg-white border border-[#EAE5D9] rounded-[32px] p-4 flex flex-col md:flex-row gap-8 shadow-[0_24px_80px_rgb(0,0,0,0.02)] relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/2 rounded-[24px] relative overflow-hidden min-h-[300px] md:min-h-[500px]"
        >
          <img
            src="/images/signin_illustration.png"
            alt="Triangle Analytics Illustration"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="md:w-1/2 flex flex-col justify-center px-4 py-6 md:px-8 relative">
          <div className="w-full max-w-[360px] mx-auto flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="flex items-center justify-between"
            >
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined" && window.history.length > 2) {
                    router.back();
                  } else {
                    router.push("/");
                  }
                }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8E8D8A] hover:text-[#1E1E1C] transition-colors cursor-pointer group py-1 px-1.5 -ml-1.5 rounded-lg hover:bg-neutral-100"
              >
                <span className="material-symbols-outlined text-[16px] transition-transform duration-150 group-hover:-translate-x-0.5">
                  arrow_back
                </span>
                <span>Back</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#1E1E1C]">
                Join us
              </h2>
              <p className="text-xs font-semibold text-[#8E8D8A] mt-4 mb-2.5">
                Continue with open account
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="flex flex-col gap-3"
            >
              <motion.button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isGoogleLoading || isLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                className="w-full flex items-center justify-center gap-3 bg-white hover:bg-[#FAF8F5] border border-neutral-300 text-[#1E1E1C] py-3 rounded-xl font-medium text-base transition-colors cursor-pointer disabled:opacity-60"
              >
                {isGoogleLoading ? (
                  <div className="w-5 h-5 border-2 border-neutral-300 border-t-neutral-800 rounded-full animate-spin" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                )}
                <span>{isGoogleLoading ? "Connecting Google..." : "Sign in with Google"}</span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="flex items-center justify-between gap-3 py-1"
            >
              <div className="h-px flex-1 bg-[#EAE5D9]" />
              <span className="text-[10px] text-[#8E8D8A] uppercase tracking-wider font-bold">
                Or register with email
              </span>
              <div className="h-px flex-1 bg-[#EAE5D9]" />
            </motion.div>

            <AnimatePresence mode="wait">
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -8, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold px-4 py-3 rounded-xl overflow-hidden"
                >
                  {errorMessage}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="flex flex-col gap-4"
              onSubmit={handleSignUp}
            >
              <div className="flex flex-col gap-1.5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-3.5 text-base outline-none transition-all focus:border-[#1E1E1C] focus:ring-2 focus:ring-neutral-900/5"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-3.5 text-base outline-none transition-all focus:border-[#1E1E1C] focus:ring-2 focus:ring-neutral-900/5"
                />
              </div>

              <div className="flex flex-col gap-1.5 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full bg-white border border-neutral-300 rounded-xl pl-5 pr-12 py-3.5 text-base outline-none transition-all focus:border-[#1E1E1C] focus:ring-2 focus:ring-neutral-900/5"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors flex items-center justify-center p-1 cursor-pointer select-none"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || isGoogleLoading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                className="w-full bg-[#0B63E5] hover:bg-[#0952C3] disabled:opacity-60 text-white py-3.5 rounded-full font-semibold text-base transition-colors mt-2 cursor-pointer shadow-sm"
              >
                {isLoading ? "Creating Account..." : "Join Us"}
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38, duration: 0.45 }}
              className="text-center text-sm text-[#5E5D59] mt-2"
            >
              Already have an account?{" "}
              <Link
                href="/auth/signin"
                className="font-semibold text-[#1E1E1C] hover:underline"
              >
                Sign in
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42, duration: 0.45 }}
              className="text-center text-[11px] text-[#8E8D8A] mt-1"
            >
              By creating an account, you agree to our{" "}
              <Link href="/terms" className="underline hover:text-[#1E1E1C] transition-colors">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline hover:text-[#1E1E1C] transition-colors">
                Privacy Policy
              </Link>
              .
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
