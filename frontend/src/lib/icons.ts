import Top from "@/assets/images/Top.png";
import Jungle from "@/assets/images/Jungle.png";
import Middle from "@/assets/images/Middle.png";
import Bottom from "@/assets/images/Bottom.png";
import Support from "@/assets/images/Support.png";
import None from "@/assets/images/None.png";

/**
 * Assumes i >= 0
 * @param i - index identifies which role in order, \[top, jg, mid, bot, sup\]
 */
function roleIcon(i: number): string {
  const icons = [Top, Jungle, Middle, Bottom, Support, None];
  return i < 5 ? icons[i] : icons[5];
}

export { roleIcon };
