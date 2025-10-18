import Breadcrumb from "../context/breadcrumb";
import ContactUs from "../context/contactus";

export default function Contact() {
  return (
    <>
      <title>Contact us</title>
      <link rel="canonical" href="https://asiannepalinterior.com/contact" />

      <Breadcrumb
        title="Contact us"
        links={[{ name: "Contact us", path: "/contact" }]}
      />
      <ContactUs />
    </>
  );
}
