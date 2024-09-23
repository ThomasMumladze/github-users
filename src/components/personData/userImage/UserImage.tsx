import "./style.scss";

interface Props {
    img: string;
}
const UserImage = (props: Props) => {
    return (
        <div className="image-user">
            <img src={props.img} alt="..." />
        </div>
    );
};

export default UserImage;
