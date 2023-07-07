import React from "react";

function ProfileHeader() {
  return (
    <div className="header-container bg-gray-50">
      <div className="header py-8">
        <h3 className="text-3xl uppercase font-bold">My Profile</h3>
        <p className="text-sm">
          You can update some of your profile information here.
        </p>
      </div>
    </div>
  );
}

export default ProfileHeader;
