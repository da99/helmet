
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
