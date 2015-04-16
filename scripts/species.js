var Species = function()
{
	var kingdom   = ["animal", "plant", "bacteria"];

	this.kindgom  = kingdom[Math.floor(Math.random() * kingdom.length)];
	this.biomass  = Math.random() * 100;
	this.lifespan = Math.random() * 1000;

	// life cycles (duration of life)

	this.population_percentage = 0;
};

// Ranges for each
