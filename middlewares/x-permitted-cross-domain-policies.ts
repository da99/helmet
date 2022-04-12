
export type ALLOWED = "none" | "master-only" | "by-content-type" | "all";

export function x_permitted_cross_domain_policies(r: Response, option: ALLOWED = "none") {
  r.headers.set("X-Permitted-Cross-Domain-Policies", option);
  return r;
} // export function

