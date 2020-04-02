import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './componentes/test/test.component';
import { MascotaComponent } from './componentes/mascota/mascota.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
