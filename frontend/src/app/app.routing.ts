import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@app/modules/products/page/products/products.component';
import { CartComponent } from '@app/modules/cart/page/cart/cart.component'
import { LoginComponent } from '@app/modules/auth/page/login/login.component';
import { RegisterComponent } from '@app/modules/auth/page/register/register.component';
import { AdminComponent } from '@app/modules/admin/page/admin/admin.component'
import { Role } from '@app/data/schema'
import { AuthGuard } from '@app/core/guard/auth.guard';
		
const routes: Routes = [
    {
      path: '',
      redirectTo: 'products',
      pathMatch: 'full'
    },
    {
      path: 'products',
      component: ProductsComponent,
      data: { title: 'List of Products' }
    },
	{
      path: 'cart',
      component: CartComponent,
	  canActivate: [AuthGuard],
      data: { title: 'Products in Cart' }
    },
	{
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        //data: { roles: [Role.Admin] }
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
    },
	{
      path: '**',
      redirectTo: 'products',
      pathMatch: 'full'
    },
  ];

export const appRoutingModule = RouterModule.forRoot(routes);

//@NgModule({
//  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
//  exports: [RouterModule]
//})
//export class AppRoutingModule { }
