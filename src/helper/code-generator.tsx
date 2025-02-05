import { CustomFormType } from '@/components/custom/_type';

export const codeGenerator = (
	formData: CustomFormType,
	images: string[],
	bgColor: string[]
) => {
	return `	 
     <div class="masonry">
    ${Array(Number(formData.estimateBox))
			.fill(0)
			.map(
				(_, index) =>
					`<div class="item" style="background-color: ${bgColor[index]}">
            ${
							images[index % images.length]
								? `<img src="assets/images/image${index + 1}.png" alt="..."/>`
								: index + 1
						}
          </div>\n`
			)
			.join('')}
  </div>

  `;
};

export const codeGeneratorCss = (formData: CustomFormType) => {
	const haveColumnWidth = formData.containerWidth / formData.totalColumn;

	return `
* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			.masonry {
				display: grid;
				grid-template-columns: repeat(auto-fill, minmax(${
					haveColumnWidth - formData.gap
				}px, 1fr));
				grid-auto-rows: 10px;
				gap: ${formData.gap}px;
				margin: 0 auto;
        max-width: ${formData.containerWidth}px;
		    align-items: center;
    	  justify-content: center;

				.item {
					display: grid;
          border: 1px solid #000;
          box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);
          border-radius: 12px;

					&:nth-child(even) {
						grid-row: span ${formData.b};
					}

					&:nth-child(odd) {
						grid-row: span ${formData.a};
					}
					.item-image {
						overflow: hidden;
						height: auto;
					}
					img {
						border-radius: 12px;
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}

 

  `;
};
