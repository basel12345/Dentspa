import { Contact } from './../interfaces/contact';
import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Injectable()
export class ContactResolver implements Resolve<Contact> {
  constructor(private service: ContactService) {}

  resolve() {
    return this.service.getAllContact();
  }
}
