import { useState } from "react";
import "./Contact.css";
import Loading from "../Loading/Loading";

function Contact() {
  const [contactLoading, setContactLoading] = useState(true);

  return (
    <>
      {contactLoading ? (
        <Loading
          title="Contact"
          setLoading={setContactLoading}
          loading={contactLoading}
        />
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Contact;
