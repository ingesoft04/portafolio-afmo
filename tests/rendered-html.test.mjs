import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { access, readFile } from "node:fs/promises";
import { once } from "node:events";
import test from "node:test";

async function withServer(run) {
  const port = 3200 + (process.pid % 1000);
  const server = spawn(process.execPath, [".next/standalone/server.js"], {
    cwd: new URL("..", import.meta.url),
    env: { ...process.env, HOSTNAME: "127.0.0.1", PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let startupOutput = "";
  server.stdout.on("data", chunk => { startupOutput += chunk; });
  server.stderr.on("data", chunk => { startupOutput += chunk; });
  try {
    for (let attempt = 0; attempt < 40; attempt += 1) {
      try {
        const response = await fetch(`http://127.0.0.1:${port}/`);
        if (response.ok) return await run(response, port);
      } catch {
        // The standalone server may still be binding its port; retry briefly.
      }
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    throw new Error(`Next.js server did not start: ${startupOutput}`);
  } finally {
    server.kill("SIGTERM");
    if (server.exitCode === null) await once(server, "exit");
  }
}

test("server-renders the professional portfolio and SEO metadata", async () => {
  await withServer(async response => {
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    assert.match(response.headers.get("content-security-policy") ?? "", /frame-ancestors 'none'/);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert.equal(response.headers.get("strict-transport-security"), "max-age=31536000; includeSubDomains");
    const html = await response.text();
    assert.match(html, /Andrés Felipe Martínez/);
    assert.match(html, /Software, Security &amp; Infrastructure/);
    assert.match(html, /property="og:image"/);
    assert.match(html, /application\/ld\+json/);
    assert.match(html, /¿Qué tipo de apoyo necesita\?/);
    assert.match(html, /Perfiles profesionales verificados/);
    assert.doesNotMatch(html, /solicitar caso de estudio/i);
  });
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
  assert.match(page, /Soporte e infraestructura/);
  assert.match(page, /IIS, datos y automatización/);
  assert.match(styles, /\.track-digital/);
  assert.doesNotMatch(page, /Emblema automotriz/);
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
  assert.match(projects, /case-details/);
  assert.match(projects, /<details/);
  assert.match(projects, /CAPSULE/);
  assert.doesNotMatch(projects, /SHIELD|EDU API/);
  assert.doesNotMatch(page, /campus educativo virtual|Laboratorio defensivo de ciberseguridad/);
  assert.match(page, /title:"Joyería"/);
  assert.match(page, /title:"Psico Luz"/);
  assert.match(page, /title:"Maquillaje Web"/);
  assert.match(page, /title:"Cápsula de Tiempo"/);
  assert.doesNotMatch(page, /Gestión para profesionales de bienestar|Portal comercial de servicios tecnológicos|Plataforma de reservas y servicios|Laboratorio de infraestructura/);
  assert.doesNotMatch(page, /KVM|libvirt|QCOW2|OpenMediaVault|Ubuntu Server 24\.04|Windows Server 2025|Windows 10/);
  assert.doesNotMatch(layout, /telephone:/);
  assert.match(preferences, /localStorage/);
  await access(new URL("../public/perfil-andres-felipe-martinez-es.pdf", import.meta.url));
  await access(new URL("../public/andres-felipe-martinez-profile-en.pdf", import.meta.url));
  await access(new URL("../public/og.png", import.meta.url));
});
