import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule } from "@angular/router"

import { AppComponent } from "./app.component"
import { HeaderComponent } from "./components/header/header.component"
import { HeroComponent } from "./components/hero/hero.component"
import { StatsComponent } from "./components/stats/stats.component"
import { AreasComponent } from "./components/areas/areas.component"
import { AboutComponent } from "./components/about/about.component"
import { TestimonialsComponent } from "./components/testimonials/testimonials.component"
import { ServicesComponent } from "./components/services/services.component"
import { ContactComponent } from "./components/contact/contact.component"
import { FooterComponent } from "./components/footer/footer.component"
import { ButtonComponent } from "./components/ui/button/button.component"
import { CardComponent } from "./components/ui/card/card.component"
import { CardHeaderComponent } from "./components/ui/card/card-header.component"
import { CardTitleComponent } from "./components/ui/card/card-title.component"
import { CardDescriptionComponent } from "./components/ui/card/card-description.component"
import { CardContentComponent } from "./components/ui/card/card-content.component"
import { CardFooterComponent } from "./components/ui/card/card-footer.component"
import { WhatsappButtonComponent } from "./components/whatsapp-button/whatsapp-button.component"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    StatsComponent,
    AreasComponent,
    AboutComponent,
    TestimonialsComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    CardHeaderComponent,
    CardTitleComponent,
    CardDescriptionComponent,
    CardContentComponent,
    CardFooterComponent,
    WhatsappButtonComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

