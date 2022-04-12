# Helmet

You want the original version:

[https://github.com/helmetjs/helmet](https://github.com/helmetjs/helmet)

This Helmet is only for module Cloudflare workers developed on Deno. That is
very specific. You don't want this. 

# Lockdown those header values the lazy/default way:

```typescript
  import { helmet } from "https://raw.githubusercontent.com/da99/helmet.ts/main/index.ts";
  const r = new Response();
  helmet(r);

  // Defaults:
  //   sets Content-Security-Policy to include: default-src 'none'; ✓
  //   sets Content-Security-Policy to include: base-uri 'self'; ✓
  //   sets Content-Security-Policy to include: form-action 'none'; ✓
  //   sets Content-Security-Policy to include: frame-ancestors 'none'; ✓
  //   sets Content-Security-Policy to include: img-src 'self'; ✓
  //   sets Content-Security-Policy to include: object-src 'none'; ✓
  //   sets Content-Security-Policy to include: script-src 'none'; ✓
  //   sets Content-Security-Policy to include: style-src 'none'; ✓
  //   sets Cross-Origin-Embedder-Policy to: "require-corp" ✓
  //   sets Cross-Origin-Opener-Policy to: "same-origin" ✓
  //   sets Referrer-Policy to: "no-referrer" ✓
  //   sets X-Content-Type-Options to: "nosniff" ✓
  //   sets X-DNS-Prefetch-Control to: "off" ✓
  //   sets X-Download-Options to: "noopen" ✓
  //   sets X-Frame-Options to: "DENY" ✓
  //   sets X-Permitted-Cross-Domain-Policies to: "none" ✓
  //   sets X-Powered-By to: null ✓
  //   sets X-XSS-Protection to: "0" ✓
```

## Quick start

  * Learn JavaScript.
  * Learn TypeScript.
  * Learn Deno.
  * Learn ESM (ie ECMAScript) modules.
  * Learn Cloudflare Workers.
  * Give up and get a real job outside of software.

## Running the tests:

  * Have Deno installed and in your $PATH.
  * `bin/test`

# Complaints? Suggestions?

If you find something better than this for module Cloudflare Workers, please tell me.

