import React from 'react';

class NumberInput extends React.Component {
    render() {
        return (
            <div>
                <input type="number" defaultValue={this.props.inputValue} onChange={this.props.onChange}/>
            </div>
        );
    }
}

NumberInput.propTypes = {
    inputValue: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default NumberInput;
