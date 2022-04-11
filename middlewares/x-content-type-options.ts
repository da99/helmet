
export function X_Content_Type_Options(r: Response) {
  r.headers.set("X-Content-Type-Options", "nosniff");
  return r;
} // export function
