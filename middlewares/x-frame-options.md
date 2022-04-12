# X-Frame-Options middleware

The `X-Frame-Options` HTTP header restricts who can put your site in a frame which can help mitigate things like [clickjacking attacks](https://en.wikipedia.org/wiki/Clickjacking). The header has two modes: `DENY` and `SAMEORIGIN`.

This header is superseded by [the `frame-ancestors` Content Security Policy directive](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) but is still useful on old browsers.

If your app does not need to be framed (and most don't) you can use `DENY`. If your site can be in frames from the same origin, you can set it to `SAMEORIGIN`.

Usage:

```javascript
import {x_frame_options} from "https://github.com/da99/helmet.ts/raw/main/middlewares/x-frame-options.ts";

// Don't allow me to be in ANY frames:
x_frame_options(my_response); // defaults to "DENY"
x_frame_options(my_response, "DENY");

// Only let me be framed by people of the same origin:
x_frame_options(my_response, "SAMEORIGIN");
```

A legacy action, `ALLOW-FROM`, is not supported by this middleware. [Read more here.](https://github.com/helmetjs/helmet.ts/wiki/How-to-use-X%E2%80%93Frame%E2%80%93Options's-%60ALLOW%E2%80%93FROM%60-directive)
