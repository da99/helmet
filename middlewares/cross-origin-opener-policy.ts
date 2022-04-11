

// =============================================================================
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
// =============================================================================


export type ALLOWED_POLICIES = "same-origin" | "same-origin-allow-popups" | "unsafe-none";

export function cross_origin_opener_policy(r: Response, option: ALLOWED_POLICIES = "same-origin") {
  r.headers.set("Cross-Origin-Opener-Policy", option);
  return r;
} // export function

