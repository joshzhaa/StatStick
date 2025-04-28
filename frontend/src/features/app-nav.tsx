import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { NavLink } from "react-router";
import { PanelsLeftBottom, SquarePen, Settings } from "lucide-react";

function AppNav() {
  return (
    <aside className="flex flex-col bg-sidebar-primary text-sidebar-primary-foreground w-1/12 h-screen fixed">
      <ToggleGroup type="single" className="flex-col w-full m-auto">
        <NavLink to="/live-stats">
          <ToggleGroupItem value="live-stats" className="w-full p-1">
            <PanelsLeftBottom className="size-full" />
          </ToggleGroupItem>
        </NavLink>
        <NavLink to="/matchup-notes">
          <ToggleGroupItem value="matchup-notes" className="mt-8 mb-8 p-1">
            <SquarePen className="size-full" />
          </ToggleGroupItem>
        </NavLink>
        <NavLink to="/settings">
          <ToggleGroupItem value="settings" className="p-1">
            <Settings className="size-full" />
          </ToggleGroupItem>
        </NavLink>
      </ToggleGroup>
    </aside>
  );
}

export { AppNav };
