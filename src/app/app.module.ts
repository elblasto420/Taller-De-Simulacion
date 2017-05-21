import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DistribucionBinomialComponent } from './distribucion-binomial/distribucion-binomial.component';
import { DistribucionPoissonComponent } from './distribucion-poisson/distribucion-poisson.component';
import { GraficoComponent } from './grafico/grafico.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: MenuComponent,
    children: [
      { path: 'binomial', component: DistribucionBinomialComponent },
      { path: 'poisson', component: DistribucionPoissonComponent },
      { path: 'grafico', component: GraficoComponent }
    ]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DistribucionBinomialComponent,
    DistribucionPoissonComponent,
    GraficoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
