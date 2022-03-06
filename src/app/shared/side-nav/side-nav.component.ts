import { Component, OnInit } from '@angular/core';
import { ManageService } from 'src/app/manage.service';
import emailData from '../../email-data.json';
 

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  mails: Array<any> = emailData;
  inbox: any = 0;
  trash: any = 0;

  constructor(
    private manageService: ManageService
  ) { }

  ngOnInit(): void {
    this.manageService.updateDataEmitter.subscribe(dt => {      
        this.mails = dt.mails;
        if(dt.message === "delete email data"){
          this.mails.forEach(dt => {      
            if(dt.delete === true){
              this.trash++;
            }
            return;
          })
        }
        this.updateCount();
    });
    this.updateCount();
  }

  updateCount(){
    this.inbox = 0;    
    this.mails.forEach(dt => {
      if(dt.seen === false){
        this.inbox++;
      }
      return;
    })
  }

}
