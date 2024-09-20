import "./style.scss";

interface Props {
    title: string;
    isDarkMode: boolean;
}
export const Title = (props: Props) => {
    return (
        <h1
            style={{ color: props.isDarkMode ? "#fff" : "" }}
            className="title"
            onClick={() => window.location.reload()}
        >
            {props.title}
        </h1>
    );
};
