
export interface CrossOriginResourcePolicyOptions {
  policy?: string;
}

const ALLOWED_POLICIES = new Set(["same-origin", "same-site", "cross-origin"]);

export function get_header_value_from_options({ policy = "same-origin", }: Readonly<CrossOriginResourcePolicyOptions>): string {
  if (ALLOWED_POLICIES.has(policy)) {
    return policy;
  }
  throw new Error(
    `Cross-Origin-Resource-Policy does not support the ${JSON.stringify( policy)} policy`
  );
} // export function

export function cross_origin_resource_policy(r: Response, options: Readonly<CrossOriginResourcePolicyOptions> = {}) {
  r.headers.set("Cross-Origin-Resource-Policy", get_header_value_from_options(options));
  return r
} // export function

