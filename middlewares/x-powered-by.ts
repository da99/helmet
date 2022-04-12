
export function x_powered_by(r: Response) {
  r.headers.delete("X-Powered-By");
  return r;
} // export function
