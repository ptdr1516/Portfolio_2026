import ScrollyCanvas from "@/components/ScrollyCanvas";
import ProjectsGrid from "@/components/ProjectsGrid";
import TechStack from "@/components/TechStack";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#121212] selection:bg-[#00ff88]/30">
      <ScrollyCanvas />
      <ProjectsGrid />
      <TechStack />
      <CurrentlyBuilding />
    </main>
  );
}
