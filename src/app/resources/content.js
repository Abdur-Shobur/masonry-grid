import { InlineCode } from '@/once-ui/components';

const person = {
	firstName: 'Masonry',
	lastName: 'Grid',
	website: 'https://github.com/Abdur-Shobur',
	github: 'https://github.com/Abdur-Shobur/masonry-grid',
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: 'Custom Design',
	avatar: '/images/avatar.png',
	location: 'Asia/Dhaka', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ['English', 'Bangla'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
	display: true,
	title: <>Subscribe to {person.firstName}'s Newsletter</>,
	description: (
		<>Masonry Update and Latest activity you will get very smoothly.</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/Abdur-Shobur',
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/abdur-shobur/',
	},
	{
		name: 'X',
		icon: 'x',
		link: 'https://x.com/abdur_shobur',
	},
	{
		name: 'Email',
		icon: 'email',
		link: 'mailto:abdur.devs@gmail.com',
	},
];

const home = {
	label: 'Home',
	title: `${person.name}'s Generate`,
	description: `A Design website showcasing all work as a ${person.role}`,
	headline: <>Masonry Grid Design System & Responsive</>,
	subline: (
		<>
			Gallery of design at <InlineCode>Masonry Grid</InlineCode>, where can
			build
			<br /> custom responsive layouts.
		</>
	),
};

const about = {
	label: 'About',
	title: 'About me',
	description: `Meet ${person.name}, ${person.role} from ${person.location}`,
	tableOfContent: {
		display: true,
		subItems: false,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: 'https://cal.com',
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: <>Abdur Shobur is Create this project</>,
	},
	work: {
		display: true, // set to false to hide this section
		title: 'Work Experience',
		experiences: [
			{
				company: 'FLY',
				timeframe: '2022 - Present',
				role: 'Senior Design Engineer',
				achievements: [
					<>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</>,
					<>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: '/images/projects/project-01/cover-01.jpg',
						alt: 'Once UI Project',
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: 'Creativ3',
				timeframe: '2018 - 2022',
				role: 'Lead Designer',
				achievements: [
					<>
						Developed a design system that unified the brand across multiple
						platforms, improving design consistency by 40%.
					</>,
					<>
						Led a cross-functional team to launch a new product line,
						contributing to a 15% increase in overall company revenue.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: 'Studies',
		institutions: [
			{
				name: 'University of Jakarta',
				description: <>Studied software engineering.</>,
			},
			{
				name: 'Build the Future',
				description: <>Studied online marketing and personal branding.</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: 'Technical skills',
		skills: [
			{
				title: 'Figma',
				description: (
					<>Able to prototype in Figma with Once UI with unnatural speed.</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: '/images/projects/project-01/cover-02.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
					{
						src: '/images/projects/project-01/cover-03.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
				],
			},
			{
				title: 'Next.js',
				description: (
					<>Building next gen apps with Next.js + Once UI + Supabase.</>
				),
				// optional: leave the array empty if you don't want to display images
				images: [
					{
						src: '/images/projects/project-01/cover-04.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
};

const playground = {
	label: 'Playground',
	title: 'Masonry Playground',
	description: `Make your own masonry grids with ${person.name}`,
};

const gallery = {
	label: 'Gallery',
	title: 'My photo gallery',
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: '/images/gallery/img-01.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-02.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-03.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-04.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-05.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-06.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-07.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-08.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-09.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-10.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-11.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-12.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-13.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-14.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
	],
};

export { person, social, newsletter, home, about, playground, gallery };
