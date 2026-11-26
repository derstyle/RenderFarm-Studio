# Sicherheit · RenderFarm Studio Alpha 0.4

## Aktuelle Vertrauensgrenze
Die Alpha nutzt derzeit eine **dateibasierte Queue** innerhalb eines vertrauenswürdigen LANs bzw. über ein abgesichertes VPN. Wer Schreibzugriff zum Farm-Ordner besitzt, kann möglicherweise Aufträge einbringen. Eine Ende-zu-Ende-Authentifizierung oder signierte Job-Dateien gibt es derzeit **nicht**.

**Nicht direkt ins öffentliche Internet stellen.** Nicht mit fremden oder unkontrollierten NAS-Freigaben verbinden.

ComfyUI und die RenderFarm-Weboberfläche sollen lokal über `127.0.0.1` angesprochen werden. Drittanbieter-ComfyUI-Nodes können ausführbaren Code enthalten – nur geprüfte Quellen installieren.

Ein aktiver ComfyUI-Render lässt sich aus der Sender-Oberfläche nicht in jedem Fall sicher hart stoppen. Verteilte Updates bleiben eine zukünftige Funktion und dürfen nur nach ausdrücklicher Stationsfreigabe ausgeführt werden.

## Niemals veröffentlichen
Passwörter, Tokens, Private Keys, NAS-Logins, Heimnetz-IP-Adressen, Privatvideos, persönliche Prompts, vollständige Debug-Logs oder Modellgewichte ohne Veröffentlichungsrecht.

## Sicherheitsprobleme melden
Unkritische Bugs gern als anonymisiertes Issue. Sicherheitslücken bitte nicht mit Exploitdetails öffentlich beschreiben. Einen privaten Meldekanal über GitHub Security Advisories verwenden, sobald er für dieses Repository verfügbar ist.

Keine heimlichen Installer, unbemerkten Fernzugriffe oder Umgehung von Bezahlschranken.
