import { Component } from "@angular/core"

@Component({
  selector: "app-areas",
  templateUrl: "./areas.component.html",
})
export class AreasComponent {
  areas = [
    {
      icon: "file-text",
      title: "Contratos e Obrigações",
      description: "Elaboração, análise e revisão de contratos civis e comerciais.",
      content: "Assessoria completa em contratos de compra e venda, locação, prestação de serviços e muito mais.",
    },
    {
      icon: "users",
      title: "Direito de Família",
      description: "Divórcio, pensão alimentícia, guarda de filhos e partilha de bens.",
      content: "Atuamos com sensibilidade e eficiência em questões familiares, buscando sempre a melhor solução.",
    },
    {
      icon: "shield",
      title: "Responsabilidade Civil",
      description: "Indenizações por danos morais, materiais e estéticos.",
      content: "Defendemos seus direitos em casos de acidentes, erro médico, relações de consumo e outras situações.",
    },
    {
      icon: "gavel",
      title: "Contencioso Cível",
      description: "Representação em processos judiciais e extrajudiciais.",
      content:
        "Atuamos em todas as instâncias judiciais, com estratégias personalizadas para cada caso. Nossa equipe possui ampla experiência em litígios complexos e mediação de conflitos.",
      fullWidth: true,
    },
  ]
}

