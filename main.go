package main

import (
	"encoding/json"
	"fmt"
	"os"
	"time"
)

func fetch() (PlayerList, error) {
	var result PlayerList // initially empty list
	response, err := InsecureClient.Get("https://127.0.0.1:2999/liveclientdata/playerlist")
	if err != nil {
		return result, err
	}
	defer response.Body.Close()
	decoder := json.NewDecoder(response.Body)
	if err := decoder.Decode(&result); err != nil {
		return result, err
	}
	return result, err
}

func mock() (PlayerList, error) {
	var result PlayerList // initially empty list
	file, err := os.Open("../data/playerlist.json")
	if err != nil {
		return result, err
	}
	defer file.Close()
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&result); err != nil {
		return result, err
	}
	return result, err
}

func printAsJSON(data any) {
	bytes, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		panic(err)
	}
	fmt.Println(string(bytes))
}

func totalValue(itemDB ItemDB, itemIDs []int) float64 {
	var sum float64
	for _, id := range itemIDs {
		if id == 0 {
			continue
		}
		sum += itemDB.Cost(id)
	}
	return sum
}

func test() {
	data, err := mock()
	if err != nil {
		panic(err)
	}
	printAsJSON(data)
	items := NewItemState(data)
	for _, role := range []string{"TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"} {
		fmt.Println(items.ItemList("ORDER", role), items.ItemList("CHAOS", role))
	}
}

func ping(itemDB ItemDB) {
	for {
		time.Sleep(10 * time.Second)
		playerList, err := fetch()
		if err != nil {
			fmt.Println(err)
			continue
		}
		items := NewItemState(playerList)
		for _, role := range []string{"TOP", "JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"} {
			blueItems := items.ItemList("ORDER", role)
			redItems := items.ItemList("CHAOS", role)
			// fmt.Println(blueItems, redItems)
			fmt.Println(totalValue(itemDB, blueItems), totalValue(itemDB, redItems), blueItems, redItems)
		}
		fmt.Print("\n")
	}
}

func main() {
	itemDB, err := NewItemDB()
	if err != nil {
		panic(err)
	}
	fmt.Println(itemDB.Cost(3057))
	ping(itemDB)
}
