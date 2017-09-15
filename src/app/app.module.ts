import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpComponent } from './components/help/help.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PolicyComponent } from './components/policy/policy.component';
import { TermsComponent } from './components/terms/terms.component';

import { NinDirective } from './directives/nin/nin.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HelpComponent,
    CookiesComponent,
    PolicyComponent,
    TermsComponent,
    NinDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
