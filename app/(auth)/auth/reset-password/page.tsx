"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    router.push("/auth/signin");
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
                Reset password
              </h2>
              <p className="text-sm text-[#8E8D8A] mt-2">
                Enter a new password for your account below.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New password"
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

              <div className="flex flex-col gap-1.5 relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  required
                  className="w-full bg-white border border-neutral-300 rounded-xl pl-5 pr-12 py-3.5 text-base outline-none transition-all focus:border-[#1E1E1C] focus:ring-2 focus:ring-neutral-900/5"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 transition-colors flex items-center justify-center p-1 cursor-pointer select-none"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showConfirmPassword ? "visibility" : "visibility_off"}
                  </span>
                </button>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                className="w-full bg-[#0B63E5] hover:bg-[#0952C3] text-white py-3.5 rounded-full font-semibold text-base transition-colors mt-2 cursor-pointer shadow-sm"
              >
                Reset Password
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="text-center text-sm text-[#5E5D59] mt-2"
            >
              <Link href="/auth/signin" className="font-semibold text-[#1E1E1C] hover:underline">
                Back to sign in
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
