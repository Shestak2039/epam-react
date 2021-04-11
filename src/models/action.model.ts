import { ActionTypes } from '../store/actions/action-types';

export interface ActionModel<Payload> {
    type: ActionTypes;
    payload?: Payload;
}
