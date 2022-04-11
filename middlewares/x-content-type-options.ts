
export function x_content_type_options(r: Response) {
  r.headers.set("X-Content-Type-Options", "nosniff");
  return r;
} // export function
