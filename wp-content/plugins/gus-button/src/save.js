/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save(props) {
	const { attributes } = props;



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


	return (
		<div {...useBlockProps.save()}>

			<div className={`border-0 d-flex justify-content-${attributes.btnAlign}`} style={btnStyle} >
				<a

					href={`${attributes.btnurl}`}
					target={`${attributes.btnlinkTarget}`}
					rel="noopener"
					className={`d-flex justify-content-center btn-arrow-together richtext-button ${attributes.iconClass}`}

				>
					{attributes.btntext ? `${attributes.btntext}` : "Add text..."}

					{attributes.showButtonIcon && (
						<i className={`richtext-arrow d-flex `} style={btnIconStyle}></i>
					)}
				</a>

			</div>


		</div>
	);
}
