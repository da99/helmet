# X-XSS-Protection middleware

The `X-XSS-Protection` HTTP header aimed to offer a basic protection against cross-site scripting (XSS) attacks. _However, you probably should disable it_, which is what this middleware does.

Many browsers have chosen to remove it because of the unintended security issues it creates. Generally, you should protect against XSS with sanitization and a Content Security Policy. For more, read this [blog post](https://blog.innerht.ml/the-misunderstood-x-xss-protection/).

This middleware sets the `X-XSS-Protection` header to `0`. For example:

```typescript
import {x_xss_protection} from "https://raw.githubusercontent.com/da99/helmet/main/middlewares/x-xss-protection.ts";

// Set "X-XSS-Protection: 0"
const r = new Response();
x_xss_protection(r)
```

If you truly need the legacy behavior, you can write your own simple middleware and avoid installing this module. For example:

```typescript
// NOTE: This is probably insecure!
const r = new Response();
r.headers.set("X-XSS-Protection", "1; mode=block");
```
Read this [this GitHub issue](https://github.com/helmetjs/helmet/issues/230) as to why you would most likely would *not* want
to set it to anything other than 0.
