import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Benefits from "@/components/Benefits";
import ManufacturingProcess from "@/components/ManufacturingProcess";

export default function Home() {
  return (
    <main>
      <Hero />

      <CategoryGrid />

      <Benefits />

      <ManufacturingProcess />
    </main>
  );
}