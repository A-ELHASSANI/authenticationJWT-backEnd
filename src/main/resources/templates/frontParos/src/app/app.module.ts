import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertiesComponent } from './properties/properties.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AgentDashboardComponent } from './agent-dashboard/agent-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { AgentOffersComponent } from './agent-offers/agent-offers.component';
import { RoleManageComponent } from './role-manage/role-manage.component';
import { AuthServiceService } from './services/auth-service.service';
import { PropDetaillsComponent } from './prop-detaills/prop-detaills.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PersonnalDetailsComponent } from './component/personnal-details/personnal-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    PropertiesComponent,
    AboutComponent,
    ProfileComponent,
    AgentDashboardComponent,
    AdminDashboardComponent,
    ClientHistoryComponent,
    AgentOffersComponent,
    RoleManageComponent,
    PropDetaillsComponent,
    DashboardComponent,
    PersonnalDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
