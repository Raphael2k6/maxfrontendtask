import {combineReducers} from 'redux'
import starWarsReducer from '../starWarsReducer'

export default combineReducers({
    starwars: starWarsReducer
}) 