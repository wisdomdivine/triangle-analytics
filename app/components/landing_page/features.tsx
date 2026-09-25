"use client";

import { motion } from "framer-motion";

export default function Features() {
  const steps = [
    {
      step: "1. Real-time Telemetry",
      description:
        "Sub-second visitor session streams, multi-tab presence detection, 12s socket heartbeats, and instant offline drop beacons.",
      ascii: `.-==========================================-.
|  ***  TRIANGLE TELEMETRY  ***  [NODE #01]  |
|  BAUD: 28,800 V.34     CARRIER DETECT: OK  |
|  MODEM: [HS] [AA] [CD] [OH] [RD] [SD] [TR] |
|============================================|
| RX STREAM >>> SOCKET.VXD [IRQ:04 PORT:23]  |
|  [12:04] <ACK> CONNECTED TAB_SESSION_01    |
|  [12:16] <HBT> HEARTBEAT 12s .......... OK |
|  [12:28] <HBT> HEARTBEAT 12s .......... OK |
|--------------------------------------------|
| 100% |        /\\             _/\\       /\\  |
|  75% |   /\\  /  \\   /\\      /   \\     /  \\ |
|  50% | _/  \\/    \\_/  \\__/\\_   \\___/    \\  |
|  25% | ::::::::::::::::::::::::::::::::::: |
|   0% +------------------------------------ |
|        00:00   00:15   00:30   00:45 00:60 |
|============================================|
| SYSOP: ONLINE | PEERS: 1,482 | PING: <4ms  |
'-==========================================-'`,
    },
    {
      step: "2. Zero Cookies & Pure Privacy",
      description:
        "100% cookie-free and compliant with GDPR, CCPA, and PECR out of the box. No cookie consent banners or intrusive cross-site fingerprinting.",
      ascii: `.-==========================================-.
|  ***  ZERO-COOKIE CYPHER-GATE v2.1  ***    |
|  SECURITY: MAXIMUM  //  PGP-2.6 PRIVACY    |
|============================================|
| [INCOMING HTTP STREAM]                     |
|  IP ADDRESS  : 198.51.100.42 -> [SCRUBBED] |
|  USER AGENT  : Netscape/3.0  -> [DISCARD]  |
|  COOKIE.TXT  : 0 BYTES WRITTEN [DISABLED]  |
|--------------------------------------------|
|         .-----.     CRYPTO ENGINE: SHA-256 |
|        / .---. \\    ---------------------- |
|       | |     | |   * ZERO TRACKING BANNER |
|       | '-----' |   * 1-WAY ROTATING SALT  |
|      [===========]  * NO CROSS-SITE TRACE  |
|      |  [#] PGP  |  * RAM BUFFER ONLY (24H)|
|      [===========]  * 100% GDPR / PECR OK  |
|============================================|
| ANONYMIZER: ACTIVE | STORAGE: VOLATILE RAM |
'-==========================================-'`,
    },
    {
      step: "3. Auto-Tracked Goals",
      description:
        "Automatically captures button clicks, outbound links, and scroll depth milestones (25%, 50%, 75%, 90%) without manual code configuration.",
      ascii: `.-==========================================-.
|  ***  AUTO-GOALS DISPATCHER v3.11  ***     |
|  SUBSYSTEM: INT 21h  //  AUTODETECT: ARMED |
|============================================|
| [SCROLL MILESTONE DAEMON]     PROGRESS STAT|
|  25% DEPTH  [================>] 100%  OK   |
|  50% DEPTH  [============>...]  78%   OK   |
|  75% DEPTH  [========>.......]  52%   OK   |
|  90% DEPTH  [====>...........]  36%   OK   |
|--------------------------------------------|
| [AUTO-CAPTURED HARDWARE & BROWSER EVENTS]  |
|  > MOUSE_LBTN  : BTN#CTA_PRIMARY (1,240)   |
|  > URL_REDIRECT: GITHUB.COM/REPO   (382)   |
|  > SVGA_RESIZE : 800x600->1024x768  (94)   |
|  > FORM_SUBMIT : /SIGNUP [INSTANT] (218)   |
|--------------------------------------------|
| DISPATCH: BEACON.COM  IRQ: 03  BUFF: 64 KB |
| CONFIG: ZERO-SETUP | DROP: 0% | STATUS: OK |
'-==========================================-'`,
    },
  ];

  return (
    <section id="features" className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-24 sm:py-32">
      <div className="w-full max-w-6xl flex flex-col gap-16">
        <motion.div
          initial={{ x: -30, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest pl-0.5">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#3A3935]">
            Engineered for speed, privacy, and actionable insight
          </h2>
          <p className="text-xs sm:text-sm text-[#3A3935] max-w-lg leading-relaxed">
            Lightweight, privacy-friendly telemetry built for modern web applications, high-performance APIs, and forward-thinking product teams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ x: -40, opacity: 0, filter: "blur(8px)" }}
              whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              className="flex flex-col gap-6"
            >
              <div className="w-full h-64 sm:h-72 bg-white rounded-3xl p-4 sm:p-5 flex items-center justify-center overflow-hidden select-none">
                <pre className="font-mono text-[9px] sm:text-[10px] md:text-[11px] leading-tight text-[#1E1E1C]/80 whitespace-pre">
                  {item.ascii}
                </pre>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-[#1E1E1C]">
                  {item.step}
                </h3>
                <p className="text-xs sm:text-sm text-[#3A3935] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
