import React from "react";
import ProfileDescription from "./ProfileDescription";

class Profile extends React.Component {
  render() {
    return (
      <div className="profile-div">
        <h1>Welcome to the Profile page</h1>
        <ProfileDescription name="Sanchayan" email="sanchayang98@xyz.com" />
      </div>
    );
  }
}

export default Profile;
