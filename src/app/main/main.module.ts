import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MainComponent  } from './main.component';
import { MainRoutingModule } from './main-routing.module'
import { SideNavComponent } from '../shared/side-nav/side-nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MailListComponent } from './inbox/mail-list.component';
import { PreviewMailComponent } from '../shared/preview-mail/preview-mail.component';
import { SentComponent } from './sent/sent.component';
import { DraftComponent } from './draft/draft.component';
import { TrashComponent } from './trash/trash.component';


@NgModule({
  declarations: [
    MainComponent,
    SideNavComponent,
    FooterComponent,
    MailListComponent,
    PreviewMailComponent,
    SentComponent,
    DraftComponent,
    TrashComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule { }
