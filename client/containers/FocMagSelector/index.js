import React, { PropTypes } from 'react';
import {connect} from 'react-redux'

import {toggleVisibleVariableMenu, selectVariable, hideVisibleVariableMenu} from '../../actionCreators'
import { FOCAL_LENGTH, MAGNIFICATION } from '../../constants'

function getButtonText( selectedVariable ){
    if (selectedVariable === FOCAL_LENGTH){
        return "Focal Length"
    } else {
        return "Magnification"
    }
}

function getMenuStyle( visibleVariableSelect ){
    return visibleVariableSelect ? {display:'initial'} : {}
}

const FocMagOptions = [
    {
        text: 'Focal Length',
        onClick: ()=>{onSelectVariable( FOCAL_LENGTH )}
    },
    {
        text: 'Magnification',
        onClick: ()=>{onSelectVariable( MAGNIFICATION )}
    }
]

const FocMagMenu = {
    menuId: 'focmag',
    options: FocMagOptions
}

class FocMagSelector extends React.Component {
    render() {
        const {onSelectVariable, onMenuClick, selectedVariable, visibleVariableSelect} = this.props
        return (
            <div className="dropdown">
                <button onClick={onMenuClick} className="btn btn-default dropdown-toggle">
                    {getButtonText(selectedVariable)} <span className="caret"></span>
                </button>
                <ul style={getMenuStyle(visibleVariableSelect)} className="dropdown-menu">
                    <li><a onClick={ ()=>{onSelectVariable( FOCAL_LENGTH )} }>Focal Length</a></li>
                    <li><a onClick={ ()=>{onSelectVariable( MAGNIFICATION )} }>Magnification</a></li>
                </ul>
            </div>
        );
    }
}

FocMagSelector.propTypes = {
    selectedVariable: PropTypes.oneOf([FOCAL_LENGTH, MAGNIFICATION]).isRequired,
    visibleVariableSelect: PropTypes.bool.isRequired,
    onMenuClick: PropTypes.func.isRequired,
    onSelectVariable: PropTypes.func.isRequired
}

function MapStateToProps( state, ownProps ){
    const selectedVariable = state.selectedVariable;
    const visibleVariableSelect = state.visibleVariableSelect;

    return {
        selectedVariable,
        visibleVariableSelect
    }
}

function MapDispatchToProps( dispatch, ownProps ){
    const onMenuClick = () => dispatch(toggleVisibleVariableMenu())
    const onSelectVariable = ( variable ) => {
        dispatch(selectVariable( variable ))
        dispatch(hideVisibleVariableMenu())
    }

    return {
        onMenuClick,
        onSelectVariable
    }
}

const container = connect(
    MapStateToProps,
    MapDispatchToProps
)(FocMagSelector)

export default container;

