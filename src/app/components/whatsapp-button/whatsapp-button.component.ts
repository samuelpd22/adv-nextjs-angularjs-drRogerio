import { Component } from "@angular/core"

@Component({
  selector: "app-whatsapp-button",
  templateUrl: "./whatsapp-button.component.html",
  styleUrls: ["./whatsapp-button.component.css"],
})
export class WhatsappButtonComponent {
  phoneNumber = "553138414433"

  openWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}`, "_blank")
  }
}

