# X-Permitted-Cross-Domain-Policies middleware

The `X-Permitted-Cross-Domain-Policies` header tells some web clients (like Adobe Flash or Adobe Acrobat) your domain's policy for loading cross-domain content. See the description on [OWASP](https://owasp.org/www-project-secure-headers/) for more.

Usage:

```typescript
import {x_permitted_cross_domain_policies} from "https://raw.githubusercontent.com/da99/helmet.ts/main/middlewares/x-permitted-cross-domain-policies.ts";

// You can use any of the following values:
const r = new Response(...);
x_permitted_cross_domain_policies(r); // defaults to: none
x_permitted_cross_domain_policies(r, "none");
x_permitted_cross_domain_policies(r, "master-only");
x_permitted_cross_domain_policies(r, "by-content-type");
x_permitted_cross_domain_policies(r, "all");
```

The `by-ftp-type` will never be supported. So don't even mention it. You don't need it. Come up with a better alternative.

If you don't expect Adobe products to load data from your site, you get a minor security benefit by adding this header.
