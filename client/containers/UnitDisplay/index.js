import React, {PropTypes} from 'react';
import {connect} from 'react-redux'

class UnitDisplay extends React.Component {
    render() {
        return (
            <div>{this.props.abbreviation}</div>
        );
    }
}

UnitDisplay.propTypes = {
    abbreviation: PropTypes.string.isRequired
}

/**
 *
 * @param state
 * @param {object} state.symbolUnits
 * @param ownProps
 * @param {string} ownProps.symbol
 * @constructor
 */
function MapStateToProps(state, ownProps){
    const symbolToFind = ownProps.symbol
    const {unitAbbreviation} = state.symbolUnits.find( symbolUnit =>( symbolUnit.symbol === symbolToFind ))
    return {
        abbreviation: unitAbbreviation
    }
}

const UnitDisplayContainer = connect(MapStateToProps)(UnitDisplay);

UnitDisplayContainer.propTypes = {
    symbol: PropTypes.string.isRequired
}

export default UnitDisplayContainer;
