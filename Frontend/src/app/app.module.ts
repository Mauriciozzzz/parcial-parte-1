import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VistaComponent } from './Vista/vista.component';
import { AllCarroComponent } from './View/carro/all-carro.component';
import { CreateCarroComponent } from './View/carro/create-carro.component';
import { UpdateCarroComponent } from './View/carro/update-carro.component';
import { AllCategoriaComponent } from './View/categoria/all-categoria.component';
import { UpdateCategoriaComponent } from './View/categoria/update-categoria.component';
import { CreateCategoriaComponent } from './View/categoria/create-categoria.component';


@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    AllCarroComponent,
    CreateCarroComponent,
    UpdateCarroComponent,
    AllCategoriaComponent,
    UpdateCategoriaComponent,
    CreateCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}