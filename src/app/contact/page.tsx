import Breadcrumb from "@/components/Common/Breadcrumb";
import Teams from "@/components/Teams";


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Engineering Company | Engineering Company",
  description: "This is Team Engineering Company ",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Team Engineering Company"
        description=""
      />

      <Teams/>
    </>
  );
};

export default ContactPage;
