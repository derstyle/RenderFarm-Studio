# Installation · RenderFarm Studio Unified Alpha 0.4

> Diese Anleitung beschreibt eine **experimentelle Alpha**. Ein garantiert problemloser Start auf allen Systemen ist derzeit nicht nachgewiesen.

## Voraussetzungen
- Windows, Linux oder macOS; bei den portablen Startern **Python 3.10+**.
- Für echte KI-Videoerzeugung: kompatible GPU-Treiber, lokales [ComfyUI](https://www.comfy.org/download) und passende Modelle.
- Für Mehrrechnerbetrieb: ein von jedem System bereits **gemounteter, beschreibbarer** Farm-Ordner, z. B. NAS – ausschließlich LAN oder sicheres VPN mit vertrauenswürdigen Teilnehmern.

## Windows
1. Nach Freigabe das Quell-/Installationspaket aus einem GitHub-Release herunterladen und vollständig entpacken.
2. `INSTALL_WINDOWS.cmd` starten.
3. Sender, Renderstation oder Solo wählen.
4. Zuerst einen **neuen separaten Testordner** verwenden; keine alte produktive 1.8.x-Queue überschreiben.

## Linux
- Debian, Ubuntu, Kali und Mint: sofern als Release bereitgestellt, die separate **.deb**-Datei mit der Paketverwaltung installieren. Ein Archivprogramm ist kein Installer.
- Andere Distributionen: portablen `INSTALL_LINUX.sh`-Weg benutzen; gegebenenfalls Ausführungsrecht erteilen und Python installieren.
- Ein `.deb` ist **nicht universell** für jede Linux-Distribution.

## macOS
- `INSTALL_MACOS.command` im vollständig entpackten Paket ausführen, sofern Sicherheitsrichtlinien es erlauben.
- Ein signiertes bzw. notarisiertes universelles `.dmg` ist **noch nicht vorhanden**.

## ComfyUI und Modelle
1. In Renderstation → Modelle/Installation die ComfyUI-Erreichbarkeit prüfen.
2. Wenn ComfyUI lokal installiert ist, dessen Pfad konfigurieren; optionalen Start nur für bekannte lokale Installationen aktivieren.
3. [ComfyUI offiziell installieren](https://www.comfy.org/download), wenn es fehlt.
4. Für den ersten Test ein kleines, passendes Workflowprofil nutzen, z. B. Wan 2.2 TI2V 5B; Modelldateien benötigen **viele GB** und zusätzlichen freien Speicher.
5. Modell- und Nodeprüfung durchführen, danach einen kurzen echten GPU-Test starten.
6. Test-API-Antwort oder ein `DONE`-Status allein beweisen noch **kein generiertes Video**.

**Keine unbekannten Modell- oder Node-Skripte blind ausführen.** Vorhandene alte Aufträge werden nicht automatisch migriert.
