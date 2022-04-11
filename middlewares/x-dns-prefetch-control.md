# X-DNS-Prefetch-Control middleware

This middleware lets you set the `X-DNS-Prefetch-Control` to control browsers' DNS prefetching. Read more about it [on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching) and [on Chromium's docs](https://dev.chromium.org/developers/design-documents/dns-prefetching).

Usage:

```typescript
import {x_dns_prefetch_control} from "https://raw.githubusercontent.com/da99/helmet/main/middlewares/x-dns-prefetch-control.ts";

// Set X-DNS-Prefetch-Control: off
x_dns_prefetch_control(my_response);
x_dns_prefetch_control(my_response, "off");

// Set X-DNS-Prefetch-Control: on
x_dns_prefetch_control(my_response, "on");
```
