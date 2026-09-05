---
domain: studytimejo.com
origin: https://www.studytimejo.com
source_render: false
generated_at: 2026-09-05T19:42:43.951Z
findings: 3
source_evidence: .seoagent/audit/evidence.md
note: >-
  MACHINE-GENERATED findings report derived from the live-crawl evidence.
  The audit (audit/latest.md) BUILDS ON this file — it must carry every
  finding below forward (adding GSC context and prioritization on top),
  never re-derive or truncate the list. Do not hand-edit; re-run
  `seoagent crawl` to regenerate.
---

# Technical findings — studytimejo.com (from the live crawl)

Derived by code from `.seoagent/audit/evidence.md` (crawled https://www.studytimejo.com at 2026-09-05T19:42:43.951Z). Every finding below is **Confirmed** against that evidence. Reporting every one of these is non-negotiable — session economy trims bookkeeping, never findings.

## [High] 1 discovered page could not be crawled — evidence is incomplete

**Confirmed** · Evidence: evidence.md § Pages NOT captured

**Check:** `crawl_incomplete`

These URLs were discovered by the crawl (sitemap, nav links, or repo routes) but did not return a usable 2xx response even after retries and a sequential re-fetch. The crawl is INCOMPLETE: every other finding in this report is a lower bound, and no check result exists for these pages — an uncaptured page must never be treated as passing.

Affected URLs:
- https://www.studytimejo.com/ (network error: fetch failed (ENOTFOUND))

**Why it matters:** Linked or sitemap-listed URLs that error waste crawl budget, break user journeys, and (if they used to rank) bleed accumulated authority — and every page the crawl could not capture is a blind spot in this audit.

**Suggested fix:** Fix or 301-redirect each URL (remove permanently dead ones from the sitemap and internal links); if the failure was network/timeout, re-run `seoagent crawl` to complete the evidence before treating the audit as final.

## [High] robots.txt is missing or unreachable

**Confirmed** · Evidence: evidence.md § robots.txt — Not fetched

**Check:** `robots_txt_missing`

Fetching /robots.txt returned a network error — crawlers get no crawl directives and no sitemap pointer from it.

**Why it matters:** Without a robots.txt, crawlers apply defaults and never discover the sitemap from it; a misconfigured server may even be blocking the fetch.

**Suggested fix:** Serve a robots.txt at the site root — at minimum `User-agent: *`, `Allow: /`, and a `Sitemap:` line pointing at the live sitemap.xml.

## [High] sitemap.xml is missing or unreachable

**Confirmed** · Evidence: evidence.md § sitemap.xml — Not fetched

**Check:** `sitemap_missing`

Fetching /sitemap.xml returned a network error (or the response was not valid sitemap XML).

**Why it matters:** Without a sitemap, search engines rely purely on link discovery — new and deep pages get found late or never.

**Suggested fix:** Generate and serve a sitemap.xml listing every canonical public URL, and submit it to Google Search Console.

## Already present on the live site — never recommend adding these

The crawl confirms the following already exist in the live server HTML. If the repo source lacks any of them, the **repo source is stale — the live page already serves it; reconcile the source** with what is live. Never phrase these as "add X".

_(no fetched page serves any head-level entity — nothing to guard)_
