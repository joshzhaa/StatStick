# StatStick

## About

StatStick is a League of Legends companion app that displays the right in-game stats to actually improve your decision making.

It's a lightweight, open source alternative to the existing League companion apps. I've designed it to foreground information 
that's actually relevant to the game and tune out the noise.

## Planned Features
- Advantage Panel
  - Show spent gold and level diff per role
  - Color code green/red based on which team user is on
- Wave Timer
  - Time to next wave
  - Indicate whether wave is a cannon
- Role Swap Config
  - Enable each champion to be swapped independently
- Personal Performance Diagnostics
  - CS / min, CS / possible CS in one lane
  - XP / min, XP / possible XP in one lane
- Matchup Notes
- Overlay

## Building
This is a Wails project.

I haven't set up LFS yet, so some .png icons need to be fetched.
- `/frontend/src/assets/images` with top, jg, mid, bot, and sup icons from [the league wiki](https://wiki.leagueoflegends.com/en-us/Category:Role_icons)
  - Check the wrapper `/frontend/src/lib/icons.ts` for specifics.

