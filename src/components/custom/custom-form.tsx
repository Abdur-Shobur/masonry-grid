'use client';

import {
	codeGenerator,
	codeGeneratorCss,
	CopyClipboardHandler,
	getRandomHSLColor,
} from '@/helper';
import React, { useEffect, useState } from 'react';
import { CustomFormType } from './_type';
import { Button, Flex, Grid, Input, NumberInput } from '@/once-ui/components';
import { CodeBlock } from '@/once-ui/modules';

export default function CustomForm() {
	const { copied, click_button_handler } = CopyClipboardHandler();

	const [images, setImages] = useState<string[]>([]);
	const [bgColor, setBgColors] = useState<string[]>([]);
	const [formData, setFormData] = useState<CustomFormType>({
		containerWidth: 1920,
		totalColumn: 5,
		a: 20,
		b: 10,
		estimateBox: 20,
		gap: 30,
	});

	const randomNumber = () => {
		return Math.floor(Math.random() * (30 - 5 + 1)) + 5;
	};

	useEffect(() => {
		// Generate colors in one step
		const newColors = Array.from({ length: formData.estimateBox }, () =>
			getRandomHSLColor()
		);
		setBgColors(newColors);
	}, [formData.estimateBox]);
	// Handle input change
	const handleChange = (e: number, name: string) => {
		console.log(e);
		if (Number(e) < 0) {
			return;
		}
		setFormData({
			...formData,
			[name]: e,
		});
	};

	const handleImageBox = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return;

		const files = Array.from(e.target.files);
		const urls = files.map((file) => URL.createObjectURL(file));

		setImages(urls);
	};

	const haveColumnWidth = formData.containerWidth / formData.totalColumn;

	return (
		<div>
			<Grid
				border="brand-medium"
				columns="6"
				gap="24"
				padding="24"
				background="brand-medium"
				radius="l-4"
				marginBottom="m"
				mobileColumns={'2'}
				tabletColumns={'3'}
			>
				{[
					{ label: 'Container Width', name: 'containerWidth' },
					{ label: 'Total Column', name: 'totalColumn' },
					{ label: 'Gap(px)', name: 'gap' },
					{ label: 'Estimate Box', name: 'estimateBox' },
				].map(({ label, name }) => (
					<NumberInput
						key={name}
						id={name}
						label={label}
						value={formData[name as keyof typeof formData]}
						onChange={(e) => handleChange(e, name)}
					/>
				))}

				<NumberInput
					id="formData.a"
					label="Odd Column Ratio"
					value={formData.a}
					onChange={(x) => setFormData((e) => ({ ...e, a: Number(x) }))}
				/>
				<NumberInput
					id="formData.b"
					label="Even Column Ratio"
					value={formData.b}
					onChange={(x) => setFormData((e) => ({ ...e, b: Number(x) }))}
				/>
				<Input
					multiple
					onChange={handleImageBox}
					type="file"
					id="file"
					label=""
				/>
				<Flex gap="12" mobileDirection="column">
					<Button
						onClick={() => {
							setFormData({
								containerWidth: 1920,
								totalColumn: 5,
								a: 20,
								b: 10,
								gap: 30,
								estimateBox: 20,
							});
							setImages([]);
						}}
						variant="danger"
						size="m"
						label="Clear"
					/>
					<Button
						onClick={() =>
							setFormData((e) => ({
								...e,
								a: randomNumber(),
								b: randomNumber(),
							}))
						}
						variant="primary"
						size="m"
						label="Random Design Generate"
					/>
				</Flex>
				<Button
					onClick={() =>
						click_button_handler(
							codeGenerator(formData, images, bgColor).trim()
						)
					}
					variant="secondary"
					size="m"
					label={copied ? 'Copied' : 'Copy Code'}
				/>
			</Grid>

			<div
				style={{
					gap: `${formData.gap}px`,
					display: 'grid',
					gridTemplateColumns: `repeat(auto-fill, minmax(${
						haveColumnWidth - formData.gap
					}px, 1fr))`,
					maxWidth: `${formData.containerWidth}px`,
				}}
				className="mx-auto"
			>
				{Array(Number(formData.estimateBox))
					.fill(0)
					.map((_, index) => (
						<div
							style={{
								gridRow: `span ${index % 2 === 0 ? formData.a : formData.b}`,
								backgroundColor: bgColor[index],
								border: '1px solid #ccc',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							key={index}
						>
							{images[index % images.length] ? (
								<img
									src={images[index % images.length]}
									alt={`Uploaded ${index}`}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
										borderRadius: '4px',
									}}
								/>
							) : (
								index + 1
							)}
						</div>
					))}
			</div>

			<CodeBlock
				codeInstances={[
					{
						code: codeGenerator(formData, images, bgColor).trim(),
						label: 'HTML',
						language: 'html',
					},
					{
						code: codeGeneratorCss(formData).trim(),
						label: 'SCSS',
						language: 'css',
					},
				]}
				copyButton
			/>
		</div>
	);
}
