import who from '../actions/who';

export default function(state = null, action) {
    switch(action.type) {
        case who.SELECTED_BOOK:
            return action.payload;
    }    
    return state;
}