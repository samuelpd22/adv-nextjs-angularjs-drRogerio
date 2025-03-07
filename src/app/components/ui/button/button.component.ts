import { Component, Input } from "@angular/core"

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
})
export class ButtonComponent {
  @Input() variant: "default" | "outline" | "ghost" = "default"
  @Input() size: "default" | "sm" | "lg" = "default"
  @Input() class = ""
}

