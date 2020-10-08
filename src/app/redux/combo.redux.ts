import * as fromCombo from './actions/combo.action.redux'

export function contadorRedux(state: string = '', action: fromCombo.actions) {
    switch(action.type){
        case fromCombo.sendVariable:
            return state = action.payload;
        default:
            return state
    }
}