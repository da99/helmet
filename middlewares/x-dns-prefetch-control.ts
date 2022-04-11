
export function x_dns_prefetch_control( r: Response, setting: "on" | "off" = "off") {
  r.headers.set("X-DNS-Prefetch-Control", setting);
  return r;
} // export function

