import "./style.scss";

interface Props {
    following: string;
    followers: string;
    isDarkMode: boolean;
    repos: string;
}

const Audience = (props: Props) => {
    const { followers, following, isDarkMode, repos } = props;
    return (
        <div className="audience" style={{ backgroundColor: isDarkMode ? "#141d2f" : "#f6f8ff" }}>
            <div>
                <p style={{ color: isDarkMode ? "#FFF" : "#4b6a9b" }}>repos</p>
                <h3 style={{ color: isDarkMode ? "#FFF" : "#2b3442" }}>{repos}</h3>
            </div>
            <div>
                <p style={{ color: isDarkMode ? "#FFF" : "#4b6a9b" }}>followers</p>
                <h3 style={{ color: isDarkMode ? "#FFF" : "#2b3442" }}>{followers}</h3>
            </div>
            <div>
                <p style={{ color: isDarkMode ? "#FFF" : "#4b6a9b" }}>following</p>
                <h3 style={{ color: isDarkMode ? "#FFF" : "#2b3442" }}>{following}</h3>
            </div>
        </div>
    );
};

export default Audience;
