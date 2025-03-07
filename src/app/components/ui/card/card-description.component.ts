import { Component, Input } from "@angular/core"

@Component({
  selector: "app-card-description",
  templateUrl: "./card-description.component.html",
})
export class CardDescriptionComponent {
  @Input() class = ""
}

