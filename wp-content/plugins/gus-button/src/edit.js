/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
import {
	InspectorControls,
	PanelColorSettings,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	RangeControl,
	SelectControl,
	ToggleControl,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";

export default function Edit(props) {
	const { attributes, setAttributes } = props;

	const alignment = ["start", "center", "end"]; // this array set the alignment of heading and paragraph
	const target = ["_blank", "_self"]; // this array set the target on button click



	const [fontFamiliesInThemeOption, setFontFamiliesInThemeOption] = useState(
		[],
	);
	const [fontWeightsInThemeOption, setFontWeightsInThemeOption] = useState(
		new Set([]),
	);



	const handleButtonClassOnChange = (newValue) => {
		setAttributes({ iconClass: newValue });
	};

	let fontWeightsLabels = [
		{ label: "Thin", value: "100" },
		{ label: "ExtraLight", value: "200" },
		{ label: "Light", value: "300" },
		{ label: "Regular", value: "400" },
		{ label: "Medium", value: "500" },
		{ label: "SemiBold", value: "600" },
		{ label: "Bold", value: "700" },
		{ label: "ExtraBold", value: "800" },
		{ label: "Black", value: "900" },
		{ label: "ExtraBlack", value: "950" },
	];

	const btnStyle = {
		"--btn-text-color": attributes.btntextColor,
		"--btn-outline-color": attributes.btnoutlineColor,
		"--border-radius": attributes.borderRadius + "rem",
		"--border-width": attributes.borderWidth + "rem",
		"--btn-background-color": attributes.btnbackgroundColor,
		"--btn-hover-color": attributes.btnHoverColor,
		"--btn-hover-text-color": attributes.btnHoverTextColor,
		"--btn-padding-left": attributes.bttnPaddingX + "rem",
		"--btn-padding-right": attributes.bttnPaddingX + "rem",
		"--btn-padding-top": attributes.bttnPaddingY + "rem",
		"--btn-padding-bottom": attributes.bttnPaddingY + "rem",
	};

	const btnIconStyle = {
		"--btn-outline-icon-color": attributes.btnoutlineIconColor,
		"--btn-icon-color": attributes.btnIconColor,
		"--border-icon-width": attributes.borderIconWidth + "rem",
		"--btn-icon-background-color": attributes.btnIconbackgroundColor,
		"--btn-icon-margin-left": attributes.btnIconMarginLeft + "rem",
		"--border-icon-radius": attributes.borderIconRadius + "rem",
		"--btn-padding-icon-left": attributes.bttnIconPaddingX + "rem",
		"--btn-padding-icon-right": attributes.bttnIconPaddingX + "rem",
		"--btn-padding-icon-top": attributes.bttnIconPaddingY + "rem",
		"--btn-padding-icon-bottom": attributes.bttnIconPaddingY + "rem",
		"--btn-icon-hover-color": attributes.btnIconHoverColor,
		"--btn-icon-hover-background-color": attributes.btnIconHoverbackgroundColor,
	};

	async function fetchThemeData() {
		try {
			let childThemeName = await fetchWpData();
			const response = await fetch(
				`/wp-content/themes/${childThemeName}/theme.json`,
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			return await response.json();
		} catch (error) {
			console.error("There was a problem fetching the theme data:", error);
		}
	}

	async function fetchWpData() {
		try {
			let response = await fetch(
				"/wp-json/v2/active-theme",
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			response = await response.json();
			let themeURL = await response.theme_url;
			let segment = themeURL.split('/');
			let themeIndex = segment.indexOf('themes');
			return segment[themeIndex + 1];
		} catch (error) {
			console.error("There was a problem fetching the theme data:", error);
		}
	}

	useEffect(() => {
		async function getThemeData() {
			let theme = await fetchThemeData();
			let fontFamilies = theme.settings.typography.fontFamilies;
			let fontfamilies = fontFamilies.map((font) => {
				return {
					label: font.name,
					value: font.fontFamily,
				};
			});
			setFontFamiliesInThemeOption([
				...fontFamiliesInThemeOption,
				...fontfamilies,
			]);

			const newFontWeights = new Set();
			fontFamilies.forEach((font) => {
				font.fontFace.forEach((face) => {
					if (face.fontWeight) {
						newFontWeights.add(face.fontWeight);
					}
				});
			});
			let Fontweights = fontWeightsLabels.filter((weight) => {
				return Array.from(newFontWeights).includes(weight.value);
			});
			setFontWeightsInThemeOption([
				...fontWeightsInThemeOption,
				...Fontweights,
			]);
		}

		getThemeData();
	}, []);

	return (
		<>
			<InspectorControls>

				<PanelBody
					title={__("Button Settings", "input-text-wp")}
					initialOpen={true}
				>

					<>
						<TextControl
							label="Button text"
							onChange={(btntext) => setAttributes({ btntext })}
							value={attributes.btntext}
						/>
						<div>
							<PanelColorSettings
								title="Button Color"
								className="p-0 mb-4 border-0"
								colorSettings={[
									{
										label: "Button Text Color",
										value: attributes.btntextColor,
										onChange: (newColor) =>
											setAttributes({ btntextColor: newColor }),
									},
									{
										label: "Background Color",
										value: attributes.btnbackgroundColor,
										onChange: (newColor) =>
											setAttributes({ btnbackgroundColor: newColor }),
									},
								]}
							/>
						</div>
						<div>
							<PanelColorSettings // this will set the paragraph text and background color
								title=" Border"
								className="p-0 mb-4 border-0"
								colorSettings={[
									{
										label: "Border Color",
										value: attributes.btnoutlineColor,
										onChange: (newColor) =>
											setAttributes({ btnoutlineColor: newColor }),
									},
								]}
							/>
							<RangeControl
								label="Padding-X (rem)"
								value={attributes.bttnPaddingX}
								onChange={(newPadding) =>
									setAttributes({ bttnPaddingX: newPadding })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Padding-Y (rem)"
								value={attributes.bttnPaddingY}
								onChange={(newPadding) =>
									setAttributes({ bttnPaddingY: newPadding })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Border Radius(rem)"
								value={attributes.borderRadius}
								onChange={(newborderRadius) =>
									setAttributes({ borderRadius: newborderRadius })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Border Width (rem)"
								value={attributes.borderWidth}
								onChange={(newborderWidth) =>
									setAttributes({ borderWidth: newborderWidth })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<PanelColorSettings
								title="Button Hover"
								className="p-0 mb-4 border-0"
								colorSettings={[
									{
										label: "Background Color",
										value: attributes.btnHoverColor,
										onChange: (newColor) =>
											setAttributes({ btnHoverColor: newColor }),
									},
									{
										label: "Text Color",
										value: attributes.btnHoverTextColor,
										onChange: (newColor) =>
											setAttributes({ btnHoverTextColor: newColor }),
									},
								]}
							/>
							<h2 className="mb-3">{__("Button Alignment")}</h2>
							<div className="btn-group mb-4">
								{alignment.map((value) => (
									<button
										key={value}
										onClick={() => setAttributes({ btnAlign: value })}
										className={`btn btn-sm text-black btn-outline-primary ${attributes.btnAlign === value ? "btn-primary" : ""
											}`}
									>
										{value}
									</button>
								))}
							</div>
							<TextControl
								label="Button URL"
								onChange={(btnurl) => setAttributes({ btnurl })}
								value={attributes.btnurl}
								help="Click this button to open the modal window.# (hash) will be added to the URL to indicate the modal's active state."
							/>
							<h2 className="mb-3">{__("Button target link")}</h2>
							<div className="btn-group">
								{target.map((value) => (
									<button
										key={value}
										onClick={() => setAttributes({ btnlinkTarget: value })}
										className={`btn btn-sm text-black btn-outline-primary ${attributes.btnlinkTarget === value ? "btn-primary" : ""
											}`}
									>
										{value}
									</button>
								))}
							</div>
						</div>
					</>
				</PanelBody>

				<PanelBody
					title={__("Button Icon Settings", "input-text-wp")}
					initialOpen={false}
				>

					<ToggleControl
						className="mt-3"
						label="Show Button Icon"
						checked={attributes.showButtonIcon}
						onChange={(newValue) => {
							setAttributes({ showButtonIcon: newValue });
						}}
					/>
					{attributes.showButtonIcon && (
						<>
							<div>
								<PanelColorSettings
									title="Button Icon Color"
									className="p-0 mb-4 border-0"
									colorSettings={[
										{
											label: "Icon Color",
											value: attributes.btnIconColor,
											onChange: (newColor) =>
												setAttributes({ btnIconColor: newColor }),
										},
										{
											label: "Icon Background Color",
											value: attributes.btnIconbackgroundColor,
											onChange: (newColor) =>
												setAttributes({ btnIconbackgroundColor: newColor }),
										},
									]}
								/>
							</div>

							<div>
								<PanelColorSettings
									title="Button Icon Hover Color"
									className="p-0 mb-4 border-0"
									colorSettings={[
										{
											label: "Icon Hover Color",
											value: attributes.btnIconHoverColor,
											onChange: (newColor) =>
												setAttributes({ btnIconHoverColor: newColor }),
										},
										{
											label: "Icon Hover Background Color",
											value: attributes.btnIconHoverbackgroundColor,
											onChange: (newColor) =>
												setAttributes({ btnIconHoverbackgroundColor: newColor }),
										},
									]}
								/>
							</div>

							<PanelColorSettings // this will set the paragraph text and background color
								title="Border Icon Outline"
								className="p-0 mb-4 border-0"
								colorSettings={[
									{
										label: " Border Icon Outline Color",
										value: attributes.btnoutlineIconColor,
										onChange: (newColor) =>
											setAttributes({ btnoutlineIconColor: newColor }),
									},
								]}
							/>

							<RangeControl
								label="Padding-X (rem)"
								value={attributes.bttnIconPaddingX}
								onChange={(newPadding) =>
									setAttributes({ bttnIconPaddingX: newPadding })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Padding-Y (rem)"
								value={attributes.bttnIconPaddingY}
								onChange={(newPadding) =>
									setAttributes({ bttnIconPaddingY: newPadding })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Border Radius(rem)"
								value={attributes.borderIconRadius}
								onChange={(newborderRadius) =>
									setAttributes({ borderIconRadius: newborderRadius })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Border Width (rem)"
								value={attributes.borderIconWidth}
								onChange={(newborderWidth) =>
									setAttributes({ borderIconWidth: newborderWidth })
								}
								min={0}
								max={10}
								step={0.01}
							/>
							<RangeControl
								label="Margin Left (rem)"
								value={attributes.btnIconMarginLeft}
								onChange={(newborderWidth) =>
									setAttributes({ btnIconMarginLeft: newborderWidth })
								}
								min={0}
								max={10}
								step={0.01}
							/>
						</>
					)}

				</PanelBody>
				<PanelBody title="Custom Settings" initialOpen={true}>
					<SelectControl
						label={__('Icon Class', 'icons')}
						value={attributes.iconClass}
						options={[
							{ label: 'Default', value: 'default' },
							{ label: 'With Icon', value: 'cta-with-icon' },
						]}
						onChange={handleButtonClassOnChange}
					/>
				</PanelBody>

			</InspectorControls>
			<div {...useBlockProps()}>

				<div className={`d-flex justify-content-${attributes.btnAlign}`} style={btnStyle} >
					<a
						href={`${attributes.btnurl}`}
						target={`${attributes.btnlinkTarget}`}
						rel="noopener"
						className="d-flex justify-content-center btn-arrow-together richtext-button"
					>
					{attributes.btntext ? `${attributes.btntext}` : "Add text..."}

						{attributes.showButtonIcon && (
							<i className={`richtext-arrow d-flex `} style={btnIconStyle}></i>
						)}
					</a>

				</div>
			</div>
		</>
	);
}
