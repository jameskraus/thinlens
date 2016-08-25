import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

import {setSelectedSymbol} from '../../actionCreators'

export class SolveButton extends React.Component {
    render() {

        const className = this.props.isSelected ? 'btn btn-info' : 'btn btn-primary'

        return (
            <button style={{
                width:'100%',
                marginTop: -5,
                paddingTop: 8
            }}
                    className={className}
                    onClick={this.props.onClick}
                    disabled={this.props.isSelected}
            >
                {this.props.buttonText}
            </button>
        );
    }
}

SolveButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
    buttonText: PropTypes.string.isRequired
}

function mapStateToProps(state, ownProps){
    const {symbolName} = ownProps
    const symbolText = state.symbolMap.find(symbolObj=>(symbolObj.symbol === symbolName)).text
    const buttonText = ownProps.isSelected ? 'Calculating ' + symbolText : 'Calculate ' + symbolText

    return {
        buttonText
    }
}

function mapDispatchToProps(dispatch, ownProps){
    const {symbolName} = ownProps

    return {
        onClick: ()=>{
            dispatch( setSelectedSymbol( symbolName ) )
        }
    }
}

const SolveButtonContainer = connect(mapStateToProps, mapDispatchToProps)(SolveButton)

SolveButtonContainer.propTypes = {
    symbolName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired
}

export default SolveButtonContainer;
