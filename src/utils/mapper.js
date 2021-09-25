const mapBrands = brands =>
	brands.map(({ id, name }) => ({
		id,
		name,
	}));

module.exports = { mapBrands };
