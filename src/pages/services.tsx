import Breadcrumb from "../context/breadcrumb";
import Service from "../context/service";

export default function Services() {
  return (
    <>
      <title>Services</title>
      <link rel="canonical" href="https://asiannepalinterior.com/services" />

      <Breadcrumb
        title="Services"
        links={[{ name: "Services", path: "/services" }]}
      />
      <Service />
    </>
  );
}
