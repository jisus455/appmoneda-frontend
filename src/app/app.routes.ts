import { Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { HomeComponent } from './pages/home/home.component';
import { CurrencyComponent } from './pages/currency/currency.component';
import { AccountComponent } from './pages/account/account.component';
import { OperationComponent } from './pages/operation/operation.component';

export const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "register", component:RegisterComponent},
    {path: "login", component: LoginComponent},

    {path: "home", component: HomeComponent},
    {path: "currency", component: CurrencyComponent},
    {path: "account", component: AccountComponent},
    {path: "operation", component: OperationComponent},
];
