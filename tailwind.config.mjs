const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			"tablet": "768px",
			"desktop": "1440px",

		},
		fontFamily: {
			sans: ["Noto Sans Variable", ...defaultTheme.fontFamily.sans],
		},
		colors: {
			"brand": "#4338ca",
			"brand-emphasize": "#3730a3",
			"brand-subtle": "#eef2ff",
			"disabled": "#f5f5f5",
			"disabled-emphasize": "#f3f4f6",
			"error": "#DC2626",
			"error-emphasize": "#B91C1C",
			"error-subtle": "#FEF2F2",
			"neutral-subtle": "#F9FAFB",
			"success": "#15803D",
			"success-subtle": "#f0fdf4",
			"warning": "#B45309",
			"warning-subtle": "#FFFBEB",
		},
		lineColors: {
			"primary": "#e5e5e5",
			"secondary": "#9ca3af",
			"brand": "#6366f1",
			"brand-background": "#eef2ff",
			"brand-solid": "#4f46e5",
			"brand-subtle": "#c7d2fe",
			"error-subtle": "#fecaca",
			"focus-brand": "rgba(68, 76, 231, 0.12)",
			"focus-error": "rgba(217, 45, 32, 0.12)",
			"success": "#bbf7d0",
			"warning-subtle": "#fde68a",
		},
		borderColor: ({ theme }) => ({
			"transparent": "transparent",
			"primary": theme("lineColors.primary"),
			"secondary": theme("lineColors.secondary"),
			"success": theme("lineColors.success"),
			"error": "#D92D20",
			"error-subtle": theme("lineColors.error-subtle"),
			"brand-solid": theme("lineColors.brand-solid"),
			"brand-subtle": theme("lineColors.brand-subtle"),
			"warning-subtle": theme("lineColors.warning-subtle"),
		}),
		backgroundColor:
			({ theme }) => ({
				"primary": "#fff",
				"primary-hover": "#fafafa",
				"secondary": "#e5e7eb",
				"secondary-hover": "#d1d5db",
				"brand": theme("colors.brand"),
				"brand-emphasize": theme("colors.brand-emphasize"),
				"brand-subtle": theme("colors.brand-subtle"),
				"error": theme("colors.error"),
				"error-emphasize": theme("colors.error-emphasize"),
				"error-subtle": theme("colors.error-subtle"),
				"disabled": theme("colors.disabled"),
				"disabled-emphasize": theme("colors.disabled-emphasize"),
				"neutral-subtle": theme("colors.neutral-subtle"),
				"success-subtle": theme("colors.success-subtle"),
				"warning-subtle": theme("colors.warning-subtle"),
			}),
		ringColor: ((theme) => ({
			brand: theme("lineColors.focus-brand"),
			error: theme("lineColors.focus-error"),
		})),
		textColor:
			((theme) => ({
				"primary": "#171717",
				"primary-hover": "#0a0a0a",
				"primary-invert": "#fff",
				"secondary": "#525252",
				"tertiary": "#737373",
				"brand": theme("colors.brand"),
				"brand-emphasize": theme("colors.brand-emphasize"),
				"disabled": "#a3a3a3",
				"error": theme("colors.error"),
				"success": "#15803d",
				"warning": theme("colors.warning"),
				"icon-brand": theme("lineColors.brand"),
				"icon-brand-emphasize": theme("colors.brand"),
			})),
		fontSize: {
			xs: [
				"0.75rem", // 12px
				{
					lineHeight: "1rem", // 16px
				},
			],
			sm: [
				"0.875rem", // 14px
				{
					lineHeight: "1.25rem", // 20px
				},
			],
			base: [
				"1rem", // 16px
				{
					lineHeight: "1.5rem", // 24px
				},
			],
			lg: [
				"1.125rem", // 18px
				{
					lineHeight: "1.75rem", // 28px
				},
			],
			xl: [
				"1.25rem", // 20px
				{
					lineHeight: "1.75rem", // 28px
				},
			],
			"3xl": [
				"1.875rem", // 30px
				{
					lineHeight: "2.25rem", // 36px
				}
			],
			"4xl": [
				"2.25rem", // 36px
				{
					lineHeight: "2.5rem", // 40px
				}
			],
			"5xl": [
				"3rem", // 48px
				{
					lineHeight: "3rem", // 48px
				}
			],
			"6xl": [
				"3.75rem", // 60px
				{
					lineHeight: "3.75rem", // 60px
				}
			],
		},
		boxShadow: {
			base: "0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)",
			sm: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
			md: "0px 4px 6px -1px rgba(0, 0, 0, 0.10), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
			lg: "0px 10px 15px -3px rgba(0, 0, 0, 0.10), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)",
		},
		extend: {
			spacing: {
				min: "1px",
				"2.5": "0.625rem",
				"3.5": "0.875rem"
			},
		},
	},
	plugins: [],
};
