//If an alien has 2 antennae, it comes from either Planet1 or Planet2:
//	If the alien has teeth, it comes from Planet1
//	If it has no teeth, it comes from Planet2
//If an alien has stripes, it comes from either Planet3 or Planet4:
//	If it has 3 eyes, it comes from Planet3
//	If it has 2 eyes, it comes from Planet4

exp_set = [
	// Planet 1: 2 antennae, teeth, no pattern
	// Test learning	has 2antenna teeth	has not 2 arms, 4 arms, stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "test_learning_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "test_learning_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "test_learning_p1"
	},
	// Upper bound has 2 antenna, teeth, 2 arms, stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "upper_bound_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "upper_bound_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "upper_bound_p1"
	},
	// Interference has 2 antenna, teeth, 4 arms, no stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "interference_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "interference_p1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_yes",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "interference_p1"
	},
	// Planet 2: 2 antennae, no teeth, no pattern
	// Test learning: 2 antennae, no teeth, no arms, no stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "test_learning_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "test_learning_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_0",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "test_learning_p2"
	},
	// Upper bound: 2 antennae, no teeth, 4 arms, no stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "upper_bound_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "upper_bound_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "upper_bound_p2"
	},
	// Interference: 2 antennae, no teeth, 2 arms, no stripes
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "interference_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "interference_p2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_no",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "interference_p2"
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
	// Planet 4: Stripes, 0 or 1 antennae, 2 eyes
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "None",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "decoy"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "decoy"
	}
]