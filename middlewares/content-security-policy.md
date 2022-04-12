# Content Security Policy middleware

Content Security Policy (CSP) helps prevent unwanted content from being injected/loaded into your webpages. This can mitigate cross-site scripting (XSS) vulnerabilities, clickjacking, formjacking, malicious frames, unwanted trackers, and other web client-side attacks.

If you want to learn how CSP works, check out the fantastic [HTML5 Rocks guide](https://www.html5rocks.com/en/tutorials/security/content-security-policy/), the [Content Security Policy Reference](https://content-security-policy.com/), and the [Content Security Policy specification](https://www.w3.org/TR/CSP/).

This middleware helps set Content Security Policies.

Basic usage:

```typescript
import { none, self, content_security_policy } from "https://raw.githubusercontent.com/da99/helmet/main/middlewares/content-security-policy.ts";

const r = new Response(...);
let response = content_security_policy(r, {
  "default-src": self(),
  "script-src": none()
});

```

If no directives are supplied, the following policy is set (whitespace added for readability):

```typescript

const r = new Response(...);
content_security_policy(r);

const DEFAULTS: Directives = {
  "default-src": none(),
  "base-uri": self(),
  "form-action": none(),
  "frame-ancestors": none(),
  "img-src": self(),
  "object-src": none(),
  "script-src": none(),
  "script-src-attr": none(),
  "style-src": none(),
};

```

This middleware does minimal validation. You should use a more sophisticated CSP validator, like [Google's CSP Evaluator](https://csp-evaluator.withgoogle.com/), to make sure your CSP looks good.

## Recipe: generating nonces

You can dynamically generate nonces to allow inline `<script>` tags to be safely evaluated. Here's a simple example:

```js
# TODO: Adapt this to DENO:
const crypto = require("crypto");
const contentSecurityPolicy = require("helmet-csp");

app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("hex");
  next();
});

app.use((req, res, next) => {
  contentSecurityPolicy({
    useDefaults: true,
    directives: {
      scriptSrc: ["'self'", `'nonce-${res.locals.nonce}'`],
    },
  })(req, res, next);
});

app.use((req, res) => {
  res.end(`<script nonce="${res.locals.nonce}">alert(1 + 1);</script>`);
});
```

## See also

- [Google's CSP Evaluator tool](https://csp-evaluator.withgoogle.com/)
- [CSP Scanner](https://cspscanner.com/)
- [GitHub's CSP journey](https://githubengineering.com/githubs-csp-journey/)
- [Content Security Policy for Single Page Web Apps](https://developer.squareup.com/blog/content-security-policy-for-single-page-web-apps/)
