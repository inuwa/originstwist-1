import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GivingBackComponent } from './pages/giving-back/giving-back.component';
import { OurProductComponent} from './pages/our-product/our-product.component';
import { ProductsComponent } from './pages/products/products.component';
const appRoutes = [
  // {
  //   path: '',
  //   component: AuthComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'admin-portal' ,component: AdminMainComponent,
  //   children: [
  //     { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  //     { path: 'dashboard', component: AdminDashboardComponent },
  //     { path: 'user', component: AdminUserComponent },
  //     { path: 'role', component: AdminRoleComponent },
  //     { path: 'rule', component: AdminRuleComponent }
  //   ]
  // }
  {
    path: 'about-us',
    component: AboutUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'giving-back',
    component: GivingBackComponent,
    pathMatch: 'full'
  },
  {
    path: 'our-product',
    component: OurProductComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
    pathMatch: 'full'
  }
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
