import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MailListComponent } from './inbox/mail-list.component';
import { DraftComponent } from './draft/draft.component';
import { SentComponent } from './sent/sent.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
   {path:'',component:MainComponent,
   children:[
   {path:'',component:MailListComponent},  
   {path:'inbox',component:MailListComponent},
   {path:'draft',component:DraftComponent},
   {path:'sent',component:SentComponent},
   {path:'trash',component:TrashComponent},
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }