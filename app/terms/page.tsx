"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/landing_page/header";
import Footer from "../components/landing_page/footer";

export default function TermsOfServicePage() {
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
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-semibold tracking-wide uppercase mb-3">
              Platform Terms & Conditions
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1E1C]">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#5E5D59] leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your access to and use of Triangle Analytics, including our website at <a href="https://the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline font-medium">the-triangle-analytics.web.app</a>, our dashboards, and telemetry ingestion APIs.
            </p>
          </div>

          {/* Content sections */}
          <div className="space-y-10 text-sm leading-relaxed text-[#3A3935] divide-y divide-[#EAE5D9]/60">
            {/* Section 1 */}
            <section className="pt-8 first:pt-0">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="mb-3">
                By creating an account, generating an API tracking token, integrating our tracking snippet, or browsing our website, you agree to be bound by these Terms and our <Link href="/privacy" className="text-[#0B63E5] hover:underline font-medium">Privacy Policy</Link>.
              </p>
              <p>
                If you are entering into these Terms on behalf of an entity, company, or organization, you represent and warrant that you have full legal authority to bind that entity to these Terms.
              </p>
            </section>

            {/* Section 2 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                2. Description of the Service
              </h2>
              <p className="mb-3">
                Triangle Analytics provides a lightweight, privacy-focused web analytics platform featuring:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3 text-[#5E5D59]">
                <li>Real-time telemetry and sub-second visitor presence stream monitoring.</li>
                <li>Aggregated pageview, bounce rate, device category, and geographic distribution analytics.</li>
                <li>Cookieless, privacy-preserving session cohort metrics (New vs. Returning visitors).</li>
                <li>Client tracking libraries and embeddable telemetry scripts.</li>
              </ul>
              <p>
                We continuously enhance our software. We reserve the right to upgrade, modify, or temporarily suspend aspects of the service to perform security updates or maintenance.
              </p>
            </section>

            {/* Section 3 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                3. Account Registration & Security
              </h2>
              <p className="mb-3">
                To access the dashboard and create site trackers, you must register using an email and password or via authorized Google Sign-In:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3 text-[#5E5D59]">
                <li>You must provide accurate, current, and complete registration information.</li>
                <li>You are responsible for maintaining the confidentiality of your credentials and API tokens.</li>
                <li>You agree to notify us immediately of any unauthorized use or suspected security breach of your account.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                4. Acceptable Use Policy
              </h2>
              <p className="mb-3">
                You agree not to use Triangle Analytics to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-[#5E5D59]">
                <li>Transmit or ingest unauthorized personally identifiable information (PII) such as credit card numbers, government IDs, or sensitive medical records.</li>
                <li>Perform automated attacks, intentional overload, denial-of-service, or abusive event scraping against our telemetry endpoints.</li>
                <li>Reverse engineer, decompile, or attempt to derive the underlying algorithms of the proprietary analytics server infrastructure.</li>
                <li>Embed tracking tags on websites engaged in unlawful content distribution, phishing, malware propagation, or infringement of intellectual property rights.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE5D9] text-xs text-[#5E5D59]">
                Violation of our Acceptable Use Policy may result in immediate rate-limiting, suspension, or termination of your account and API access.
              </div>
            </section>

            {/* Section 5 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                5. Intellectual Property
              </h2>
              <p className="mb-3">
                All rights, title, and interest in and to the Triangle Analytics platform, including the dashboard interface, trademarks, logos, telemetry collectors, and proprietary algorithms, are and will remain the exclusive property of Triangle Analytics.
              </p>
              <p>
                We grant you a non-exclusive, revocable, worldwide license to embed and execute the Triangle client tracking snippet on your authorized websites in accordance with these Terms.
              </p>
            </section>

            {/* Section 6 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                6. Service Availability & SLA
              </h2>
              <p>
                While we strive for 99.99% uptime and utilize resilient cloud hosting, the service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted, error-free, or entirely invulnerable to unauthorized access.
              </p>
            </section>

            {/* Section 7 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Triangle Analytics, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use or inability to use the service.
              </p>
            </section>

            {/* Section 8 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                8. Termination
              </h2>
              <p>
                You may close your account at any time from your account settings. Upon cancellation, your tracked sites and associated metrics will be scheduled for permanent deletion in accordance with our Privacy Policy. We may terminate or suspend your access immediately without notice if you materially breach these Terms.
              </p>
            </section>

            {/* Section 9 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We may revise these Terms from time to time. If a revision is material, we will provide at least 15 days&apos; notice prior to any new terms taking effect by displaying a prominent notice on our website or sending an email notification.
              </p>
            </section>

            {/* Section 10 */}
            <section className="pt-8">
              <h2 className="text-lg font-bold text-[#1E1E1C] mb-3">
                10. Governing Law & Contact
              </h2>
              <p className="mb-2">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction of the company, without regard to conflict of law principles.
              </p>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#EAE5D9] font-mono text-xs space-y-1">
                <div>Triangle Analytics Legal Operations</div>
                <div>Website: <a href="https://the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline">https://the-triangle-analytics.web.app</a></div>
                <div>Inquiries: <a href="mailto:terms@the-triangle-analytics.web.app" className="text-[#0B63E5] hover:underline">terms@the-triangle-analytics.web.app</a></div>
              </div>
            </section>
          </div>

          {/* Bottom actions */}
          <div className="mt-12 pt-6 border-t border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8D8A]">
            <span>&copy; 2026 Triangle Analytics. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-[#1E1E1C] transition-colors underline">
                Privacy Policy
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
