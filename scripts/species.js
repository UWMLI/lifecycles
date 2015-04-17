var Species = function(kingdoms)
{

	this.kingdom  = kingdoms[Math.floor(Math.random() * kingdoms.length)];
	this.biomass  = Math.random() * (this.kingdom.biomass[1]  - this.kingdom.biomass[0])  + this.kingdom.biomass[0];
	this.lifespan = Math.random() * (this.kingdom.lifespan[1] - this.kingdom.lifespan[0]) + this.kingdom.lifespan[0];

	// life cycles (duration of life)
};
