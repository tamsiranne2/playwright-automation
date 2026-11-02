import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Das Verzeichnis, in dem deine Tests liegen
  testDir: './tests',

  // Maximale Dauer eines einzelnen Tests (z. B. 30 Sekunden)
  timeout: 30 * 1000,

  // Timeout für expect()-Befehle
  expect: {
    timeout: 5000
  },

  // Läuft parallel (true) oder sequenziell (false)
  fullyParallel: true,

  // Verhindert, dass `test.only` versehentlich im CI/CD-Server landet
  forbidOnly: !!process.env.CI,

  // Wiederholungen bei fehlgeschlagenen Tests (1x retry auf CI, 0 lokal)
  retries: process.env.CI ? 2 : 0,

  // Anzahl der parallelen Worker (auf CI optimiert, lokal nach CPU-Kernen)
  workers: process.env.CI ? 1 : undefined,

  // Reporter für die Ergebnisse (Standard-HTML und Allure für Enterprise Reporting)
  reporter: [
    ['html'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],

  // Globale Einstellungen für alle Tests
  use: {
    // Die Basis-URL deiner Anwendung (z. B. deine Live- oder Staging-Umgebung)
    baseURL: 'https://autosn.online',

    // Sammelt Traces, wenn ein Test fehlschlägt (extrem nützlich für die Fehlersuche)
    trace: 'on-first-retry',

    // Screenshots bei Fehlschlägen automatisch speichern
    screenshot: 'only-on-failure',

    // Videoaufnahme bei Fehlschlägen
    video: 'retain-on-failure',
  },

  // Konfiguration für verschiedene Browser
  projects: [
    // 1. Setup-Projekt für Authentifizierung (Speichert den Login-State)
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    // 2. Reguläre Tests, die den gespeicherten Auth-State wiederverwenden
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        // Bindet den generierten Login-State ein, damit man nicht jedes Mal neu loggen muss
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'], // Führt erst das Setup aus, dann die Tests
    },

    // Optional: Weitere Browser wie Firefox oder Safari (WebKit)
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: 'playwright/.auth/user.json' },
      dependencies: ['setup'],
    },
    */
  ],
  reporter: [
    ['html'], // Der Standard-Report
    ['allure-playwright', { outputFolder: 'allure-results' }] // Für Enterprise Reporting
  ],
});