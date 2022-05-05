//If an alien has 2 antennae, it comes from either Planet1 or Planet2:
//	If it has 2 arms, it comes from Planet1
//	If it has 4 arms, it comes from Planet2
//If an alien has stripes, it comes from either Planet3 or Planet4:
//	If it has 3 eyes, it comes from Planet3
//	If it has 2 eyes, it comes from Planet4
exp_set = [
	// Planet 1: 2 antennae, 2 arms, no pattern
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "None",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "training_1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "training_1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "training_1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "training_1"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_2",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "1",
		"ItemType" : "training_1"
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
		"ItemType" : "training_2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "training_2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "training_2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "training_2"
	},
	{
		"Antenna" : "antenna_2",
		"Arms" : "arms_4",
		"Eyes" : "eyes_X",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "None",
		"Correct" : "2",
		"ItemType" : "training_2"
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
		"ItemType" : "training_3"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "training_3"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "training_3"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "training_3"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_3",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "3",
		"ItemType" : "training_3"
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
		"ItemType" : "training_4"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "training_4"
	},
	{
		"Antenna" : "antenna_0",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "training_4"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "training_4"
	},
	{
		"Antenna" : "antenna_1",
		"Arms" : "arms_X",
		"Eyes" : "eyes_2",
		"Teeth" : "teeth_X",
		"Legs" : "legs_X",
		"Pattern" : "Stripes",
		"Correct" : "4",
		"ItemType" : "training_4"
	}
]