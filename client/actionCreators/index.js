export const SET_SYMBOL_VALUE = 'SET_SYMBOL_VALUE'

export function setSymbolValue( symbolName, value ){
    return {
        type: SET_SYMBOL_VALUE,
        symbolName,
        value
    }
}

export const SET_SELECTED_SYMBOL = 'SET_SELECTED_SYMBOL'

export function setSelectedSymbol(symbolName){
    return {
        type: SET_SELECTED_SYMBOL,
        symbolName
    }
}