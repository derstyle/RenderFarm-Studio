# Mitmachen bei RenderFarm Studio 🤝

Willkommen sind **Einsteiger**, GPU-Tester, Entwickler, Designer, Übersetzer und Menschen, die technische Dokumentation verständlicher machen möchten.

Besonders hilfreich sind:
1. Reproduzierbare GPU-/Wan-/ComfyUI-Tests mit **echter** Renderzeit.
2. Anonymisierte Installationsprobleme unter Windows, Linux oder macOS.
3. UI-Verbesserungen ohne abgeschnittene Buttons oder überladene Seiten.
4. Lizenzgeprüfte ComfyUI-Workflows und verifizierte Modellquellen.
5. Tests für die Queue, Worker-Ausfälle, Speicher- und Netzwerkfehler.

## Für Entwickler
- Python **3.10+**.
- Tests nach einem Quellcode-Checkout: `python -m unittest discover -s tests -v`.
- ComfyUI für GPU-Versuche separat installieren.
- Aufträge nur in einem neuen **Testordner** anlegen.
- Fork erstellen, Änderung lokal prüfen und mit einer klaren Beschreibung einen Pull Request öffnen.

Vorhandene GPU-Treiber, NAS-Konfigurationen und Systemeinstellungen bitte nicht automatisch oder heimlich verändern. Neue Installations- und Remote-Update-Funktionen benötigen transparente Nutzerzustimmung.

## Datensicherheit
Vor Logs/Issues Benutzernamen, IPs, Netzwerkpfade und Tokens entfernen. Keine fremden Videos, private Referenzen oder Modelle ohne Weitergaberechte veröffentlichen.

[Verhaltenskodex](CODE_OF_CONDUCT.md) · [Sicherheit](SECURITY.md) · [Benchmarks](docs/BENCHMARKS.md).
