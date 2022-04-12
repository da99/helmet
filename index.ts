
import {content_security_policy} from "./middlewares/content-security-policy.ts";
import {cross_origin_embedder_policy} from "./middlewares/cross-origin-embedder-policy.ts";
import {cross_origin_opener_policy} from "./middlewares/cross-origin-opener-policy.ts";
import {cross_origin_resource_policy} from "./middlewares/cross-origin-resource-policy.ts";
import {referrer_policy} from "./middlewares/referrer-policy.ts";
import {x_content_type_options} from "./middlewares/x-content-type-options.ts";
import {x_dns_prefetch_control} from "./middlewares/x-dns-prefetch-control.ts";
import {x_download_options} from "./middlewares/x-download-options.ts";
import {x_frame_options} from "./middlewares/x-frame-options.ts";
import {x_permitted_cross_domain_policies} from "./middlewares/x-permitted-cross-domain-policies.ts";
import {x_powered_by} from "./middlewares/x-powered-by.ts";
import {x_xss_protection} from "./middlewares/x-xss-protection.ts";

export {
  content_security_policy,
  cross_origin_embedder_policy,
  cross_origin_opener_policy,
  cross_origin_resource_policy,
  referrer_policy,
  x_content_type_options,
  x_dns_prefetch_control,
  x_download_options,
  x_frame_options,
  x_permitted_cross_domain_policies,
  x_powered_by,
  x_xss_protection,
};

export type HTTP_Status = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 |
    300 | 301 | 302 | 303 | 304 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 |
    408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 |
    425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 |
    510 | 511;

export function helmet(r: Response) {
  content_security_policy(r);
  cross_origin_embedder_policy(r);
  cross_origin_opener_policy(r);
  cross_origin_resource_policy(r);
  referrer_policy(r);
  x_content_type_options(r);
  x_dns_prefetch_control(r);
  x_download_options(r);
  x_frame_options(r);
  x_permitted_cross_domain_policies(r);
  x_powered_by(r);
  x_xss_protection(r);
  return r;
} // export function

export function merge_response(r1: Response, r2: Response) {
  const headers = new Headers(r1.headers);
  for (const [k,v] of r2.headers.entries()) {
    headers.set(k, v);
  } // for
  return new Response(r2.body, {headers, status: r2.status})
} // export function


export function constant_time_compare(a : string, b : string) {
  let result = 0;
  let a_length = a.length;
  for(let i = 0; i < a_length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  // Leave length comparison for last
  // or else attacker will know the length of target.
  result |= a.length ^ b.length;
  return result === 0;
}; // function

export function default_404(r : Request) : Response {
  if (r.method !== "GET")
    return JSON_404({not_found: r.url});

  return(
    new Response(
      `not found: ${r.url}`,
      {
        headers: {"content-type": "text/plain"},
        status: 404
      }
    )
  );
} // function

export function JSON_200(x : Record<string, unknown>) {
  return new Response(
    JSON.stringify(x),
    {
      headers: { 'content-type': "application/json; charset=UTF-8" },
      status: 200,
      statusText: "found"
    }
  );
} // function

export function JSON_404(x : Record<string, unknown>) {
  const r = new Response(JSON.stringify(x), { status: 404 });
  content_json(r);
  access_control_allow_origin(r)
  return r;
} // function

export function access_control_allow_origin(r: Response, raw_value: string = '*') {
  const value = raw_value.trim().toLowerCase();
  if (value === "null")
    throw new Error("You can't use null. That is insecure: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin");
  r.headers.set("Access-Control-Allow-Origin", value);
  return r;
} // export function

export function content_json(r: Response) {
  r.headers.set('Content-Type', "application/json; charset=UTF-8");
  return r
} // export function

