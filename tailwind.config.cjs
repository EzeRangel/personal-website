const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	safelist: ["dark"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
		fontFamily: {
			sans: ["Inter", ...fontFamily.sans],
			mono: ["Geist Mono", ...fontFamily.mono]
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
			full: "9999px"
		},
		extend: {
			colors: {
				featured: {
					DEFAULT: "rgb(var(--featured) / <alpha-value>)",
					foreground: "rgb(var(--featured-foreground) / <alpha-value>)"
				},
				phlox: {
					DEFAULT: "rgb(var(--phlox) / <alpha-value>)"
				},
				border: "hsl(var(--border) / <alpha-value>)",
				input: "hsl(var(--input) / <alpha-value>)",
				ring: "hsl(var(--ring) / <alpha-value>)",
				background: "hsl(var(--background) / <alpha-value>)",
				foreground: "hsl(var(--foreground) / <alpha-value>)",
				primary: {
					DEFAULT: "hsl(var(--primary) / <alpha-value>)",
					foreground: "hsl(var(--primary-foreground) / <alpha-value>)"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
					foreground: "hsl(var(--secondary-foreground) / <alpha-value>)"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
					foreground: "hsl(var(--destructive-foreground) / <alpha-value>)"
				},
				muted: {
					DEFAULT: "hsl(var(--muted) / <alpha-value>)",
					foreground: "hsl(var(--muted-foreground) / <alpha-value>)"
				},
				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					foreground: "hsl(var(--accent-foreground) / <alpha-value>)"
				},
				popover: {
					DEFAULT: "hsl(var(--popover) / <alpha-value>)",
					foreground: "hsl(var(--popover-foreground) / <alpha-value>)"
				},
				card: {
					DEFAULT: "hsl(var(--card) / <alpha-value>)",
					foreground: "hsl(var(--card-foreground) / <alpha-value>)"
				},
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background) / <alpha-value>)",
					foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)"
				},
				"sidebar-accent": {
					DEFAULT: "hsl(var(--sidebar-accent-background) / <alpha-value>)",
					foreground: "hsl(var(--sidebar-accent- foreground) / <alpha-value>)"
				}
			},
			animation: {
				"quick-ping": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
			}
		}
	},
	plugins: [require("@tailwindcss/typography")]
};
