<div align="center">
  <img src="public/images/logo.png" alt="Triangle Analytics" width="96" />
  <h1>Triangle Analytics</h1>
  <p><strong>Lightweight, Privacy-First Web Telemetry and Real-Time Product Analytics</strong></p>
  <p><a href="https://the-triangle-analytics.web.app/">the-triangle-analytics.web.app</a></p>
</div>

---

## Product Overview

Triangle Analytics is a modern web telemetry platform engineered for product teams that demand accurate audience intelligence without tracking bloat, invasive cookies, or complex compliance burdens.

Traditional analytics suites impose heavy script payloads, third-party cookie sync networks, and complex regulatory overhead. Triangle Analytics rethinks web measurement from first principles: delivering sub-second real-time telemetry, session dynamics, conversion funnels, and feature flag exposures through a lightweight, privacy-preserving infrastructure.

---

## Architectural Advantages

### 1. Cookieless Ephemeral Session Architecture
Traditional analytics tools persist client cookies, localStorage markers, or fingerprinting mechanisms across browsing sessions, creating persistent cross-site audit trails that require mandatory user consent banners.

Triangle Analytics replaces persistent storage with a zero-cookie cryptographic hashing model:
- Daily rotating cryptographic salts hash client entropy (anonymized IP and User-Agent) in memory.
- Unique visitors are calculated with precision during each calendar day without persisting device fingerprints.
- Hashes automatically reset every 24 hours, guaranteeing that visitors cannot be tracked across days or external web domains.
- No cookie consent banners, GDPR consent dialogs, or PECR notices are required.

### 2. Sub-Kilobyte Payload and Core Web Vitals Protection
Heavy analytics trackers degrade page speed, block the browser main thread, and compromise Lighthouse scores.

Triangle Analytics utilizes a specialized tracking client:
- Payload footprint under 1.5 KB minified and gzipped, orders of magnitude lighter than standard tracking scripts.
- Execution via non-blocking asynchronous loader scripts that never delay First Contentful Paint (FCP) or Largest Contentful Paint (LCP).
- Ingestion telemetry dispatched via modern sendBeacon and asynchronous background transport, preventing network blocking on navigation or tab transitions.
- Client-side offline queue that gracefully buffers telemetry during transient network interruptions and flushes upon reconnection.

### 3. Sub-Second Real-Time Telemetry Stream
Most analytics platforms batch and delay visitor metrics by minutes or hours. Triangle Analytics streams data continuously:
- Ephemeral presence tracking with lightweight 12-second socket heartbeats.
- Instantaneous tab-close beacons that update concurrent active visitor counts in sub-second intervals.
- Live telemetry broadcasts reflecting active pageviews, interactions, and conversion events as they happen.

### 4. Deep Telemetry Without Surveillance
Triangle Analytics captures critical product and network dynamics while upholding strict user privacy:
- Entry Route Retention: Measures navigation concentration across primary landing routes and identifies immediate drop-offs.
- Inbound Source Attribution: Classifies traffic originating from organic search, referral domains, and campaign parameters (UTM source, medium, and campaign).
- Hardware and Platform Intelligence: Resolves device category (desktop, mobile, tablet), browser engine, operating system, and hardware model profiles.
- Network and Infrastructure Resolution: Identifies Autonomous System Numbers (ASN) to resolve ISP and carrier networks without storing IP addresses.
- Geographic Distribution: Resolves country-level traffic distribution entirely server-side via header geolocation.

### 5. Native Feature Flags and Experiment Analytics
Rather than maintaining separate, costly vendors for experiment tracking, Triangle Analytics includes built-in feature flag and experiment telemetry:
- Track flag evaluations directly alongside visitor sessions and conversion milestones.
- Multivariate experiment analysis showing exposure counts, unique visitor reach, and variance breakdowns.
- Correlate flag activations with downstream engagement, bounce rates, and session depth.

### 6. Regulatory Compliance by Design
Triangle Analytics is architected to exceed international privacy regulations out of the box:
- GDPR (General Data Protection Regulation): Complete exemption from consent banner requirements due to zero persistent personal identification.
- CCPA / CPRA (California Consumer Privacy Act): Zero personal data sales, profiling, or cross-context behavioral advertising.
- PECR (Privacy and Electronic Communications Regulations): Fully cookieless implementation requiring no terminal storage access.

---

## Technical Comparison

| Capability | Traditional Web Analytics | Triangle Analytics |
| :--- | :--- | :--- |
| Client Script Size | 45 KB to 120 KB | Under 1.5 KB |
| Cookie Storage | Persistent 1st and 3rd party cookies | Zero cookies (100% cookieless) |
| Cookie Consent Banners | Legally required | Not required |
| Real-Time Latency | 5 to 60 minute delay | Sub-second live updates |
| Cross-Site Tracking | Common practice | Structurally impossible |
| Feature Flag Telemetry | Separate vendor required | Native built-in capability |
| Data Ownership | Shared with ad networks | Private and isolated |

---

## License

Private and Proprietary. All rights reserved.
