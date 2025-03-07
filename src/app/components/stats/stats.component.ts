import { Component } from "@angular/core"

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
})
export class StatsComponent {
  stats = [
    { value: "15+", label: "Anos de Experiência" },
    { value: "2500+", label: "Casos Resolvidos" },
    { value: "98%", label: "Clientes Satisfeitos" },
    { value: "20+", label: "Advogados Especializados" },
  ]
}

