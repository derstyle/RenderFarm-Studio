# Implementierungs- und Teststatus · Alpha 0.4

## Implementiert
- Rollenauswahl: Sender, Renderstation oder Solo; später in der App änderbar.
- Grundlegende CPU-, GPU-, RAM- und lokale Speichererkennung. VRAM ist treiberabhängig und kann fehlen.
- Lokaler Webserver, Browseroberfläche, dateibasierte Queue, Worker und Heartbeats.
- Lokale ComfyUI-Statusprüfung und optionaler Start aus einem konfigurierten Installationspfad.
- Modellkatalog für Wan 2.2 (5B/14B), SDXL und FLUX; 18+-Modelle als eigene Katalogkategorie.
- Experimenteller Wan-2.2-5B-Adapter. Video-Rückgabe wurde mit einem simulierten ComfyUI geprüft.

## Noch nicht auf realer Hardware nachgewiesen
- Erfolgreicher Wan-2.2-5B-Videorender auf RTX 5060 oder anderer realer GPU.
- Stabiler gemischter Windows-/Linux-/macOS-Farm-Betrieb über echte NAS-Verbindungen.
- Große Modelldownloads auf allen unterstützten Installationsvarianten.
- Sicherer harter Abbruch aktiver GPU-Jobs und Crash-Recovery.
- Universelle grafische native Installer ohne Voraussetzungen.

## Nicht implementiert / geplant
- Volle Funktionsübernahme aus dem alten Studio 1.8.x (Shots, Regie, Action Director).
- Authentifizierte und signierte Jobs, abgesicherte Updatepakete.
- Remote-Updates nur nach Zustimmung der jeweiligen Station.
- Projektgetrennte Lernnotizen und LoRA-Training; 18+-Trennung technisch noch nicht durchgesetzt.
- Freigegebene Wan-2.2-14B-Renderprofile und beliebige zusätzliche Videomodelle.

**Eine veröffentlichte Funktion ist erst dann praxisbestätigt, wenn sie reproduzierbar auf echter Hardware getestet wurde.**
