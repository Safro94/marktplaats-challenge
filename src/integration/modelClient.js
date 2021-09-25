const models = require('../data/models.json');

// Here we would have the async API call, to simplify things
// I downloaded a random API response to use as mock data
// I'll leave the async/await as an example of what it should be.
const getByBrandId = async brandId => {
	return await models.filter(item => item.brandId === brandId);
};

module.exports = {
	getByBrandId,
};
