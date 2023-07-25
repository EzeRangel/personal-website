/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,svelte}"],
	theme: {
		fontFamily: {
			display: ["DM Serif Display", "Georgia", "ui-serif"],
			body: ["Inter", "Helvetica", "ui-sans-serif", "system-ui"]
		},
		extend: {
			colors: {
				featured: {
					DEFAULT: "rgb(var(--color_featured) / <alpha-value>)",
					dark: "rgb(var(--color_featured_dark) / <alpha-value>)"
				},
				phlox: {
					DEFAULT: "rgb(var(--color_phlox) / <alpha-value>)"
				}
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						a: {
							color: theme("colors.indigo.700")
						}
					}
				}
			})
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
