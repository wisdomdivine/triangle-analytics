"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen w-full bg-[#FAF8F5] text-[#1E1E1C] flex items-center justify-center px-4 py-8 relative overflow-hidden">
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
              transition={{ delay: 0.1, duration: 0.45 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#1E1E1C]">
                Forgot password
              </h2>
              <p className="text-sm text-[#8E8D8A] mt-2">
                Enter your email address and we will send you a link to reset your password.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.45 }}
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1.5">
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="w-full bg-white border border-neutral-300 rounded-xl px-5 py-3.5 text-base outline-none transition-all focus:border-[#1E1E1C] focus:ring-2 focus:ring-neutral-900/5"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                className="w-full bg-[#0B63E5] hover:bg-[#0952C3] text-white py-3.5 rounded-full font-semibold text-base transition-colors mt-2 cursor-pointer shadow-sm"
              >
                Send Reset Link
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
