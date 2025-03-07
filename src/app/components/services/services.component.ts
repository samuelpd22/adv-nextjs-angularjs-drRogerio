import { Component } from "@angular/core"

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
})
export class ServicesComponent {
  phoneNumber = "553138414433"

  services = [
    {
      title: "Consultoria Jurídica",
      price: "R$300",
      period: "/consulta",
      description: "Orientação jurídica pontual para dúvidas específicas.",
      features: ["Análise da situação", "Orientação jurídica", "Esclarecimento de dúvidas", "Relatório por escrito"],
      cta: "Agendar Consulta",
      featured: false,
    },
    {
      title: "Representação Processual",
      price: "Sob consulta",
      period: "",
      description: "Representação completa em processos judiciais.",
      features: [
        "Análise detalhada do caso",
        "Elaboração de peças processuais",
        "Acompanhamento de audiências",
        "Interposição de recursos",
        "Relatórios periódicos",
        "Atendimento prioritário",
      ],
      cta: "Solicitar Orçamento",
      featured: true,
    },
    {
      title: "Assessoria Empresarial",
      price: "R$1.500",
      period: "/mês",
      description: "Suporte jurídico contínuo para empresas.",
      features: [
        "Consultoria ilimitada",
        "Análise e elaboração de contratos",
        "Gestão de riscos jurídicos",
        "Reuniões mensais",
        "Desconto em processos judiciais",
      ],
      cta: "Contratar Serviço",
      featured: false,
    },
  ]

  openWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}`, "_blank")
  }
}

