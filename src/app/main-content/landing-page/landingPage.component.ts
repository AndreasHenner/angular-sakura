import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
    selector: 'app-landingPage',   // wird benutzt um es in anderen html aufzurufen- also ein html-Tag <html>
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section id="nav" class="fontRaleway">
           <div><app-navbar></app-navbar></div>
           <h1>SAKURA RAMEN</h1>
           <h2>BEST RAMEN IN TOWN</h2>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPageComponent {} // export = die Klasse ist überall zugänglich