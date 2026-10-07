<div align="center">
  <img src="public/images/logo.png" alt="Triangle Analytics" width="96" />
  <h1>Triangle Analytics</h1>
  <p>Lightweight privacy first web telemetry and realtime product analytics</p>
  <p><a href="https://the-triangle-analytics.web.app">Live Demo: the-triangle-analytics.web.app</a></p>
</div>

## Overview

Triangle Analytics gives you realtime website traffic insights without cookies, without tracking individual people, and without slowing down your site.

Traditional analytics platforms require large script files, track visitors across the web, and force you to show annoying consent banners. Triangle Analytics keeps things simple and honest: fast telemetry, live visitor counts, and clean traffic summaries in a script that takes less than a minute to set up.


## Quickstart

Add Triangle Analytics to your website in one minute.

1. Plain HTML

Place this tag inside your head tag:

```html
<script src="https://the-triangle-analytics.web.app/tracker.js" defer data-site-id="YOUR_SITE_ID"></script>
```

2. Next.js

Add the script component to your root layout:

```jsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://the-triangle-analytics.web.app/tracker.js"
          data-site-id="YOUR_SITE_ID"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

3. Astro

Add the script tag inside your layout component:

```html
<html>
  <head>
    <script is:inline src="https://the-triangle-analytics.web.app/tracker.js" defer data-site-id="YOUR_SITE_ID"></script>
  </head>
  <body>
    <slot />
  </body>
</html>
```


## Privacy Badge

Show visitors that your site respects their privacy.

Light badge markdown:

```markdown
[![Analytics by Triangle](https://the-triangle-analytics.web.app/badge.svg)](https://the-triangle-analytics.web.app)
```

Dark badge markdown:

```markdown
[![Analytics by Triangle](https://the-triangle-analytics.web.app/badge-dark.svg)](https://the-triangle-analytics.web.app)
```

HTML embed:

```html
<a href="https://the-triangle-analytics.web.app">
  <img src="https://the-triangle-analytics.web.app/badge.svg" alt="Analytics by Triangle" width="152" height="28" />
</a>
```


## Why Triangle Analytics

1. No cookies and no consent banners
Most analytics tools store cookies or device markers on visitors computers. That requires consent banners and popups. Triangle Analytics uses zero cookies and resets visitor identifiers every twenty four hours. You never need a cookie banner.

2. Lightweight script under two kilobytes
Traditional tracking scripts can be heavy and slow down websites. The Triangle tracker script is under two kilobytes so it never delays your page loading speed.

3. Live realtime visitor updates
Visitor counts and page changes appear on your dashboard instantly. When someone closes a tab or leaves, the live counter updates right away.

4. Clear traffic sources and page routes
See where your visitors arrive from, including search engines and referral links. Understand which pages people visit first and where they navigate next.

5. Built in feature flags and experiment metrics
Test new features and see exposure counts right alongside your traffic metrics without paying for separate testing software.

6. Private and compliant
Your data remains private. Visitors are never tracked across other websites and no personal information is sold or shared with advertisers.


## License

Private and Proprietary. All rights reserved.
