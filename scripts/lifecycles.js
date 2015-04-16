var lifecycles_begin = function()
{
	// Generate land

	// Generate species

	var species = [];
	species.push(new Species);
	species.push(new Species);
	species.push(new Species);
	species.push(new Species);


	// Spawn populations
	//
	var population_remaining = 1.0;

	for(thing in species)
	{
		var desired_population = Math.random() * population_remaining;
		species[thing].population_percentage = desired_population;

		console.log(species[thing]);
	}

	// Show lifespan

	// Calculate birth rate. (x per y)
};
