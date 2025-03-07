import { Component } from "@angular/core"

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
})
export class ContactComponent {
  phoneNumber = "553138414433"

  contactInfo = [
    {
      icon: "phone",
      title: "Telefone",
      lines: ["(31) 3841-4433", "(31) 3841-4433"],
    },
    {
      icon: "mail",
      title: "E-mail",
      lines: ["contato@jurisconsulta.com.br", "atendimento@jurisconsulta.com.br"],
    },
    {
      icon: "map-pin",
      title: "Endereço",
      lines: ["Av. Paulista, 1000, Conjunto 1010", "Bela Vista, São Paulo - SP"],
    },
  ]

  openWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}`, "_blank")
  }
}

