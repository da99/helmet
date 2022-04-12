# Helmet

You want the original version for NodeJS users:

[https://github.com/helmetjs/helmet](https://github.com/helmetjs/helmet)

This Helmet is only for module Cloudflare workers developed on Deno. That is
very specific. Chances are you are one of those React people using AWS.
That's ok. I'm not smart enough for that. That is why I stick with Deno
and Cloudflare.  Smart people stick with React/NodeJS/AWS. Dummies like me
stick with Deno on Cloudflare.

## Quick start

  * Learn JavaScript.
  * Learn TypeScript.
  * Learn Deno.
  * Learn ESM (ie ECMAScript) modules.
  * Learn Cloudflare Workers.
  * Give up and get a real job outside of software.

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

## Helpers
```typescript
  import {
    access_control_allow_origin,
    content_json,
    content_html,
    content_text,
    default_404
  } from "https://raw.githubusercontent.com/da99/helmet.ts/main/index.ts";

```

## Running the tests:

  * Have Deno installed and in your $PATH.
  * `bin/upgrade` -- Clears Deno's cache for each .ts file in this dir.
  * `bin/test`

# Complaints? Suggestions?

If you find something better than this for module Cloudflare Workers, please tell me.

