import { Routes } from '@angular/router';
import { AboutMe } from './about-me/about-me';
import { Skills } from './skills/skills';
import { Gallerie } from './gallerie/gallerie';
import { Kontakt } from './kontakt/kontakt';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },  // Default Route
    { path: 'about', component: AboutMe },
    { path: 'skills', component: Skills},
    { path: 'galerie', component: Gallerie},
    { path: 'kontakt', component: Kontakt}
];
