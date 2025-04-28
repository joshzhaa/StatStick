import { AdvantagePanel } from "@/features/advantage-panel";

const mock = [
  { gold: -560, levels: 1 },
  { gold: 240, levels: -1 },
  { gold: 0, levels: 2 },
  { gold: 1000000, levels: 0 },
  { gold: -123456, levels: 8 },
];

function LiveStatsPage() {
  return <AdvantagePanel roleDiffs={mock} teamBlue={true} />;
}

export { LiveStatsPage };
