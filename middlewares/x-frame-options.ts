
export type ALLOWED = "DENY" | "SAMEORIGIN";

export function x_frame_options(r: Response, option: ALLOWED = "DENY") {
  r.headers.set("X-Frame-Options", option);
  return r;
} // export function

