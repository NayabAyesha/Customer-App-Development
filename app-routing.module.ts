import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAccessComponent } from './pages/no-access/no-access.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'customers',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard],
  },
  { path: 'no-access', component: NoAccessComponent },
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
