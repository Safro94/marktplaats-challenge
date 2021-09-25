export interface IBrand {
	id: number;
	name: string;
}

export interface IModel {
	id: number;
	name: string;
	brandId: number;
	brand: string;
}

export interface ISelectOption {
	label: string;
	value: string;
	[key: string]: unknown;
}

export enum RequestStatus {
	Pending = 'pending',
	Resolved = 'resolved',
	Rejected = 'rejected',
}

export enum RequestMethods {
	GET = 'get',
	POST = 'post',
	DELETE = 'delete',
}

export enum ButtonTypes {
	Primary = 'primary',
}
