import { BehaviorSubject } from 'rxjs';
import { I_APRROVAL_ITEM } from './a-item.interface';

var callbackApply: Function = () => { };
var callbackCancel: Function = () => { };

const eventShowModal: BehaviorSubject<I_APRROVAL_ITEM | null> = new BehaviorSubject<I_APRROVAL_ITEM | null>(null);

export const AMContactService = {
    eventShowModal,
    callbackApply,
    callbackCancel
}