import "./style.scss";

interface Props {
    isDarkMode: boolean;
    registerDate: string;
    fullName: string;
}
const FullName = (props: Props) => {
    const { fullName, registerDate, isDarkMode } = props;

    const insertSpaces = (word: string): any => {
        let result = "";

        for (let i = 0; i < word.length; i += 10) {
            result += word.substring(i, i + 10) + " ";
        }

        return result.trim();
    };

    return (
        <div className="fullName">
            <h2 style={{ opacity: fullName == null ? "0.4" : "1", color: isDarkMode ? "#FFF" : "#000" }}>
                {fullName == null ? "name not specified" : fullName}
            </h2>
            <span>{insertSpaces(registerDate)}</span>
        </div>
    );
};

export default FullName;
