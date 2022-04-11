

export type ALLOWED_POLICIES = "same-origin" | "same-site" | "cross-origin";

export function cross_origin_resource_policy(r: Response, policy: ALLOWED_POLICIES = "same-origin") {
  r.headers.set("Cross-Origin-Resource-Policy", policy);
  return r
} // export function

