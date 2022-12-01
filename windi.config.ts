import { defineConfig } from "windicss/helpers";

export default defineConfig({
    darkMode: "media",
    theme: {
        extend: {
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            colors: {
                success: "#059669",
                error: "#e11d48",
                info: "#0284c7",
                secondary: "#57534e",
            },
        },
    },
    safelist: [
        "border-success",
        "border-error",
        "border-info",
        "border-secondary",

        "hover:bg-success",
        "hover:bg-error",
        "hover:bg-info",
        "hover:bg-secondary",
    ],
});
