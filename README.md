# Helmet

You want the original version:

[https://github.com/helmetjs/helmet](https://github.com/helmetjs/helmet)

This Helmet is only for module Cloudflare workers developed on Deno. That is
very specific. You don't want this. 

## Quick start

* Learn JavaScript.
* Learn TypeScript.
* Learn Deno.
* Learn ESM (ie ECMAScript) modules.
* Learn Cloudflare Workers.
* Give up and get a real job outside of software.

# Helmet maintainer readme

If you find something better than this for module Cloudflare Workers, please tell me.

# Lockdown those header values the lazy/default way:

```typescript

import { helmet } from "https://raw.githubusercontent.com/da99/helmet/main/index.ts";
const r = new Response();
helmet(r);
```
