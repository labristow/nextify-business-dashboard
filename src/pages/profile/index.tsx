
import ContactDetails from "@/layouts/profile/ContactDetails";
import ProfileHeader from "@/layouts/profile/Header";
import React from "react";

function Index() {
  return (
    <div className="w-full slide-up px-6 md:px-0">
      <ProfileHeader />
      <ContactDetails />
    </div>
  );
}

export default Index;
