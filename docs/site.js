(() => {
  "use strict";
  const tiers = {
    small: { title: "Kleine GPU · 6–8 GB VRAM", detail: "Sparsame Modelle und kurze Videos sind ein sinnvoller Einstieg. RAM-Offloading kann die Laufzeit verlängern, muss aber bei gleichen Modellparametern nicht automatisch die Ausgabequalität verschlechtern." },
    medium: { title: "Mittelklasse · 12–16 GB VRAM", detail: "Mehr Spielraum für Modellvarianten, Auflösung und Arbeitsspeicher. Große 14B-Video-Checkpoints passen nicht zwingend komplett in diese GPUs." },
    large: { title: "Große GPU · 24+ GB VRAM", detail: "Größere Modelle, mehr Auflösungsoptionen und weniger Offloading werden möglich. Mehr VRAM allein macht denselben Workflow nicht automatisch qualitativ besser." }
  };
  for (const button of document.querySelectorAll("[data-tier]")) {
    button.addEventListener("click", () => {
      const tier = tiers[button.dataset.tier];
      if (!tier) return;
      document.querySelector("#tier-title").textContent = tier.title;
      document.querySelector("#tier-detail").textContent = tier.detail;
      for (const other of document.querySelectorAll("[data-tier]")) {
        const selected = other === button;
        other.classList.toggle("active", selected);
        other.setAttribute("aria-pressed", String(selected));
      }
    });
  }
})();
