//If an alien has 2 antennae, it comes from either Planet1 or Planet2:
//	If it has 2 arms, it comes from Planet1
//	If it has 4 arms, it comes from Planet2
//If an alien has stripes, it comes from either Planet3 or Planet4:
//	If it has 3 eyes, it comes from Planet3
//	If it has 2 eyes, it comes from Planet4
//If an alien is dotted, it comes from either Planet1 or Planet4:
//	If it has 6 legs, it comes from Planet1
//	If it has no legs, it comes from Planet4
exp_set = [
	// Planet 1: 2 antennae, 2 arms, no pattern OR Points and 6 legs
	// Test memory: 2 antennae, 2 arms, no pattern, not no legs, not 6 legs
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_2",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "test_memory_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_4",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "test_memory_p1"
	},
	// Test learning: Points, 6 legs, not 2 antennae, not 2 arms, not 4 arms
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Points",
		"Correct" : "1",
		"ItemType" : "test_learning_p1"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Points",
		"Correct" : "1",
		"ItemType" : "test_learning_p1"
	},
	// Test upper bound: Points, 6 legs, 2 antennae, 2 arms
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Points",
		"Correct" : "1",
		"ItemType" : "upper_bound_p1"
	},
	// Test interference old: 2 Ant, 2 arms, no dots/stripes no legs
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "interference_old_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "interference_old_p1"
	},
	// Test interference new: Dots, 2 arms, 6 legs (not 2 antennae)
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Points",
		"Correct" : "1",
		"ItemType" : "interference_new_p1"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Points",
		"Correct" : "1",
		"ItemType" : "interference_new_p1"
	},
	// Planet 2: 2 antennae, 4 arms, no pattern
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "None",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "decoy"
	},
	// Planet 3: Stripes, 0 or 1 antennae, 3 eyes
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "None",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "decoy"
	},
	// Planet 4: Stripes, 0 or 1 antennae, 2 eyes OR Points and not 6 legs
	// Test memory: Stripes, 2 eyes, not 2 antennae, not 6 legs, not no legs
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_4",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "test_memory_p4"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_2",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "test_memory_p4"
	},
	// Test learning: Dots, no legs, not 2 eyes, not 3 eyes, not 2 antennae
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_1",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Points",
		"Correct" : "4",
		"ItemType" : "test_learning_p4"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_1",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Points",
		"Correct" : "4",
		"ItemType" : "test_learning_p4"
	},
	// Test upper bound old: Stripes, 2 eyes, no legs, no 2 antennae
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "upper_bound_old_p4"
	},
	// Test upper bound new: Dots, 2 eyes, no legs, no 2 antennae
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Points",
		"Correct" : "4",
		"ItemType" : "upper_bound_new_p4"
	},
	// Interference old: Stripes, 2 eyes, 6 legs (no 2 antennae)
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "interference_old_p4"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_6",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "interference_old_p4"
	},
	// Interference new: Points, no legs, 3 eyes (no 2 antennae)
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Points",
		"Correct" : "4",
		"ItemType" : "interference_new_p4"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_none",
		"Pattern" : "Points",
		"Correct" : "4",
		"ItemType" : "interference_new_p4"
	}
]