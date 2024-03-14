

import { useState } from "react";
import Button from "../components/Button"
import Modal from "../components/Modal"
import Title from "../components/Title"
import Main from "../components/layout/Main"
import CloseIcon from '@mui/icons-material/Close';

function ModalComponent() {

    const [modalToggle, setmodalToogle] = useState(false);

    const modalOpen = () => {
        setmodalToogle(!modalToggle);
    }

    const modalClose = () => {
        setmodalToogle(false);
    }
    return (
        <Main>

            <Title level={2} text="ModalComponent" />

            <Button label="button" className="button" onClick={modalOpen} />

            <Modal modalToggle={modalToggle}>
                <Button onClick={modalClose}>
                    <CloseIcon />
                </Button>
            </Modal>

        </Main>
    )

}

export default ModalComponent