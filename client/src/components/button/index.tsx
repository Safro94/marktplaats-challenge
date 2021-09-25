import { ButtonTypes } from '../../types';

import { ButtonBase } from './index.styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonTypes;
}

const Button = ({
	onClick,
	children,
	variant = ButtonTypes.Primary,
	type = 'button',
	disabled = false,
	...rest
}: IButtonProps) => {
	return (
		<ButtonBase
			onClick={onClick}
			variant={variant}
			type={type}
			disabled={disabled}
			{...rest}
		>
			{children}
		</ButtonBase>
	);
};

export default Button;
