package main

/*
This file defines the struct for storing the item state in the game, ItemState
It has a "getter," ItemState.ItemList(team, role string), which returns the relevant slice
It has a factory function, ReadItems, which generates a new ItemState from a PlayerList
*/

// trinket counts as an item, so 6 + 1 = 7
const numPlayers, maxItems int = 10, 7

/*
ItemState is just a thin wrapper around an array of itemIDs.
The ItemState.ItemList function knows the special meaning of the indices.
itemIDs[0:5] are blue team's items.
itemIDs[5:10] are red team's items.
Each team is ordered, top, jg, mid, bot, sup.
*/
type ItemState struct {
	itemIDs [numPlayers][maxItems]int
}

/*
maps from (team, role) to index of ItemState.itemIDs
*/
func playerIndex(team, role string) int {
	var teamOffset int
	switch team {
	case "ORDER":
		teamOffset = 0
	case "CHAOS":
		teamOffset = 5
	default:
		panic(`PlayerList.Team must be either "ORDER" or "CHAOS"`)
	}

	var roleOffset int
	switch role {
	case "TOP":
		roleOffset = 0
	case "JUNGLE":
		roleOffset = 1
	case "MIDDLE":
		roleOffset = 2
	case "BOTTOM":
		roleOffset = 3
	case "UTILITY":
		roleOffset = 4
	default:
		panic(`PlayerList.Position must be one of {"TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"}`)
	}

	return teamOffset + roleOffset
}

/*
Creates an ItemState struct by parsing the PlayerList struct
*/
func NewItemState(playerList PlayerList) *ItemState {
	// maybe since PlayerList is a slice, it doesn't get copied every function call
	var result ItemState
	for _, player := range playerList {
		items := result.itemIDs[playerIndex(player.Team, player.Position)][:maxItems]
		// make sure to start with a new item list each time, b/c num items can decrease
		for i := range items {
			items[i] = 0
		}
		// ASSUMPTION: len(player.Items) <= maxItems, will crash otherwise
		for i, item := range player.Items {
			items[i] = item.ItemID
		}
	}
	return &result
}

/*
Returns the slice of ItemState.itemIDs which corresponds to a player's items
A player is defined by the pair (team, role)
*/
func (state *ItemState) ItemList(team, role string) []int {
	return state.itemIDs[playerIndex(team, role)][:]
}
