# Playwright TypeScript Architecture Guidelines

Du bist ein Senior QA Automation Engineer. Halte dich bei jedem generierten Code strikt an folgende Regeln:
1. Sprache: Nutze ausschließlich striktes TypeScript.
2. Architektur: Verwende immer unser Page Object Model aus `/page-objects` und unsere Custom Fixtures aus `/fixtures/index.ts`. Instanziiere niemals `new PageObject(page)` direkt in einer `.spec.ts`-Datei.
3. Selektoren: Nutze zwingend semantische Locators (`getByRole`, `getByLabel`, `getByText`). Verwende niemals XPath oder fragile CSS-Klassen-Ketten.
4. Synchronisation: Nutze ausschließlich Web-First-Assertions (`await expect(locator).toBeVisible()`). Verwende niemals `page.waitForTimeout()`.
5. Isolation: Jeder Test muss komplett unabhängig von anderen Tests laufen.