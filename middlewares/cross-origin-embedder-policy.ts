/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
import 'https://raw.githubusercontent.com/cloudflare/workers-types/master/index.d.ts';

export function cross_origin_embedder_policy(r: Response) {
  r.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
  return r;
} // export function

