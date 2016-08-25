import SymbolBody from '../../components/SymbolBody'
import {connect} from 'react-redux'

function MapStateToProps( state ){
    const {symbolMap} = state

    return {
        symbolMap
    }
}

export default connect(MapStateToProps)(SymbolBody)