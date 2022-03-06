import { Component, OnInit } from '@angular/core';
import { ManageService } from 'src/app/manage.service';

@Component({
  selector: 'app-preview-mail',
  templateUrl: './preview-mail.component.html',
  styleUrls: ['./preview-mail.component.css']
})
export class PreviewMailComponent implements OnInit {
  selectedMail: any = '';
  mails: any;

  constructor(
    private manageService : ManageService
  ) { }

  ngOnInit(): void {
    this.manageService.updateDataEmitter.subscribe(dt => {
      if(dt.message === "updated email data"){        
        this.selectedMail = dt.selectedMail;
        this.mails = dt.mails
      }
    })
    
  }

  deleteMail(id:any){
    this.mails.map((mail:any) => {
      if(mail.id === id){
        mail["delete"] = true;
      }
      return mail;
    });

    this.selectedMail = "";
  
    this.manageService.updateDataEmitter.emit({
      message:"delete email data",
      mails : this.mails,
    });
  }

}
