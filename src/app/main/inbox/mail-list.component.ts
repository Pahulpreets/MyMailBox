import { Component, OnInit } from '@angular/core';
import emailData from '../../email-data.json';
import { ManageService } from 'src/app/manage.service';

@Component({
  selector: 'app-mail-list',
  templateUrl: './mail-list.component.html',
  styleUrls: ['./mail-list.component.css']
})
export class MailListComponent implements OnInit {
  emails: Array<any> = emailData;  
  selectedMailId: any;
  constructor(
  private manageService : ManageService
  ) { }

  ngOnInit(): void {
    this.manageService.updateDataEmitter.subscribe(dt => {
      if(dt.message === "delete email data"){
        this.emails = [];
        dt.mails.map((mail:any) => {
          if(mail.delete === false){
            this.emails.push(mail) 
          }
        })
      }      
    });
  }

  onSelect(dt:any){
    this.selectedMailId = dt.id;
    this.emails.map(mail => {
      if(mail.id === dt.id){
        mail["seen"] = true;
      }
      return mail;
    });
  
    this.manageService.updateDataEmitter.emit({
      message:"updated email data",
      mails : this.emails,
      selectedMail : dt
    });
  }

}
