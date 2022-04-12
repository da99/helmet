
import { describe, it, finish, equals } from "https://github.com/da99/da.ts/raw/main/src/Spec.ts";
import { helmet, merge_response, content_json, content_html, content_text, access_control_allow_origin } from "../index.ts";

describe("Defaults: helmet(new Response())");

for (const target of ["default-src 'none';", "base-uri 'self';", "form-action 'none';", "frame-ancestors 'none';",
"img-src 'self';", "object-src 'none';", "script-src 'none';", "style-src 'none';"]) {
  it(`sets Content-Security-Policy to include: ${target}`, function () {
    const r = new Response();
    helmet(r);
    const actual = r.headers.get("Content-Security-Policy") || "";
    equals(actual.match(target), [target], actual);
  });
} // for ... of

for (const [k,v] of Object.entries({
"Cross-Origin-Embedder-Policy": "require-corp",
"Cross-Origin-Opener-Policy": "same-origin",
"Referrer-Policy": "no-referrer",
"X-Content-Type-Options": "nosniff",
"X-DNS-Prefetch-Control": "off",
"X-Download-Options": "noopen",
"X-Frame-Options": "DENY",
"X-Permitted-Cross-Domain-Policies": "none",
"X-Powered-By": null,
"X-XSS-Protection": "0"
})) {
  it(`sets ${k} to: ${Deno.inspect(v)}`, function () {
    const r = new Response();
    helmet(r);
    equals(r.headers.get(k), v);
  });
} // for ... of

describe("export function merge_response(Response, Response)");

it("uses the 2nd response body.", async function () {
  const r1 = new Response("hello1");
  const r2 = new Response("hello #2", {status: 404});
  const fin_r = merge_response(r1, r2);
  const actual = await fin_r.text();
  equals(actual, "hello #2");
});

it("merges the 2nd response headers into the 1st response headers.", function () {
  const r1 = new Response("hello1");
  const r2 = new Response("hello #2", {status: 404});
  content_json(r2);
  const fin_r = merge_response(r1, r2);
  const actual = fin_r.headers.get("Content-Type");
  equals(actual, "application/json; charset=UTF-8");
});

it("uses the 2nd response status.", function () {
  const r1 = new Response("hello1");
  const r2 = new Response("hello #2", {status: 418});
  const fin_r = merge_response(r1, r2);
  const actual = fin_r.status
  equals(actual, 418);
});

it("does not alter the headers of the 1st response.", function () {
  const r1 = new Response("hello1");
  const r2 = new Response("hello #2", {status: 418});
  content_html(r1);
  content_json(r2);
  const fin_r = merge_response(r1, r2);
  const actual = r1.headers.get("Content-Type");
  equals(actual, "text/html; charset=UTF-8");
});

describe("export function access_control_allow_origin(Response, string?)");
it("throws an error if string value is: 'null'", function () {
  let msg = "error not raises";
  try {
    access_control_allow_origin(new Response("yo yo"), "null");
  } catch (e) { msg = e.message; }
  equals(msg.match("You may not use 'null'"), ["You may not use 'null'"], msg)
});

// =============================================================================
// The tests have been defined. Let's the tests:
// =============================================================================
await finish();
