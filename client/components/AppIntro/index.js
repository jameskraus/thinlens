import React, {PropTypes} from 'react';

class AppIntro extends React.Component {
    render() {
        return (
                <div className="col-md-6 col-md-offset-3">

                    <p className="lead">Use this app to calculate the focal length, object distance, or image distance in any thin lens system.
                To get started, select the value you are looking to calculate, enter the other two variables, and the app
                will calculate the result. </p>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            Example
                        </div>
                        <div className="panel-body">
                            Calculate focal length: click "Calculate Focal Length" and enter
                            your desired values for "Distance to Object" and "Distance to Image"
                        </div>
                    </div>
                </div>
        );
    }
}

AppIntro.propTypes = {}

export default AppIntro;
