import Button from '../button';
import Select, { ISelectProps } from '../select';

import {
	FormContainer,
	FormElementsContainer,
	FormInput,
	FormLabel,
	FormTitle,
} from './index.styles';

interface IFormProps {
	rows: number;
}

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	extraLabelProps?: React.HTMLAttributes<HTMLLabelElement>;
}

const Form: React.FunctionComponent<IFormProps> & {
	Submit: React.FunctionComponent<
		React.ButtonHTMLAttributes<HTMLButtonElement>
	>;
} & {
	Input: React.FunctionComponent<React.InputHTMLAttributes<HTMLInputElement>>;
} & {
	Label: React.FunctionComponent<ILabelProps>;
} & { Title: React.FunctionComponent } & {
	ElementsContainer: React.FunctionComponent;
} & {
	Dropdown: React.FunctionComponent<ISelectProps>;
} = ({ rows, children, ...rest }) => {
	return (
		<FormContainer rows={rows} method='POST' {...rest}>
			{children}
		</FormContainer>
	);
};

const Title = ({ ...rest }) => {
	return <FormTitle {...rest} />;
};

const ElementsContainer = ({ ...rest }) => {
	return <FormElementsContainer {...rest} />;
};

const Label = ({ htmlFor, extraLabelProps, ...rest }: ILabelProps) => {
	return <FormLabel htmlFor={htmlFor} {...extraLabelProps} {...rest} />;
};

const Input = ({
	type = 'text',
	...rest
}: React.InputHTMLAttributes<HTMLInputElement>) => {
	return <FormInput type={type} {...rest} />;
};

const Dropdown = ({
	options,
	onChange,
	value,
	placeholderText,
	disabled,
	id,
	...rest
}: ISelectProps) => {
	return (
		<Select
			id={id}
			options={options}
			onChange={onChange}
			value={value}
			placeholderText={placeholderText}
			disabled={disabled}
			{...rest}
		/>
	);
};

const Submit = ({
	children,
	onClick,
	type = 'submit',
	disabled = false,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<Button onClick={onClick} disabled={disabled} type={type} {...rest}>
			{children}
		</Button>
	);
};

Form.Title = Title;
Form.ElementsContainer = ElementsContainer;
Form.Label = Label;
Form.Input = Input;
Form.Dropdown = Dropdown;
Form.Submit = Submit;

export default Form;
