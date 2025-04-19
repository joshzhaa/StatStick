/*
Read data from datadragon
*/
package main

import (
	"encoding/json"
	"os"
	"strconv"
)

func ReadJSON(filepath string) (any, error) {
	var result any
	file, err := os.Open(filepath)
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

type ItemDB struct {
	itemJSON any
}

/*
* This function knows where to look for the item.json in datadragon
*/
func NewItemDB() (ItemDB, error){
	data, err := ReadJSON("../dragon/item.json")
	if err != nil {
		return ItemDB{data}, err
	}
	return ItemDB{data}, err
}

func(db *ItemDB) Cost(itemID int) float64 {
	return db.itemJSON.(map[string]any)["data"].(map[string]any)[strconv.Itoa(itemID)].(map[string]any)["gold"].(map[string]any)["total"].(float64)
}
