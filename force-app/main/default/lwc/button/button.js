import { api, LightningElement } from 'lwc';

export default class Button extends LightningElement {
    @ api label;
    @api icon;
    handleButton(evennt){
        this.dispatchEvent(new CustomEvent('buttonclick',{
            bubbles:true
        }));
    }
}