package list

import (
	"fmt"
	"strconv"
)

func WinnerPairOfCards(player1 []string, player2 []string) string {
	// numPower := []string{"2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"}
	p1Map := make(map[string]int) //key:数字, value:枚数
	for _, card := range player1 {
		p1Map[string(card[1])]++
	}
	p2Map := make(map[string]int)
	for _, card := range player2 {
		p2Map[string(card[1])]++
	}
	p1Rank := make(map[int][]int) //key:枚数, value:[数字]
	for i := 1; i <= 13; i++ {
		p1Rank[p1Map[strconv.Itoa(i)]] = append(p1Rank[p1Map[strconv.Itoa(i)]], i)
	}
	p2Rank := make(map[int][]int)
	for i := 1; i <= 13; i++ {
		p2Rank[p2Map[strconv.Itoa(i)]] = append(p2Rank[p2Map[strconv.Itoa(i)]], i)
	}
	var p1Ranks []int
	for k := range p1Rank {
		p1Ranks = append(p1Ranks, k)
	}

	fmt.Println(p1Ranks)

	return "hoge"
	// p2Rank := make(map[int]int)

	//枚数が多い順にソート
	// for _, power := range numPower {
	// 	if p1Map[power] > p2Map[power] {
	// 		return "player1"
	// 	} else if p1Map[power] < p2Map[power] {
	// 		return "player3"
	// 	}
	// }
	// return "Draw"

}
