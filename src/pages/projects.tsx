import Breadcrumb from "../context/breadcrumb";
import Proj from "../context/projects";

export default function Projects() {
  return (
    <>
      <title>Projects</title>
      <link rel="canonical" href="https://asiannepalinterior.com/projects" />

      <Breadcrumb
        title="projects"
        links={[{ name: "Projects", path: "/projects" }]}
      />
      <Proj />
    </>
  );
}
