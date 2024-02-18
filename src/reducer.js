import {
    BUG_ADD,
    BUG_REMOVE,
    BUG_RESOLVE
} from './action-types';
// or (in case we have a bunch of action types):
import * as actions from './action-types';

// Our store is just an array: []

let lastId = 0

// When we start our application, Redux
// is going to call this reducer. Redux
// will send a value of 'undefined' to 
// the initial state, BUT we're resetting
// the initial state to be [] below.

// Params: current state and an action.
// Returns: the new state based on the action parameter.
export default function reducer(state=[], action) {
    // We can also use a switch here (which I'd prefer)
    if (action.type === BUG_ADD) {
        return [
            // The current bugs
            ...state,

            // The new bug
            {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    }else if (action.type === BUG_REMOVE) {
        // Return an updated array with all the bugs excluding the bug we
        // just removed.
        return state.filter(bug => bug.id !== action.payload.id)
    }else if (action.type === BUG_RESOLVE) {
        return state.map(bug => (bug.id !== action.payload.id) ? bug : { ...bug, resolved: true})

        // Same thing, but easier to read:
        return state.map(bug => {
            if (bug.id !== action.payload.id) return bug
            return { ...bug, resolved: true}
        })
    }

    // If an action that doesn't exist is ever dispatched,
    // let's just return the current store so that our system
    // doesn't blow up if none of the if statements above 
    // are executed.
    return state;
}