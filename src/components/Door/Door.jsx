import "./Door.css";

export const Door = (props) => {
    const { object_id: id } = props.props;

    const number = id;
    return (
        <div className="doorContainer">
            <div className="door">
                <div className="doorNumber">{number}</div>
            </div>
        </div>
    );
};
