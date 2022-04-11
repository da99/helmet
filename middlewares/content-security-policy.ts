
export function none() { return "'none'"; } // function
export function self() { return "'self'"; } // function


export type Directive = "default-src" | "base-uri" | "form-action" |
  "frame-ancestors" | "img-src" | "object-src" |
  "script-src" | "script-src-attr" | "style-src";

export type Directives = Record<Directive, string>;

const DEFAULTS: Directives = {
  "default-src": none(),
  "base-uri": self(),
  "form-action": none(),
  "frame-ancestors": none(),
  "img-src": self(),
  "object-src": none(),
  "script-src": none(),
  "script-src-attr": none(),
  "style-src": none(),
};

export function content_security_policy(r: Response, raw: Directives) {
  const new_d = Object.assign({}, DEFAULTS, raw);
  r.headers.set("Content-Security-Policy", to_string(new_d));
  return r;
} // function

export function to_string(d: Directives) {
  const vals: string[] = [];
  for (const k in d) {
    vals.push(`${k} ${d[k as Directive]}`)
  }
  return vals.join("; ")
} // export function

