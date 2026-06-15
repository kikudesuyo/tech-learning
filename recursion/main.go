package main

import (
	"fmt"

	"gihub.com/kikudesuyo/recursion/intermediate/list"
)

func main() {
	ans := list.WinnerPairOfCards([]string{"H2", "H3", "H4", "H5", "H6"}, []string{"H2", "H3", "H4", "H5", "H6"})
	fmt.Println(ans)
}
