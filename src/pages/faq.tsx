import Breadcrumb from "../context/breadcrumb";
import FAQone from "../context/faqoiktsx";

export default function FAQ() {
  return (
    <>
      <title>Frequently Asked Questions</title>
      <link rel="canonical" href="https://asiannepalinterior.com/faq" />

      <Breadcrumb
        title="Frequently Asked Questions"
        links={[{ name: "FAQ", path: "/faq" }]}
      />

      <FAQone />
    </>
  );
}
