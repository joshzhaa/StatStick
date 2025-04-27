import { Button } from "@/components/ui/button";
import { AdvantagePanel } from "@/features/advantage-panel";

const mock = [
  {gold: -560, levels: 1},
  {gold: 240, levels: -1},
  {gold: 0, levels: 2},
  {gold: 1000000, levels: 0},
  {gold: -123456, levels: 8},
];

function App() {
  return (
    <>
      <AdvantagePanel roleDiffs={mock} teamBlue={false} />
      <Button onClick={() => console.log('hi')}>Greet</Button>
    </>
  );
}

export default App;
