import "./Door.css";

export const Door = ({ ...props }) => {
    const number = 1;
    return (
        <div className="doorContainer">
            <div className="door">
                <div className="number">{number}</div>
            </div>
        </div>
    );
};
