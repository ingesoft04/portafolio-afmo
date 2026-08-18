import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the professional portfolio and SEO metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /Andrés Felipe Martínez/);
  assert.match(html, /Software, Security &amp; Infrastructure/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /¿Qué tipo de apoyo necesita\?/);
  assert.match(html, /Perfiles profesionales verificados/);
  assert.doesNotMatch(html, /solicitar caso de estudio/i);
});

test("keeps professional links, documents, themes, and privacy controls wired", async () => {
  const [page, layout, contact, projects, preferences, styles] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ContactSection.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ProjectCaseStudies.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/hooks/usePortfolioPreferences.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/recruiter.css", import.meta.url), "utf8"),
  ]);
  assert.match(page, /OpportunitySelector/);
  assert.match(page, /track-emblem/);
  assert.match(page, /Emblema digital/);
  assert.match(page, /Emblema automotriz/);
  assert.match(styles, /\.track-digital/);
  assert.match(styles, /\.track-automotive/);
  assert.doesNotMatch(page, /REMOTE \/ UTC-5/);
  assert.doesNotMatch(page, /ring r1/);
  assert.match(contact, /Professional documents/);
  assert.match(layout, /NEXT_PUBLIC_SITE_URL/);
  assert.match(layout, /"@type":"Person"/);
  assert.match(contact, /linkedin\.com\/in\/anmartinez94/);
  assert.match(contact, /github\.com\/ingesoft04/);
  assert.match(contact, /upwork\.com\/freelancers/);
  assert.match(projects, /case-evidence/);
  assert.match(projects, /case-emblem/);
  assert.match(projects, /SHIELD/);
  assert.match(projects, /CAPSULE/);
  assert.match(projects, /EDU API/);
  assert.match(page, /Backend seguro para campus educativo virtual/);
  assert.match(preferences, /localStorage/);
  await access(new URL("../public/perfil-andres-felipe-martinez-es.pdf", import.meta.url));
  await access(new URL("../public/andres-felipe-martinez-profile-en.pdf", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
});
