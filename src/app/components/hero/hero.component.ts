import { Component } from "@angular/core"

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
})
export class HeroComponent {
  phoneNumber = "553138414433"

  openWhatsApp() {
    window.open(`https://wa.me/${this.phoneNumber}`, "_blank")
  }
}

