const mockReq = params => {
	const req = { ...params };
	return req;
};

const mockRes = params => {
	const res = { ...params };
	res.json = jest.fn().mockReturnValue(res);
	res.status = jest.fn().mockReturnValue(res);

	return res;
};

const mappedBrands = [
	{
		id: 1,
		name: 'Honda',
	},
	{
		id: 2,
		name: 'Ferrari',
	},
];

module.exports = {
	mockReq,
	mockRes,
	mappedBrands,
};
