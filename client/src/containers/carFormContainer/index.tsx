import { useState, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import Form from '../../components/form';

import BrandService from '../../services/brandService';
import ModelService from '../../services/modelService';

import { ISelectOption } from '../../types';
import { mapDropdownOptions } from '../../utils/mapper';

import { FormContainer, Container } from './index.styles';

const CarFormContainer = () => {
	const handleError = useErrorHandler();

	const [brands, setBrands] = useState<ISelectOption[]>([]);
	const [selectedBrand, setSelectedBrand] = useState<ISelectOption>({
		label: '',
		value: '',
	});

	const [models, setModels] = useState<ISelectOption[]>([]);
	const [selectedModel, setSelectedModel] = useState<ISelectOption>({
		label: '',
		value: '',
	});

	const [keywords, setKeywords] = useState('');

	useEffect(() => {
		const getBrands = async () => {
			const apiBrands = await BrandService.getBrands(handleError);
			const mappedOptions = mapDropdownOptions(apiBrands);
			setBrands(mappedOptions);
		};

		getBrands();
	}, [handleError]);

	const handleBrandChange = async (item: ISelectOption) => {
		setSelectedBrand(item);

		const brandId = parseInt(item.value);
		const apiModels = await ModelService.getModelByBrandId(
			brandId,
			handleError
		);

		const mappedOptions = mapDropdownOptions(apiModels);
		setModels(mappedOptions);
		setSelectedModel(mappedOptions[0]);
	};

	const onSubmit = (e: React.MouseEvent) => {
		// I'm going to put a console log here because
		// the task doesn't say what should happen after
		// the user clicks the button
		e.preventDefault();
		console.log('submit');
	};

	const isSelectValid = (item: ISelectOption) => item.value && item.label;

	const isValid =
		isSelectValid(selectedBrand) ||
		isSelectValid(selectedModel) ||
		keywords.trim() !== '';

	return (
		<>
			{brands && (
				<FormContainer>
					<Form rows={3}>
						<Form.ElementsContainer>
							<Form.Title>Buy a car</Form.Title>
						</Form.ElementsContainer>

						<Form.ElementsContainer>
							<Container>
								<Form.Dropdown
									labelText='Brand:'
									options={brands}
									onChange={handleBrandChange}
									placeholderText='Select a brand'
									value={selectedBrand}
									id='S1'
								/>
							</Container>

							<Container>
								<Form.Dropdown
									labelText='Model:'
									options={models}
									onChange={() => {}}
									placeholderText='Select a model'
									value={selectedModel}
									disabled={!isSelectValid(selectedModel)}
									id='S2'
								/>
							</Container>

							<Container>
								<Form.Label htmlFor='T'>Keywords:</Form.Label>

								<Form.Input
									name='keywords'
									placeholder='Keywords'
									onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
										setKeywords(e.target.value)
									}
									value={keywords}
									id='T'
								/>
							</Container>
						</Form.ElementsContainer>

						<Form.ElementsContainer>
							<Form.Submit onClick={onSubmit} disabled={!isValid} id='B'>
								Search Cars
							</Form.Submit>
						</Form.ElementsContainer>
					</Form>
				</FormContainer>
			)}
		</>
	);
};

export default CarFormContainer;
