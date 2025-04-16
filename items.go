package main

// trinket counts as an item, so 6 + 1 = 7
const numPlayers, maxItems int = 5, 7

type ItemState struct {
	BlueItems [numPlayers][maxItems]int
	RedItems  [numPlayers][maxItems]int
}

var roleToIndex = map[string]int{
	"TOP":     0,
	"JUNGLE":  1,
	"MIDDLE":  2,
	"BOTTOM":  3,
	"UTILITY": 4,
}

// maybe, since PlayerList is a slice
func ReadItems(playerList PlayerList) *ItemState {
	var result ItemState
	for _, player := range playerList {
		// make sure to start with a new item list each time, b/c num items can decrease
		var itemIDs [maxItems]int
		// ASSUMPTION: len(player.Items) <= maxItems, will crash otherwise
		for i, item := range player.Items {
			itemIDs[i] = item.ItemID
		}
		switch player.Team {
		case "ORDER":
			copy(result.BlueItems[roleToIndex[player.Position]][:], itemIDs[:])
		case "CHAOS":
			copy(result.RedItems[roleToIndex[player.Position]][:], itemIDs[:])
		}
	}
	return &result
}
