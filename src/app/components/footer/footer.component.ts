import { Component } from "@angular/core"

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
})
export class FooterComponent {
  currentYear = new Date().getFullYear()

  footerLinks = {
    services: [
      { label: "Direito Civil", href: "#" },
      { label: "Direito de Família", href: "#" },
      { label: "Contratos", href: "#" },
      { label: "Responsabilidade Civil", href: "#" },
    ],
    company: [
      { label: "Sobre Nós", href: "#" },
      { label: "Equipe", href: "#" },
      { label: "Carreira", href: "#" },
      { label: "Contato", href: "#" },
    ],
    resources: [
      { label: "Blog Jurídico", href: "#" },
      { label: "Artigos", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Glossário Jurídico", href: "#" },
    ],
    legal: [
      { label: "Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  }

  socialLinks = [
    { icon: "facebook", href: "#", label: "Facebook" },
    { icon: "instagram", href: "#", label: "Instagram" },
    { icon: "linkedin", href: "#", label: "LinkedIn" },
  ]
}

