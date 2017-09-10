import * as ActionTypes from './action-types'

/** All action functions will be availible as props. */

export function countStuff(){
    return {
        type: ActionTypes.COUNT
    }
}