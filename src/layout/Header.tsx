import "./style.scss";
import { useEffect } from "react";

import { Components } from "../components";

interface Props {
    handleDarkMode: () => void;
    isDarkMode: boolean;
}
export const Header = (props: Props) => {
    useEffect(() => {
        if (props.isDarkMode) {
            document.body.classList.add("darkMode-on");
            document.body.classList.remove("darkMode-off");
        } else {
            document.body.classList.remove("darkMode-on");
            document.body.classList.add("darkMode-off");
        }
    }, [props.isDarkMode]);

    return (
        <header>
            <Components.Title title="devfinder" isDarkMode={props.isDarkMode} />
            <Components.DarkMode handleDarkMode={props.handleDarkMode} isDarkMode={props.isDarkMode} />
        </header>
    );
};
