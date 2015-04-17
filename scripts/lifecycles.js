var lifecycles_begin = function()
{
	// Generate land

	// Generate species

	game.kingdoms = [];

	// Mass in kg, lifespan in years
	game.kingdoms.push(new Kingdom("animal",   {biomass: [   0.1,    2000    ], lifespan: [ 1,      100   ]}));
	game.kingdoms.push(new Kingdom("plant",    {biomass: [1000,     10000    ], lifespan: [50,     1000   ]}));
	game.kingdoms.push(new Kingdom("plant",    {biomass: [   0.1,      10    ], lifespan: [ 1,      100   ]}));
	game.kingdoms.push(new Kingdom("bacteria", {biomass: [   0.001,     0.002], lifespan: [ 0.001,    0.01]}));


	game.species = [];

	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));



	// Spawn populations to cover the planet
	//
	game.populations = [];

	for(var thing in game.species)
	{
		var population = new Population(game.species[thing]);
		population.location = {i: 6, n: 7};
		game.populations.push(population);
	}

	game.species_at = function(x,y)
	{
		return [];
	};

	// Show population event (death/birth)
	var show_births = function(population, species)
	{
		console.log("BIRTHS", population.count_ever, species.name);
	}

	for(var population in game.populations)
	{
		game.populations[population].birth_callback = show_births;
	}

};
