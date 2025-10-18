import Breadcrumb from "../context/breadcrumb";
import Down from "../context/download";

export default function Download() {
  return (
    <>
      <title>Download</title>
      <link rel="canonical" href="https://asiannepalinterior.com/download" />

      <Breadcrumb
        title="Download"
        links={[{ name: "Download", path: "/download" }]}
      />
      <Down />
    </>
  );
}
