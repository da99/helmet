
// # Cross-Origin-Resource-Policy middleware
//
// This middleware sets the `Cross-Origin-Resource-Policy` header. Read about it [in the spec](https://resourcepolicy.fyi/).
//
// Usage:
//
// ```typescript
// import {cross_origin_resource_policy} from "https://raw.githubusercontent.com/da99/helmet/main/middlewares/cross-origin-resource-policy.ts";
//
// // Sets "Cross-Origin-Resource-Policy: same-origin"
// cross_origin_resource_policy(my_response)
// cross_origin_resource_policy(my_response, "same-origin")
//
// // Sets "Cross-Origin-Resource-Policy: same-site"
// cross_origin_resource_policy(my_response, "same-site")
// ```

export type ALLOWED_POLICIES = "same-origin" | "same-site" | "cross-origin";

export function cross_origin_resource_policy(r: Response, policy: ALLOWED_POLICIES = "same-origin") {
  r.headers.set("Cross-Origin-Resource-Policy", policy);
  return r
} // export function

