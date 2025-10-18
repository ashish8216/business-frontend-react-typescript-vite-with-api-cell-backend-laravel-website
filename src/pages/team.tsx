import Breadcrumb from "../context/breadcrumb";
import Teams from "../context/teams";

export default function Team() {
  return (
    <>
      <title>Team</title>
      <link rel="canonical" href="https://asiannepalinterior.com/team" />

      <Breadcrumb title="Team" links={[{ name: "Team", path: "/team" }]} />
      <Teams />
    </>
  );
}
