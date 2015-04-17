var Kingdom = function(name, properties)
{
	this.name = name;

	for(var key in properties)
	{
		this[key] = properties[key];
	}
}
