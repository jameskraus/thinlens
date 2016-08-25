import React from 'react';

import Header from '../Header'
import AppIntro from '../AppIntro'
import SymbolBodyContainer from '../../containers/SymbolBodyContainer'


class App extends React.Component {
    render() {
        return (
            <div className="container">
                    <Header/>
                    <AppIntro />
                    <SymbolBodyContainer/>
            </div>
        );
    }
}

App.propTypes = {}

export default App;