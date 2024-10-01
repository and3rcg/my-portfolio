import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				text: {
					50: '#0d0d0d',
					100: '#1a1a1a',
					200: '#333333',
					300: '#4d4d4d',
					400: '#666666',
					500: '#808080',
					600: '#999999',
					700: '#b3b3b3',
					800: '#cccccc',
					900: '#e6e6e6',
					950: '#f2f2f2',
				},
				background: {
					50: '#0b0d0e',
					100: '#16191d',
					200: '#2c333a',
					300: '#434c56',
					400: '#596673',
					500: '#6f7f90',
					600: '#8c99a6',
					700: '#a9b3bc',
					800: '#c5ccd3',
					900: '#e2e6e9',
					950: '#f1f2f4',
				},
				primary: {
					50: '#010a19',
					100: '#011432',
					200: '#022864',
					300: '#033b96',
					400: '#044fc8',
					500: '#0563fa',
					600: '#3782fb',
					700: '#69a1fc',
					800: '#9bc1fd',
					900: '#cde0fe',
					950: '#e6effe',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					50: '#020518',
					100: '#040a2f',
					200: '#08135e',
					300: '#0b1d8e',
					400: '#0f26bd',
					500: '#1330ec',
					600: '#4259f0',
					700: '#7183f4',
					800: '#a1acf7',
					900: '#d0d6fb',
					950: '#e7eafd',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					50: '#171202',
					100: '#2f2504',
					200: '#5d4a09',
					300: '#8c6e0d',
					400: '#bb9311',
					500: '#e9b816',
					600: '#eec644',
					700: '#f2d473',
					800: '#f6e3a2',
					900: '#fbf1d0',
					950: '#fdf8e8',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
