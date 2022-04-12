// # Referrer-Policy middleware
//
// The [Referer HTTP header](https://en.wikipedia.org/wiki/HTTP_referer) is typically set by web browsers to tell the server where it's coming from. For example, if you click a link on _example.com/index.html_ that takes you to _wikipedia.org_, Wikipedia's servers will see `Referer: example.com`. This can have privacy implications—websites can see where you are coming from. The new [`Referrer-Policy` HTTP header](https://www.w3.org/TR/referrer-policy/#referrer-policy-header) lets authors control how browsers set the Referer header.
//
// [Read the spec](https://www.w3.org/TR/referrer-policy/#referrer-policies) to see the options you can provide.
//
// Usage:
//
// ```typescript
// import {referrer_policy} from "https://raw.githubusercontent.com/da99/helmet.ts/main/middlewares/referrer_policy.ts";
//
// referrer_policy(my_response, "same-origin");
// // Referrer-Policy: same-origin
//
// referrer_policy(my_response, "unsafe-url");
// // Referrer-Policy: unsafe-url
//
// referrer_policy(my_response, "no-referrer", "unsafe-url")
// // Referrer-Policy: no-referrer,unsafe-url
//
// referrer_policy(my_response);
// // Referrer-Policy: no-referrer
// ```


export type ALLOWED_TOKENS = "no-referrer" | 
  "no-referrer-when-downgrade" | "same-origin" | 
  "origin" | "strict-origin" | 
  "origin-when-cross-origin" | 
  "strict-origin-when-cross-origin" | "unsafe-url";


export function referrer_policy(r: Response, ...options: ALLOWED_TOKENS[]) {
  if (options.length === 0)
    options.push("no-referrer");
  r.headers.set("Referrer-Policy", options.join(", "));
  return r;
} // export function

