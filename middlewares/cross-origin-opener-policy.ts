

// =============================================================================
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
// =============================================================================

export interface CrossOriginOpenerPolicyOptions {
  policy?: string;
}

const ALLOWED_POLICIES = new Set([
  "same-origin",
  "same-origin-allow-popups",
  "unsafe-none",
]);

export function get_header_value_from_options({ policy = "same-origin", }: Readonly<CrossOriginOpenerPolicyOptions>): string {
  if (ALLOWED_POLICIES.has(policy)) {
    return policy;
  } else {
    throw new Error(
      `Cross-Origin-Opener-Policy does not support the ${JSON.stringify( policy)} policy`
    );
  }
} // export function

export function cross_origin_opener_policy(r: Response, options: Readonly<CrossOriginOpenerPolicyOptions> = {}) {
  r.headers.set("Cross-Origin-Opener-Policy", get_header_value_from_options(options));
  return r;
} // export function

