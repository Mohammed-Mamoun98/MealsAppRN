import {createStore , combineReducers} from 'redux'
import {MealsRed} from './reducers/meals'
import Meals from '../../data/Meals'

const rootReducer = combineReducers({
    Meals : MealsRed
})

export const store = createStore(rootReducer)