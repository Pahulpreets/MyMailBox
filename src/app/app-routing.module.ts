import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path:'',loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)},
  {path:'',component:AppComponent,children:[
    {path:'',loadChildren: ()=>import('./main/main.module').then(m=> m.MainModule)},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
