import { combineReducers } from 'redux'

import * as actions  from '../actionCreators'

import {FOCAL_LENGTH, MAGNIFICATION} from '../constants'


const defaultSymbols = [
    {
        symbol: 'focalLength',
        text: 'Focal Length',
        func: ({dObj, dImg}) => (1/(1/dObj + 1/dImg))
    },
    {
        symbol: 'dObj',
        text: 'Distance to Object',
        func: ({focalLength, dImg}) => (1/(1/focalLength - 1/dImg))
    },
    {
        symbol: 'dImg',
        text: 'Distance to Image',
        func: ({focalLength, dObj}) => (1/(1/focalLength - 1/dObj))
    }
]

const defaultValues = {
    focalLength: -0.5,
    dObj: 1,
    dImg: -1/3
}

const defaultSelectedSymbol = 'dImg'


const defaultUnits = [
    {
        abbreviation: 'm',
        multiplier: Math.pow(10, 0)
    },
    {
        abbreviation: 'cm',
        multiplier: Math.pow(10, -2)
    }
]

const defaultSymbolUnits = [
    {
        symbol: 'focalLength',
        unitAbbreviation: 'cm'
    },
    {
        symbol: 'dObj',
        unitAbbreviation: 'cm'
    },
    {
        symbol: 'dImg',
        unitAbbreviation: 'cm'
    },
]

function symbolMap( state = defaultSymbols ){
    return state;
}

function units( state = defaultUnits ){
    return state;
}

function symbolUnits( state = defaultSymbolUnits ){
    return state;
}

function symbolVals ( state = defaultValues, action ){
    if (action.type === actions.SET_SYMBOL_VALUE){

        const newSymbolVal = {}
        newSymbolVal[action.symbolName] = (action.value)

        return {
            ...state,
            ...newSymbolVal
        }
    }
    return state;
}

function selectedSymbol ( state = defaultSelectedSymbol, action ){
    if (action.type === actions.SET_SELECTED_SYMBOL){
        return action.symbolName
    }
    return state;
}

const rootReducer = combineReducers(
    {
        symbolMap,
        units,
        symbolUnits,
        selectedSymbol,
        symbolVals

    }
)

export default rootReducer