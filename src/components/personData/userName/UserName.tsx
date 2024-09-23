import "./style.scss";

interface Props {
    userName: string;
}
const UserName = (props: Props) => {
    const { userName } = props;
    return (
        <div className="userName">
            <span>@{userName}</span>
        </div>
    );
};

export default UserName;
