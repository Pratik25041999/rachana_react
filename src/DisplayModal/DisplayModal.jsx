import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const DisplayModal = ({
    show, onHide, startIndex
}) => {
    // const [selectIndex, setSelectIndex] = useState(startIndex)
    const images = ["drone_view_compressed.jpeg", "1bhk.jpg", "2bhk.jpg"]
    return (
        <Modal style={{ maxWidth: 'unset' }} show={show} onHide={onHide} backdrop="static" keyboard={false}>
            <Modal.Dialog style={{width: 'fit-content', maxWidth:'unset'}}>

                <Modal.Body style={{ margin: "0", padding: "0", width: 'fit-content' }}>
                    {images.map((imgUrl, index) => {
                        if (index === startIndex) {
                            return (
                                <div style={{ width: 'fit-content' }}>
                                    <img style={{ width: '90vw' }} src={`./${imgUrl}`} />
                                </div>
                            )
                        }
                        return <></>
                    })}
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    )
}

export default DisplayModal