
export function x_xss_protection(r: Response) {
  r.headers.set("X-XSS-Protection", "0");
  return r;
} // export function

