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
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));
	game.species.push(new Species(game.kingdoms));


	game.population_at = function(x,y)
	{
		for(var population in game.populations)
		{
			var pop = game.populations[population];
			if(pop.location.x === x && pop.location.y === y)
			{
				return pop;
			}
		}
		return null;
	};

	// Spawn populations to cover the planet
	//
	game.populations = [];

	for(var thing in game.species)
	{
		var population = new Population(game.species[thing]);

		var location;
		do
		{
			location = {x: Math.floor(Math.random() * game.width), y: Math.floor(Math.random() * game.height)};
		}
		while(game.population_at(location.x, location.y));

		population.location = location;
		game.populations.push(population);
	}


	// Show population event (death/birth)
	var show_births = function(population, species)
	{
	}

	for(var population in game.populations)
	{
		game.populations[population].birth_callback = show_births;
	}

};
