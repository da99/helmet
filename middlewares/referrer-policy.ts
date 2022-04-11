
export interface ReferrerPolicyOptions {
  policy?: string | string[];
}

const ALLOWED_TOKENS = new Set<string>([
  "no-referrer",
  "no-referrer-when-downgrade",
  "same-origin",
  "origin",
  "strict-origin",
  "origin-when-cross-origin",
  "strict-origin-when-cross-origin",
  "unsafe-url",
  "",
]);

export function get_header_value_from_options({ policy = ["no-referrer"], }: Readonly<ReferrerPolicyOptions>): string {
  const tokens = typeof policy === "string" ? [policy] : policy;

  if (tokens.length === 0) {
    throw new Error("Referrer-Policy received no policy tokens");
  }

  const tokensSeen = new Set<string>();
  tokens.forEach((token) => {
    if (!ALLOWED_TOKENS.has(token)) {
      throw new Error(
        `Referrer-Policy received an unexpected policy token ${JSON.stringify(
          token
        )}`
      );
    } else if (tokensSeen.has(token)) {
      throw new Error(
        `Referrer-Policy received a duplicate policy token ${JSON.stringify(
          token
        )}`
      );
    }
    tokensSeen.add(token);
  });

  return tokens.join(",");
} // export function

export function referrer_policy(r: Response, options: Readonly<ReferrerPolicyOptions> = {}) {
  r.headers.set("Referrer-Policy", get_header_value_from_options(options));
  return r;
} // export function

