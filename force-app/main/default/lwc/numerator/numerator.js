import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    _currentCount = 0;
    priorCount = 0;

    @api
    maximizeCounter() {
        this.counter += 1000000;
    }

    @api
    get counter() {
        return this._currentCount;
    }

    set counter(value) {
        this.priorCount = this._currentCount;
        this._currentCount = value;
    }

    handleIncrement() {
        this.counter++;
    }

    handleDecrement() {
        this.counter--;
    }

    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
    }
}
// //Client ID:
// 21cd1316de324574b9289d86f31c6c27 
// Client Secret:
// 8A87c9bD4a81461EB82936E402d28363