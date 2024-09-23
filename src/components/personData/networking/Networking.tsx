import "./style.scss";
import * as Icon from "react-bootstrap-icons";

interface Props {
    twitterUsername: string;
    location: string;
    profileUrl: string;
    company: string;
    isDarkMode: boolean;
}

const Networking = (props: Props) => {
    const { twitterUsername, location, profileUrl, company, isDarkMode } = props;
    return (
        <div className="networking">
            <div className="top-container">
                <div className="location" style={{ opacity: location == null ? "0.4" : "1" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#4B6A9B"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
                    </svg>
                    <p style={{ color: isDarkMode ? "#e7e7e7" : "" }}>
                        {location == null ? "Not Available" : location}
                    </p>
                </div>
                <div className="twitter" style={{ opacity: twitterUsername == null ? "0.4" : "1" }}>
                    <Icon.TwitterX fill="#4B6A9B" />
                    <p style={{ color: isDarkMode ? "#e7e7e7" : "" }}>
                        {twitterUsername == null ? "Not Available" : twitterUsername}
                    </p>
                </div>
            </div>
            <div className="bottom-container">
                <div className="profile-url" style={{ opacity: profileUrl == null ? "0.4" : "1" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#4B6A9B"
                        className="bi bi-link-45deg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                    </svg>
                    <a style={{ color: isDarkMode ? "#e7e7e7" : "" }} href={profileUrl} target="__blank">
                        {profileUrl == null ? "Not Available" : profileUrl}
                    </a>
                </div>
                <div className="company" style={{ opacity: company == null ? "0.4" : "1" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#4B6A9B"
                        className="bi bi-buildings"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"></path>
                        <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"></path>
                    </svg>
                    <p style={{ color: isDarkMode ? "#e7e7e7" : "" }}>{company == null ? "Not Available" : company}</p>
                </div>
            </div>
        </div>
    );
};

export default Networking;
