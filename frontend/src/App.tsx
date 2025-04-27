import { Button } from "@/components/ui/button";
import { AdvantagePanel } from "@/features/advantage-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PanelsLeftBottom, SquarePen, Settings } from "lucide-react";

const mock = [
  { gold: -560, levels: 1 },
  { gold: 240, levels: -1 },
  { gold: 0, levels: 2 },
  { gold: 1000000, levels: 0 },
  { gold: -123456, levels: 8 },
];


function App() {
  return (
    <>
      <Tabs defaultValue="live-stats" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="live-stats"><PanelsLeftBottom /></TabsTrigger>
          <TabsTrigger value="matchup-notes"><SquarePen /></TabsTrigger>
          <TabsTrigger value="settings"><Settings /></TabsTrigger>
        </TabsList>
        <TabsContent value="live-stats">
          <AdvantagePanel roleDiffs={mock} teamBlue={false} />
        </TabsContent>
        <TabsContent value="matchup-notes">todo</TabsContent>
        <TabsContent value="matchup-notes">todo</TabsContent>
      </Tabs>
      <Button onClick={() => console.log("hi")}>Greet</Button>
    </>
  );
}

export default App;
