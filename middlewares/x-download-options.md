# X-Download-Options middleware

This middleware sets the `X-Download-Options` header to `noopen` to prevent Internet Explorer users from executing downloads in your site's context.

```typescript
import {x_download_options} from "https://raw.githubusercontent.com/da99/helmet.ts/main/middlewares/x-download-options.ts";
x_download_options(my_response)
```

Some web applications will serve untrusted HTML for download. By default, some versions of IE will allow you to open those HTML files _in the context of your site_, which means that an untrusted HTML page could start doing bad things in the context of your pages. For more, see [this MSDN blog post](https://docs.microsoft.com/en-us/archive/blogs/ie/ie8-security-part-v-comprehensive-protection).

This is pretty obscure, fixing a small bug on IE only. No real drawbacks other than performance/bandwidth of setting the headers, though.
