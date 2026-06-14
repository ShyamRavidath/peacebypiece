import { Hero } from "@/components/home/hero";
import {
  Pillars,
  MissionSplit,
  LevelsBand,
  ImpactTeaser,
} from "@/components/home/sections";
import { CtaBand } from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <MissionSplit />
      <LevelsBand />
      <ImpactTeaser />
      <CtaBand />
    </>
  );
}
