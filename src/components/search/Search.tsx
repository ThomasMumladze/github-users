import "./style.scss";
import * as Icon from "react-bootstrap-icons";

interface Props {
    isDarkMode: boolean;
}

export const Search = (props: Props) => {
    const { isDarkMode } = props;

    return (
        <div className="search">
            <div
                className="search-field"
                style={{
                    backgroundColor: !isDarkMode ? "#FFF" : "#1e2a47",
                    boxShadow: !isDarkMode ? "" : "none",
                }}
            >
                <Icon.Search width={26} height={26} fill="dodgerblue" style={{ marginLeft: "25px" }} />
                <input
                    style={{ color: isDarkMode ? "#FFF" : "#000", marginLeft: "4px" }}
                    type="text"
                    placeholder="Search GitHub username..."
                />
                <button style={{ backgroundColor: isDarkMode ? "#0061cf" : "" }}>Search</button>
            </div>
        </div>
    );
};
