import React, {PropTypes} from 'react';

class AppIntro extends React.Component {
    render() {
        return (
            <div className='row'>
                <div className="col-md-10">

                    <p className="lead">Use this app to calculate the focal length, object distance, or image distance in any thin lens system.
                To get started, select the value you are looking to calculate, enter the other two variables, and the app
                will calculate the result. For example, to calculate focal length: click "Calculate Focal Length", enter
                your desired values for "Distance to Object" and "Distance to Image", and the focal length will be calculated.</p>
                </div>
            </div>
        );
    }
}

AppIntro.propTypes = {}

export default AppIntro;
