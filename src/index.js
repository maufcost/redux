import store from './store';
import {
    BUG_ADD,
    BUG_REMOVE
} from './action-types';
import { addBug, resolveBug } from './action-creator';

// console.log(store);

console.log('State 1:')
console.log(store.getState());

store.dispatch({
    type: BUG_ADD,
    payload: {
        description: 'This is the bug 1'
    }
})

console.log('State 2:')
console.log(store.getState());

store.dispatch({
    type: BUG_REMOVE,
    payload: {
        id: 1
    }
})

console.log('State 3:')
console.log(store.getState());

// Subscribing to the store. Whenever the store changes,
// we can change the UI.
const unsubscribe = store.subscribe(() => {
    console.log('Store changed!', store.getState())
});

store.dispatch({
    type: BUG_ADD,
    payload: {
        description: 'This is a new bug!'
    }
})

console.log('State 4:')
console.log(store.getState());

unsubscribe();

store.dispatch({
    type: BUG_REMOVE,
    payload: {
        id: 1
    }
})

console.log('State 5:')
console.log(store.getState());

store.dispatch(addBug('I am a fancy bug!'))

console.log('State 6:')
console.log(store.getState());

store.dispatch(resolveBug(3))

console.log('State 7:')
console.log(store.getState());