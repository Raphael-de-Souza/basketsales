import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@app/modules/products/page/products/products.component';
import { LoginComponent } from '@app/modules/auth/page/login/login.component';
import { RegisterComponent } from '@app/modules/auth/page/register/register.component';

import { AuthGuard } from '@app/core/guard/auth.guard';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    },
    {
      path: 'products',
      // canActivate: [AuthGuard],
      component: ProductsComponent,
      data: { title: 'List of Products' }
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login' }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: { title: 'Register' }
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
