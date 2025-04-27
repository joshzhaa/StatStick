import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { icon } from "@/lib/icons";

/**
 * RoleDiff records matchup advantages for each role, in levels and gold.
 * .gold and .levels are canonically blue - red differences.
 */
interface RoleDiff {
  gold: number;
  levels: number;
}

/**
  * In a normal SR game, roleDiffs.length === 5.
  */
interface AdvantagePanelProps {
  roleDiffs: RoleDiff[];
  teamBlue: boolean;
}

/**
 * AdvantagePanel shows which team has the advantage in gold or levels at any given time.
 * The display colors and the sign of the differences are green/+ for blue and red/- for red.
 */
function AdvantagePanel(props : AdvantagePanelProps) {
  const format = (diff: number) => {
    const signedDiff = props.teamBlue ? 1 : -1 * diff;
    return (signedDiff > 0 ? "+" : "") + signedDiff;
  };

  const color = (diff: number) => {
    const signedDiff = (props.teamBlue ? 1 : -1) * diff;
    if (signedDiff < 0) {
      return "text-rose-600";
    } else if (signedDiff > 0) {
      return "text-teal-700";
    } else {  // equals 0
      return "";
    }
  };

  const rows = props.roleDiffs.map((roleDiff, i) =>
      <TableRow className="h-10">
        <TableCell><img className="h-10" src={icon(i)} /></TableCell>
        <TableCell className={color(roleDiff.levels)}>{format(roleDiff.levels)}</TableCell>
        <TableCell className={color(roleDiff.gold)}>{format(roleDiff.gold)}</TableCell>
      </TableRow>
  );

  return (
    <Table className="w-[500px]">
      <TableHeader>
        <TableRow>
          <TableHead>Role</TableHead>
          <TableHead>Levels</TableHead>
          <TableHead>Gold</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows}
      </TableBody>
    </Table>
  );
}

export { AdvantagePanel };
