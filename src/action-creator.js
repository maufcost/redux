import * as actions from "./action-types";

export const addBug = description => ({
    type: actions.BUG_ADD,
    payload: {
        description
    }
})
// Or the equivalent using 'function':
// export function addBug2(description) {
//     return {
//         type: BUG_ADD,
//         payload: {
//             description
//         }
//     }
// }

export const resolveBug = id => ({
    type: actions.BUG_RESOLVE,
    payload: {
        id
    }
})