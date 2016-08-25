import React, {PropTypes} from 'react';
import {connect} from 'react-redux'


import UnitDisplayContainer from '../../containers/UnitDisplay'


import SolveButtonContainer from '../../containers/SolveButton'
import {setSelectedSymbol} from '../../actionCreators'



import * as actions from '../../actionCreators'


class SymbolValue extends React.Component {

    render() {
        return (
            <div className="col-md-4">
                <label>{this.props.symbolText}</label>

                <div className="input-group" style={{zIndex:1}}>
                    <input
                        className="form-control"
                        value={this.props.value}
                        disabled={this.props.isSelected}
                        onChange={this.change.bind(this)}
                    />
                    <span className="input-group-addon"><UnitDisplayContainer symbol={this.props.symbolName}/></span>
                </div>
                <div style={this.state.alertStyle} className="alert alert-danger" role="alert"><strong>Whoa!</strong> this should be a non-zero number</div>

                <SolveButtonContainer symbolName={this.props.symbolName} isSelected={this.props.isSelected} onClick={this.props.onSolveButtonClick}/>

            </div>

        )
    }

    constructor(props){
        super(props)
        this.state = {
            alertStyle: {
                transition: 'all 1s',
                overflow:'hidden',
                height:0,
                paddingTop:0,
                paddingBottom:0,
                borderWidth: 0,
                marginBottom: 0,
            }
        }
    }

    change( e ){
        const inputValue = e.target.value

        if (true ||Number.isFinite( inputValue/1 )){
            this.props.onChange( inputValue )

        }

        if(Number.isFinite( inputValue/1 ) && inputValue != 0){
            this.hideAlert(this)
        } else {
            this.showAlert()
        }
    }

    showAlert(){
        // const timeoutId = setTimeout( this.hideAlert, timeout, this )
        this.setState({
            alertStyle:{
                transition: 'all 1s',
                overflow:'hidden',
                height:60,
                marginBottom: 20,
                //marginBottom: 0
            }
        })
    }

    hideAlert( component ){
        component.setState({
            alertStyle:{
                transition: 'all 1s',
                overflow:'hidden',
                height:0,
                paddingTop:0,
                paddingBottom:0,
                borderWidth: 0,
                marginBottom: 0,

            }
        })


    }




}

SymbolValue.propTypes = {
    symbolName: PropTypes.string.isRequired,
    symbolText: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSolveButtonClick: PropTypes.func.isRequired

}

function MapStateToProps( state, ownProps ) {
    const symbolName = ownProps.symbol.symbol
    const symbolText = ownProps.symbol.text
    const selectedSymbol = state.selectedSymbol
    const isSelected = symbolName === selectedSymbol

    const symbolFunc = state.symbolMap.find( symbolObj => (symbolObj.symbol === symbolName) ).func
    const symbolVals = state.symbolVals

    let returnValue

    let calculatedValue = symbolFunc(state.symbolVals)
    let setValue = symbolVals[symbolName]

    if (isSelected){ returnValue = symbolFunc(state.symbolVals) }
    else { returnValue = symbolVals[symbolName]}

    return {
        isSelected,
        symbolName,
        symbolText,
        value: returnValue
    }
}

function MapDispatchToProps(dispatch, ownProps){
    const symbolName = ownProps.symbol.symbol



    return {
        onChange: ( value )=>{
            console.log('Setting to ' + value)
            dispatch(actions.setSymbolValue(symbolName, value ))
        },
        onSolveButtonClick: ()=>{
            dispatch( setSelectedSymbol( symbolName ) )
        }

    }
}


const SymbolValueContainer = connect(MapStateToProps, MapDispatchToProps)(SymbolValue)

SymbolValueContainer.propTypes = {
    symbol: PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}

export default SymbolValueContainer