import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoComponent } from "./listado/listado.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes = [
    { path: '', component: LoginComponent },
    { path: 'listado', component: ListadoComponent },
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RouteModule{}