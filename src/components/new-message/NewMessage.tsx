import "./NewMessageStyles.css";
import {Modal} from "../../ui/modal/Modal";
import {useState} from "react";
import {messagesAPI} from "../../services/MessagesService";
import {IMessage} from "../../models/IMessage";

export const NewMessage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [author, setAuthor] = useState("");
    const [message, setMessage] = useState("");
    const [counter, setCounter] = useState(200);
    // eslint-disable-next-line no-empty-pattern
    const [createMessage, {}] = messagesAPI.useCreateMessageMutation();

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const changeMessage = (message: string) => {
        setMessage(message);
        setCounter(200-message.length);
    }

    const handleCreate = async () => {
        await createMessage({message, author, time: (new Date()).toDateString()} as IMessage);
        setMessage("");
        setAuthor("");
        setCounter(200);
        closeModal();
    };

    return (
        <div className="new-message">
            <button className="button" onClick={openModal}>
                Написать сообщение
            </button>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <div className="modal-content">
                    <div className="modal-title">
                        Введите сообщение:
                    </div>

                    <input
                        maxLength={50}
                        className="author-input"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Имя автора"
                    />

                    <div className="modal-subtitle">
                        Длина сообщения может быть не более 200 символов
                    </div>

                    <textarea
                        maxLength={200}
                        placeholder="Сообщение"
                        className="modal-textarea"
                        value={message}
                        onChange={e => changeMessage(e.target.value)}
                    />

                    <div className="message-counter">
                        {counter}
                    </div>

                    <button className="button" onClick={handleCreate}>
                        Отправить
                    </button>
                </div>
            </Modal>
        </div>
    )
}