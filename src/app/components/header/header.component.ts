import { Component } from "@angular/core"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  phoneNumber = "553138414433"

  navItems = [
    { href: "#areas", label: "Áreas de Atuação" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ]

  openWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}`, "_blank")
  }
}

