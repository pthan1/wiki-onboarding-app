import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectCompanyComponent } from './select-company/select-company.component';
import { AnnouncementsComponent } from './announcements/announcements.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'select-company', component: SelectCompanyComponent },
  { path: 'announcements', component: AnnouncementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
