import Aboutone from "../context/aboutone";
import ProjectsHome from "../context/projectshome";
import ServiceHome from "../context/servicehome";
import Slideshows from "../context/slideshows";
import Testimonials from "../context/testimonials";

export default function Home() {
  return (
    <>
      <title>Home</title>
      <meta name="description" content="Welcome to the homepage!" />

      <Slideshows />
      <Aboutone />
      <ProjectsHome />
      <ServiceHome />
      <Testimonials />
    </>
  );
}
