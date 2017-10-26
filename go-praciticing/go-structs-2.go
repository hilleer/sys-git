package main

import "fmt"

type attacker struct {
	attackpower int
	dmgbonus    int
}
type sword struct {
	attacker
	twohanded bool
}
type gun struct {
	attacker
	bulletsremaining int
}

type chair struct {
	legcount int
	leather bool
}

func (s sword) Wield() bool {
	fmt.Println("You've wielded a sword!")
	return true
}
func (g gun) Wield() bool {
	fmt.Println("You've wielded a gun!")
	return true
}

func (c chair) Wield() bool {
	fmt.Printf("You've wielded a chair!! You having a bad day?")
	return true
}

type weapon interface {
	Wield() bool
}

func wielder(w weapon) bool {
	fmt.Println("Wielding...")
	return w.Wield()
}

func main() {
	sword1 := sword{attacker: attacker{attackpower: 1, dmgbonus: 5}, twohanded: true}
	sword2 := sword{attacker: attacker{attackpower: 1, dmgbonus: 5}, twohanded: false}
	gun1 := gun{attacker: attacker{attackpower: 10, dmgbonus: 20}, bulletsremaining: 11}
	fmt.Printf("Weapons: sword: %v, gun: %v\n", sword1, gun1)
	sword1.Wield()
	sword2.Wield()
	gun1.Wield()

	wielder(sword1)
	wielder(gun1)

	chair1 := chair{legcount: 3, leather: true}
	chair1.Wield()
	wielder(chair1)
}
