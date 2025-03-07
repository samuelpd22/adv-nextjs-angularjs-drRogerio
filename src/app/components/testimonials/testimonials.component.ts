import { Component } from "@angular/core"

@Component({
  selector: "app-testimonials",
  templateUrl: "./testimonials.component.html",
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: "Carlos Oliveira",
      since: "Cliente desde 2018",
      text: "O escritório Juris Consulta foi fundamental na resolução do meu processo de indenização. Profissionais extremamente competentes e atenciosos. Recomendo sem hesitar.",
    },
    {
      name: "Ana Beatriz Santos",
      since: "Cliente desde 2020",
      text: "Meu processo de divórcio foi conduzido com muita sensibilidade e profissionalismo. A equipe me manteve informada em cada etapa e conseguiu um acordo muito favorável.",
    },
    {
      name: "Roberto Mendes",
      since: "Cliente desde 2019",
      text: "Excelente assessoria na revisão de contratos da minha empresa. Identificaram cláusulas problemáticas que poderiam ter nos causado grandes prejuízos no futuro.",
    },
    {
      name: "Mariana Costa",
      since: "Cliente desde 2021",
      text: "Após tentar outros escritórios sem sucesso, encontrei no Juris Consulta a solução para meu caso de responsabilidade civil. Profissionais dedicados e resultado excelente.",
    },
  ]
}

