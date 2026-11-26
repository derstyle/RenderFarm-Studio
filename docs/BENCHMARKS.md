# Reproduzierbare GPU- und Videomodell-Benchmarks

Die Illustrationen auf der Projektseite zeigen **keine gemessenen Renderzeiten**.

## Was ein hilfreicher Test enthalten sollte
- GPU, VRAM, Notebook/Desktop und gegebenenfalls GPU-Leistungslimit.
- Betriebssystem, Treiber/Laufzeit, RAM.
- ComfyUI-Version, Modell-ID/Hash, Quantisierung und Workflow-Version.
- Auflösung, Framezahl, FPS, Sampler/Steps und freigegebenes Testmaterial.
- Kaltstart versus Warmstart, reine Generierungsdauer, Gesamtdauer, Peak-VRAM/RAM und Status.
- Sichtbare Artefakte, Bewegung, Prompt-Treue und Konsistenz – **subjektive Einschätzung** getrennt von Messwerten.

## Fair vergleichen
1. Gleiches freigegebenes Ausgangsbild und gleiche kreative Aufgabe nutzen.
2. Unterschiedliche GPUs bevorzugt mit **gleichem Modell und Workflow** vergleichen.
3. Mindestens drei Messungen; Median angeben.
4. Modellqualität und GPU-Geschwindigkeit nicht verwechseln.
5. Cloudanbieter wie Leonardo bestehen aus mehreren Modellen, nicht einer einzigen KI.

Vorlage: [benchmark-template.json](../examples/benchmark-template.json). Keine privaten Bilder, Passwörter, NAS-Adressen oder identifizierenden Logs hochladen.

**Bislang liegt kein eigener bestätigter Wan-2.2-/RTX-5060-Videobenchmark vor.**
