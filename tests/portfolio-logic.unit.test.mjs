import assert from "node:assert/strict";
import test from "node:test";
import { documentLinks, isLanguage, isTheme, portfolioAnchors, toggleLanguage, toggleTheme } from "../app/lib/portfolioLogic.mjs";

test("toggles language deterministically", () => {
  assert.equal(toggleLanguage("es"), "en");
  assert.equal(toggleLanguage("en"), "es");
});

test("toggles light and dark themes", () => {
  assert.equal(toggleTheme("dark"), "light");
  assert.equal(toggleTheme("light"), "dark");
});

test("accepts only supported stored preferences", () => {
  assert.equal(isLanguage("es"), true);
  assert.equal(isLanguage("fr"), false);
  assert.equal(isTheme("dark"), true);
  assert.equal(isTheme("system"), false);
});

test("keeps navigation anchors unique and ordered", () => {
  assert.equal(portfolioAnchors.length, 6);
  assert.equal(new Set(portfolioAnchors).size, portfolioAnchors.length);
  assert.deepEqual(portfolioAnchors.slice(0, 2), ["#perfil", "#especialidades"]);
});

test("keeps both professional documents available in each language", () => {
  for (const language of ["es", "en"]) {
    const links = documentLinks(language);
    assert.equal(links.length, 2);
    assert.ok(links.every(([, href]) => href.endsWith(".pdf")));
    assert.equal(new Set(links.map(([, href]) => href)).size, 2);
  }
});
