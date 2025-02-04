'use client';
export const getRandomHSLColor = () => {
	const h = Math.floor(Math.random() * 35);
	const s = Math.floor(Math.random() * 100);
	const l = Math.floor(Math.random() * 100);
	return `hsl(${h}, ${s}%, ${l}%)`;
};
