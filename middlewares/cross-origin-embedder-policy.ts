
// =============================================================================
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
// =============================================================================

export function cross_origin_embedder_policy(r: Response) {
  r.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  return r;
} // export function

