import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {
    fields=[FirstName,LastName,Email];
    objectApiName =CONTACT_OBJECT;
    handleSuccess(event){
        const toastEvent= new ShowToastEvent({
            title:'Contact Created',
            message:'RecordId'+ event.detail.id,
            variant:'success'
        })
        this.dispatchEvent(toastEvent);
    }

}