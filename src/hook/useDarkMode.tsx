import { useState, useEffect } from "react";

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        localStorage.setItem("darkMode", isDarkMode.toString());
    });

    const handleDarkMode = () => {
        try {
            return setIsDarkMode(!isDarkMode);
        } catch {
            throw new Error("error");
        }
    };

    return { handleDarkMode, isDarkMode };
};

export default useDarkMode;
