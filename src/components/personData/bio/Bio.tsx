import "./style.scss";

interface Props {
    bio: string;
    isDarkMode: boolean;
}

const Bio = (props: Props) => {
    const { bio, isDarkMode } = props;
    return (
        <div className="bio">
            <p style={{ color: isDarkMode ? "#b3b3b3" : "" }}>{bio == null ? "This profile has no bio" : bio}</p>
        </div>
    );
};

export default Bio;
