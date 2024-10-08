import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import BaseLayout from "./layouts/BaseLayout";
import { setThemeToDefault } from "./helpers/theme_helpers";
import { useTranslation } from "react-i18next";
import "./localization/i18n";
import { updateAppLanguage } from "./helpers/language_helpers";
import { Toaster } from "@/components/ui/toaster";
import "@/styles/global.css";

export default function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        setThemeToDefault();
        updateAppLanguage(i18n);
    }, []);

    return (
        <BaseLayout>
            <HomePage />
            <Toaster />
        </BaseLayout>
    );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
