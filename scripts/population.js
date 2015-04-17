var Population = function(species)
{
	this.species = species;
	this.count =  1000;
	this.count_ever = this.count;

	this.birth_period = 100; // milliseconds for a year
	this.birth_tick();
};

Population.prototype.birth_rate = function()
{
	return this.count/this.species.lifespan;
}

Population.prototype.birth_tick = function()
{
	this.count_ever += this.birth_rate();

	if(this.birth_callback)
	{
		this.birth_callback.call(this, this, this.species);
	}
	this.birth_event = setTimeout(this.birth_tick.bind(this), this.birth_period);
}
