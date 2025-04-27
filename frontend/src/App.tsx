import { Button } from "@/components/ui/button";
import { AdvantagePanel } from "@/features/advantage-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <AdvantagePanel roleDiffs={mock} teamBlue={false} />
        </TabsContent>
        <TabsContent value="password">
          Change your password here.
        </TabsContent>
      </Tabs>
      <Button onClick={() => console.log('hi')}>Greet</Button>
    </>
  );
}

export default App;
