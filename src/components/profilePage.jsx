import React from 'react';
import './profilePage.css';
import InfoField from './infoField';

class ProfilePage extends React.Component {

  componentWillReceiveProps() {

  }

  render() {
    const { firstName, lastName, bio, location,
            receiveFirstName, receiveLastName,
            receiveBio, receiveLocation } = this.props;

    return (
      <div className="pf-page">
        <div className="pf-content">
          <div className="pf-img-container">
            <img src="https://www.booooooom.com/wp-content/uploads/2014/11/TP8A5250.jpg" />
          </div>
          <div className="info-fields">
            <div className="name">
              <InfoField action={ receiveFirstName } inputType="input-text" fieldType="firstName" fieldValue={ firstName }/>
              <InfoField action={ receiveLastName } inputType="input-text" fieldType="lastName" fieldValue={ lastName }/>
            </div>
            <InfoField action={ receiveLocation } inputType="input-text" fieldType="location" fieldValue={ location }/>
            <InfoField action={ receiveBio } inputType="textarea" fieldType="bio" fieldValue={ bio }/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
