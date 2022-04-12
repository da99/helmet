# X-Powered-By middleware

Simple function to remove the `X-Powered-By` HTTP header if it's set.

Make it just a little harder for hackers to exploit known vulnerabilities in your software.
For example, `X-Powered-By: Express` is sent in every HTTP request coming from Express, by default.
This won't provide much security benefit ([as discussed here](https://github.com/expressjs/express/pull/2813#issuecomment-159270428)), but might help a tiny bit. It will also improve performance by reducing the number of bytes sent.

```typescript
import {x_powered_by} from "https://github.com/da99/helmet.ts/raw/main/middlewares/x-powered-by.ts";
const r = new Response(...);
x_powered_by(r)

// This is equivalent to:
r.headers.delete("X-Powered-By");
```

