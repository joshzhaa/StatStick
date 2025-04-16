package main

import (
	"encoding/json"
	"fmt"
	"os"
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

func main() {
	data, err := mock()
	if err != nil {
		panic(err)
	}
	printAsJSON(data)
	items := ReadItems(data)
	fmt.Println(items)
}
