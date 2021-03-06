import React, {PropTypes} from 'react'

import SymbolValueContainer from '../../containers/SymbolValue'



class SymbolBody extends React.Component {
    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                {this.props.symbolMap.map( (symbol, index) => (
                    <SymbolValueContainer symbol={symbol} key={index}/>
                ))}
            </div>
        );
    }
}

SymbolBody.propTypes = {
    symbolMap: PropTypes.arrayOf(PropTypes.shape({
        symbol: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired
}

export default SymbolBody
