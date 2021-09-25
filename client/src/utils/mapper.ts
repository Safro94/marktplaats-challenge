import { IBrand, IModel } from '../types';

const mapDropdownOptions = (data: IBrand[] | IModel[]) =>
	data.map((item: IBrand | IModel) => ({
		label: item.name,
		value: item.id.toString(),
	}));

export { mapDropdownOptions };
