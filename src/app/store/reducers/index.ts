import { combineReducers } from 'redux'

import vote from './reducerVotes'


const rootReducers = combineReducers({
    vote
})

export type RootState = ReturnType<typeof rootReducers>
export default rootReducers
