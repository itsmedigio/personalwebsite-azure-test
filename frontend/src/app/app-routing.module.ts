import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorciboComponent } from './editorcibo/editorcibo.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { RimuoviciboComponent } from './rimuovicibo/rimuovicibo.component';
import { SplashscreenComponent } from './splashscreen/splashscreen.component';

const routes: Routes = [
    { path: '', component: SplashscreenComponent },
    { path: 'dashboard', component: SplashscreenComponent },
    { path: 'cosasimangia', component: MenuitemComponent},
    { path: 'nuovocibo', component: EditorciboComponent},
    { path: 'eliminacibo', component: RimuoviciboComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
