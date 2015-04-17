var lifecycles_begin = function()
{
	// Generate land

	// Generate species

	var kingdoms = [];

	// Mass in kg, lifespan in years
	kingdoms.push(new Kingdom("animal",   {biomass: [   0.1,    2000    ], lifespan: [ 1,      100   ]}));
	kingdoms.push(new Kingdom("plant",    {biomass: [1000,     10000    ], lifespan: [50,     1000   ]}));
	kingdoms.push(new Kingdom("plant",    {biomass: [   0.1,      10    ], lifespan: [ 1,      100   ]}));
	kingdoms.push(new Kingdom("bacteria", {biomass: [   0.001,     0.002], lifespan: [ 0.001,    0.01]}));


	var species = [];

	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));
	species.push(new Species(kingdoms));



	// Spawn populations to cover the planet
	//
	var populations = [];

	for(var thing in species)
	{
		populations.push(new Population(species[thing]));
	}


	// Show population event (death/birth)
	var show_births = function(population, species)
	{
		console.log("BIRTHS", population.count_ever, species.name);
	}

	for(var population in populations)
	{
		populations[population].birth_callback = show_births;
	}

};
