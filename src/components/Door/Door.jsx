import "./Door.css";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

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
            <Modal isOpen={modalOpen} onRequestClose={closeDoorModal}>
                <h2>{title}!</h2>
                <a href={webLink} target="_blank" rel="noreferrer">
                    <img src={url} alt={artist} />
                </a>
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
                <button onClick={closeDoorModal}>Close</button>
            </Modal>
        </>
    );
};
