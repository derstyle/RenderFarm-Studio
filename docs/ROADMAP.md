# RenderFarm Studio · Entwickler-Taskliste

**Stand: 26.11.2026 · Unified Alpha 0.6 RC2 lokal verfügbar · noch kein validiertes Produktionsrelease**

## Nächster Meilenstein: gemeinsame Farm und Community

| Prio | Aufgabe | GitHub | Stand |
|---|---|---|---|
| P0 | Echter Wan-2.2-5B-GPU-Videotest | [#1](https://github.com/derstyle/RenderFarm-Studio/issues/1) | Noch ausstehend |
| P0 | Installation unter Linux, Windows und macOS prüfen | [#2](https://github.com/derstyle/RenderFarm-Studio/issues/2) | Softwaretests, Praxistest unvollständig |
| P0 | Windows↔Linux über denselben NAS-Farmordner | [#7](https://github.com/derstyle/RenderFarm-Studio/issues/7) | Noch nicht bestätigt |
| P1 | Farm-Cockpit mit Online/Busy/Renderbereit/Offline | [#4](https://github.com/derstyle/RenderFarm-Studio/issues/4) | Heartbeat und einfache Liste vorhanden, Feinstatus fehlt |
| P1 | Sicheres Ausklinken, Pausieren, Wiederverbinden | [#6](https://github.com/derstyle/RenderFarm-Studio/issues/6) | Geplant |
| P1 | Kompakter Farm-Chat für verbundene PCs | [#5](https://github.com/derstyle/RenderFarm-Studio/issues/5) | Geplant |
| P1 | Queue-Sicherheit, Jobabbruch, Update-Zustimmung | [#3](https://github.com/derstyle/RenderFarm-Studio/issues/3) | Geplant |

## Danach: besseres Produkt

- [ ] Vollständige Shots-/Regie-/Action-Director-Funktionen aus Studio 1.8.x übernehmen
- [ ] Benutzerfreundliche Installer für Windows/Linux/macOS mit Desktop-Icon-Option
- [ ] Modellquelle und GPU-Kompatibilität direkt pro Station prüfen
- [ ] NAS, Cloud-Export und lokale Modellcaches sauber trennen
- [ ] Zustimmungsbasierte signierte Updateangebote pro Station
- [ ] Projektweise isoliertes Korrekturgedächtnis – keine Übernahme zwischen Projekten
- [ ] Optionales LoRA-Training erst nach realistischen Hardwaretests

## Begriffe, die nicht verwechselt werden dürfen

- **Online:** Frischer Worker-Heartbeat, nicht bloß NAS-Zugriff.
- **Verbunden:** Gleicher Farmordner und kompatibles Queue-Protokoll.
- **Renderbereit:** Worker läuft, ComfyUI/Profil/Modell technisch bereit und keine Sperre.
- **Test erfolgreich:** Ein NAS-Textbericht ist kein Videorender.

**Keine produktive Queue ohne getestete Versionskompatibilität migrieren.** `1.8.x` und Unified Alpha werden getrennt betrieben. GitHub Projects ist unser Aufgabenboard; beim manuellen Hinzufügen von Issues zum Board bleiben die Issues selbst die Datenquelle.

## Community-Farm-Lobby · spätere Ausbaustufe

- [ ] [#8](https://github.com/derstyle/RenderFarm-Studio/issues/8): Öffentliche/private Farmen wie Gaming-Server entdecken, Farm-Profile und Einladungen.
- [ ] Standardmäßig private Farm, Beitritt nur mit ausdrücklicher Zustimmung, getrennte Projekte und Rechte.
- [ ] Online-Verzeichnis und Renderzugriff strikt trennen; kein direktes Öffnen von NAS-/ComfyUI-Zugängen ins Internet.
- [ ] Premium-UI erhalten: eigener Lobby-Bereich statt Überladung der bestehenden Seiten.
- [ ] Erst nach sicherer Authentifizierung, Relay und Freigabemechanismus fremdes Remote-Rendering.

## Benutzerkonten und Anmeldung

- [x] [#9](https://github.com/derstyle/RenderFarm-Studio/issues/9): Lokales Offline-Profil und „Angemeldet bleiben“ im Alpha-0.8-Testpaket umgesetzt.
- [ ] Google OAuth Desktop-App für Dampfrad Labs registrieren/verifizieren und Ende-zu-Ende testen.
- [ ] Apple Login über sichere HTTPS-Rückrufadresse und registrierte Services ID implementieren.
- [ ] Optional GitHub Login hinzufügen.
- [ ] Verifizierte Nutzerkonten **nicht** mit Renderfarm-Berechtigungen verwechseln; öffentliche Farmen brauchen getrennte Rollen-/Einwilligungsprüfung.

## Dienststeuerung / zuverlässige Updates

- [x] [#10](https://github.com/derstyle/RenderFarm-Studio/issues/10): In lokal gebauter Alpha 0.8.4 geordneten App-Stopp, Windows-Startmenü-Stopp und tokenbasierte Updateübergabe implementiert.
- [x] 51 Softwaretests sowie lokaler Start-/Stopp-/Neustart-/Updater-Test bestanden.
- [ ] Einmaligen 0.8.3-zu-0.8.4-Übergang auf Windows praktisch validieren.
- [ ] Ab 0.8.4 automatische sichere Updateübergabe auf Windows, Linux und macOS praktisch validieren.
- [ ] Aktive GPU-Aufträge, ComfyUI-Fremdnutzung und NAS-Ausfälle auf realer Hardware testen.
