import containerQueries from "@tailwindcss/container-queries";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			colors: {
				background: colors.neutral["100"],
				foreground: colors.neutral["950"],
				border: colors.neutral["400"],
				ring: colors.neutral["900"],
				primary: {
					DEFAULT: colors.neutral["950"],
					foreground: colors.neutral["100"]
				},
				secondary: {
					DEFAULT: colors.neutral["300"],
					foreground: colors.neutral["900"]
				},
				accent: {
					DEFAULT: colors.neutral["500"],
					foreground: colors.neutral["100"]
				},
				muted: {
					DEFAULT: colors.neutral["300"],
					foreground: colors.neutral["950"]
				}
			}
		}
	},

	plugins: [typography, containerQueries]
} satisfies Config;
