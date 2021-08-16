import { Component, OnInit } from '@angular/core';
import { Contact, PhoneType } from '../contac.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contacts: Contact[] = [];

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
