import Button from '../button';

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
Form.Submit = Submit;

export default Form;
