
import { describe, it, finish, equals } from "https://github.com/da99/da.ts/raw/main/src/Spec.ts";
import { helmet } from "../index.ts";

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

// =============================================================================
// Finish it:
// =============================================================================
await finish();
