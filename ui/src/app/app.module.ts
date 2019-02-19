import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { appRouter } from './routes';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { adminService } from './admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ConfigurationComponent } from './configuration/configuration.component';
import { WebsettingsComponent } from './websettings/websettings.component';
import { TypeComponent } from './type/type.component';
import { FooterComponent } from './footer/footer.component';
import { AdminheadComponent } from './adminhead/adminhead.component';
import { StatusesComponent } from './statuses/statuses.component';
import { PossessionComponent } from './possession/possession.component';
import { AgeComponent } from './age/age.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { FacingComponent } from './facing/facing.component';
import { FlooringComponent } from './flooring/flooring.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { MesurementsComponent } from './mesurements/mesurements.component';
import { FurnishingComponent } from './furnishing/furnishing.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { DistrictComponent } from './district/district.component';
import { MandalComponent } from './mandal/mandal.component';
import { VillageComponent } from './village/village.component';
import { LayoutComponent } from './layout/layout.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ConfigurationComponent,
    WebsettingsComponent,
    TypeComponent,
    FooterComponent,
    AdminheadComponent,
    StatusesComponent,
    PossessionComponent,
    AgeComponent,
    AmenitiesComponent,
    FacingComponent,
    FlooringComponent,
    ParkingsComponent,
    MesurementsComponent,
    FurnishingComponent,
    CountryComponent,
    StateComponent,
    DistrictComponent,
    MandalComponent,
    VillageComponent,
    LayoutComponent,
    HeadComponent,
    MainComponent,
    HomeComponent,
    PasswordComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(appRouter),
    HttpClientModule
  ],
  providers: [adminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
