"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/landing_page/header";
import Footer from "../components/landing_page/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF8F5] text-[#1E1E1C] flex flex-col scroll-smooth">
      <Header />
      
      <main className="flex-grow w-full max-w-full overflow-x-hidden flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-4xl bg-white border border-[#EAE5D9] rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.02)]"
        >
          {/* Header navigation & breadcrumb */}
          <div className="flex items-center justify-between pb-8 border-b border-[#EAE5D9]">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8E8D8A] hover:text-[#1E1E1C] transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              Back to Home
            </Link>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E8D8A] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#EAE5D9]">
              Effective: September 2026
            </span>
          </div>

          {/* Title banner */}
          <div className="pt-8 pb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase mb-3">
              100% Cookieless & GDPR / CCPA Compliant
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1C]">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#5E5D59] leading-relaxed">
              At Triangle Analytics, we believe privacy is a fundamental human right. Our telemetry infrastructure is engineered from the ground up to deliver actionable insights without intrusive tracking, persistent cookies, or cross-site profiling.
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-sm leading-relaxed text-[#3A3935] divide-y divide-[#EAE5D9]/60">
            {/* Section 1 */}
            <section className="pt-8 first:pt-0">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                1. Overview & Core Commitments
              </h2>
              <p className="mb-3">
                This Privacy Policy applies to the services, website (<a href="https://the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline font-medium">the-triangle-analytics.web.app</a>), and tracking APIs operated by Triangle Analytics (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
              </p>
              <p>
                Our service is architected to eliminate visitor surveillance. We do not store persistent identifiers on visitors&apos; browsers, we do not perform cross-site tracking, and we never sell, monetize, or broker personal data to data brokers or advertising networks.
              </p>
            </section>

            {/* Section 2 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                2. Data Collected from End-Users (Website Visitors)
              </h2>
              <p className="mb-3">
                When website owners install the lightweight Triangle Analytics script on their properties, our infrastructure processes strictly minimal, non-personally identifiable telemetry data:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-[#5E5D59]">
                <li>
                  <strong className="text-[#1E1E1C]">Page URL & Referrer:</strong> The page visited, query parameters (with sensitive auth tokens stripped), and referring website.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Device & Browser Category:</strong> Coarse device type (desktop, tablet, mobile), operating system, browser engine, and screen viewport dimensions.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Geographic Coarseness:</strong> Country and region derived from IP headers. Full IP addresses are discarded immediately and never written to permanent disk storage.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Cookieless Session Hash:</strong> A cryptographically salted, daily-rotating hash generated from the visitor&apos;s IP, User-Agent, and site domain. This prevents tracking users across different calendar days or across unrelated sites.
                </li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5D9] text-xs text-[#5E5D59]">
                <strong className="text-[#1E1E1C] block mb-1">Zero Cookies Guarantee:</strong>
                Triangle Analytics does not place any cookies (<code className="font-mono text-[11px] bg-white px-1 py-0.5 rounded border border-[#EAE5D9]">document.cookie</code>) or local storage tokens on visitors to your website. No cookie consent banners are required under GDPR, ePrivacy Directive, or PECR.
              </div>
            </section>

            {/* Section 3 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                3. Customer & Account Holder Information
              </h2>
              <p className="mb-3">
                When you create an account on Triangle Analytics to view telemetry dashboards or manage domains, we collect the necessary credentials to provide your service:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-[#5E5D59]">
                <li>
                  <strong className="text-[#1E1E1C]">Email Address & Name:</strong> Used for account identity, authentication, transactional security emails, and password recovery.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Google Sign-In / OAuth Data:</strong> When you choose to authenticate via Google Sign-In, we receive your verified Google email address, display name, and avatar URL provided via Firebase Authentication. We use this data solely to authenticate your identity and provision your dashboard account.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Site Metadata & API Keys:</strong> Domain names, tracked site identifiers, and encrypted API credentials generated to connect your telemetry endpoints.
                </li>
              </ul>
              <p className="text-xs text-[#5E5D59]">
                We do not request or access your Google contacts, Google Drive files, or any external Google account data beyond basic authentication identity.
              </p>
            </section>

            {/* Section 4 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                4. Legal Bases for Processing (GDPR & CCPA)
              </h2>
              <p className="mb-3">
                We process customer data under the following lawful bases:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#5E5D59]">
                <li>
                  <strong className="text-[#1E1E1C]">Contractual Necessity:</strong> To provide you with your requested analytics services, dashboard access, and account management.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Legitimate Interests:</strong> To protect our network from denial-of-service abuse, ensure uptime, and prevent fraudulent signups.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Consent:</strong> Where explicitly provided when enabling optional notifications or advanced telemetry features.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                5. Third-Party Infrastructure & Subprocessors
              </h2>
              <p className="mb-3">
                We work with reputable cloud infrastructure providers with high security standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-[#5E5D59]">
                <li>
                  <strong className="text-[#1E1E1C]">Firebase (Google Cloud Platform):</strong> Frontend static hosting and identity management authentication services.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">Heroku / Salesforce:</strong> Backend application server runtime and isolated processing dynos.
                </li>
                <li>
                  <strong className="text-[#1E1E1C]">PostgreSQL:</strong> Encrypted persistent database storage for aggregated site metrics and user accounts.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                6. Data Retention & Deletion
              </h2>
              <p className="mb-3">
                Aggregated analytics metrics are retained for as long as your account remains active. If you delete a domain or close your account:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-[#5E5D59]">
                <li>All associated domain telemetry and visitor cohorts are permanently purged from database tables.</li>
                <li>Your user account profile, email records, and authentication tokens are irrevocably deleted.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                7. Security Standards
              </h2>
              <p>
                All data transmission between your browser, our tracking endpoints, and our databases is protected with industry-standard TLS 1.3 encryption. Passwords and credentials are cryptographically hashed using Argon2/bcrypt algorithms.
              </p>
            </section>

            {/* Section 8 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                8. Contact Us & Data Protection Officer
              </h2>
              <p className="mb-2">
                If you have questions regarding this Privacy Policy, your rights under GDPR/CCPA, or wish to request data deletion, contact us at:
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5D9] font-mono text-xs space-y-1">
                <div>Triangle Analytics Privacy & Compliance</div>
                <div>Website: <a href="https://the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline">https://the-triangle-analytics.web.app</a></div>
                <div>Support: <a href="mailto:support@the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline">support@the-triangle-analytics.web.app</a></div>
              </div>
            </section>
          </div>

          {/* Bottom actions */}
          <div className="mt-12 pt-6 border-t border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8D8A]">
            <span>&copy; 2026 Triangle Analytics. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-[#1E1E1C] transition-colors underline">
                Terms of Service
              </Link>
              <Link href="/auth/signin" className="hover:text-[#1E1E1C] transition-colors underline">
                Sign In
              </Link>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
