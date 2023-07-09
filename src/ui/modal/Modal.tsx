import "./ModalStyles.css";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const Modal = (props: ModalProps) => (
    props.isOpen ? (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-close" onClick={props.onRequestClose}>&#10006;</div>

                {props.children}
            </div>
        </div>
    ) :
    null
)