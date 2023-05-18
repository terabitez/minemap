import { NgtColorPipeModule, NgtCoreModule } from '@angular-three/core';
import { NgtAmbientLightModule, NgtPointLightModule } from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaLoaderModule } from '@angular-three/soba/loaders';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapViewComponent } from './map-view/map-view.component';

import {  NgtMeshModule } from '@angular-three/core/meshes';

import { NgtMeshBasicMaterialModule, NgtMeshStandardMaterialModule, NgtSpriteMaterialModule } from '@angular-three/core/materials';
import { ImageSliderModalComponent } from './image-slider-modal/image-slider-modal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth-service.service';
import { AuthGuard } from './auth-guard.guard';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    ImageSliderModalComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgtCoreModule,
    NgtSobaLoaderModule,
    NgtPrimitiveModule,
    NgtSobaOrbitControlsModule,
    NgtAmbientLightModule,
    NgtPointLightModule,

    NgtColorPipeModule,
    
    NgtMeshModule, 
    NgtMeshStandardMaterialModule, 
    NgtMeshBasicMaterialModule,
    NgtSpriteMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
