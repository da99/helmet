
export function x_download_options(r: Response) {
  r.headers.set("X-Download-Options", "noopen");
  return r;
} // export function
