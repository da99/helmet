# Cross-Origin-Resource-Policy middleware

This middleware sets the `Cross-Origin-Resource-Policy` header. Read about it [in the spec](https://resourcepolicy.fyi/).

Usage:

```typescript
import {cross_origin_resource_policy} from "https://raw.githubusercontent.com/da99/helmet/main/middlewares/cross-origin-resource-policy.ts";

// Sets "Cross-Origin-Resource-Policy: same-origin"
cross_origin_resource_policy(my_response)
cross_origin_resource_policy(my_response, { policy: "same-origin" })

// Sets "Cross-Origin-Resource-Policy: same-site"
cross_origin_resource_policy(my_response, { policy: "same-site" })
```
