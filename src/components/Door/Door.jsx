import "./Door.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "75%",
        height: "80%",
        border: "black solid 3px",
        boxShadow: "5px 10px #888888",
        "border-radius": "5%",
        backgroundColor: "#E2DED0",
    },
};

export const Door = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const {
        object_id: id,
        image_url: url,
        title,
        notes,
        artist,
        web_link: webLink,
        creation_date: creationDate,
        site_name: siteName,
    } = props.props;
    console.log(props);

    const openDoorModal = () => {
        console.log("hi!");
        setModalOpen(true);
    };

    const closeDoorModal = () => {
        console.log("bye!");
        setModalOpen(false);
    };

    const number = id;
    return (
        <>
            <div className="doorContainer" onClick={openDoorModal}>
                <div className="door">
                    <div className="doorNumber">{number}</div>
                </div>
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeDoorModal}
                style={customStyles}
            >
                <div className="mistleToe" />
                <h3>{title}</h3>
                <div className="mistleToe" />
                <div className="imageContainer">
                    <a href={webLink} target="_blank" rel="noreferrer">
                        <img src={url} alt={artist} />
                    </a>
                </div>
                <ul>
                    <li>Artist: {artist}</li>
                    <li>Date: {creationDate}</li>
                    <li>
                        Source:{" "}
                        <a href={webLink} target="_blank" rel="noreferrer">
                            {siteName}
                        </a>
                    </li>
                </ul>
                <p>{notes}</p>
                <div className="buttonContainer">
                    <button onClick={closeDoorModal}>Close</button>
                </div>
            </Modal>
        </>
    );
};
