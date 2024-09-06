import { Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { CurrencyComponent } from './pages/currency/currency.component';
import { AccountComponent } from './pages/account/account.component';
import { OperationComponent } from './pages/operation/operation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: "register", 
        component:RegisterComponent
    },
    {
        path: "login", 
        component: LoginComponent
    },
    {
        path: "dashboard", 
        component: DashboardComponent
    },
    {
        path: "currency", 
        component: CurrencyComponent
    },
    {
        path: "account", 
        component: AccountComponent
    },
    {
        path: "operation", 
        component: OperationComponent
    },
];
