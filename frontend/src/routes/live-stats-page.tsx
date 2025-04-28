import { AdvantagePanel } from "@/features/advantage-panel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mock = [
  { gold: -560, levels: 1 },
  { gold: 240, levels: -1 },
  { gold: 0, levels: 2 },
  { gold: 1000000, levels: 0 },
  { gold: -123456, levels: 8 },
];

function LiveStatsPage() {
  return (
    <div className="h-full grid content-center">
      <div className="grid justify-items-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col asdf">
                <AdvantagePanel roleDiffs={mock} teamBlue={true} />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>Wave Timer</div>
            </CarouselItem>
            <CarouselItem>
              <div>Personal Performance</div>
            </CarouselItem>
            <CarouselItem>
              <div>Role Swap</div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export { LiveStatsPage };
