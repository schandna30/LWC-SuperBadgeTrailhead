import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting ='World'
    changeHandler(event){
        this.gretting= event.target.value;
    }
}