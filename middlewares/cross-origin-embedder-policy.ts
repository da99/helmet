
export function cross_origin_embedder_policy(r: Response) {
  r.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  return r;
} // export function

