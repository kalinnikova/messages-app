import "./IndexPageStyles.css";
import {messagesAPI} from "../../services/MessagesService";
import {Link} from "react-router-dom";
import {useState} from "react";
import {NewMessage} from "../../components/new-message/NewMessage";
import {IMessage} from "../../models/IMessage";

export const IndexPage = () => {
    const [filterValue, setFilterValue] = useState("");
    const {data: messages, isLoading, error} = messagesAPI.useFetchAllMessagesQuery(filterValue);

    return (
        <div className="index-page">
            {isLoading && <h1>Идет загрузка...</h1>}

            {error && <h1>Произошла ошибка при загрузке</h1>}

            <div className="row">
                <NewMessage />

                {messages && (
                    <input
                        className="search"
                        placeholder="Поиск по сообщениям"
                        value={filterValue} onChange={event => setFilterValue(event.target.value)}
                    />
                )}
            </div>

            {messages && messages.map((message: IMessage) => (
                <div key={message.id} className="message">
                    <div>
                        {message.message}
                    </div>

                    <div className="message-bottom">
                        <Link to={`/${message.author}`}>
                            <div className="message-author">
                                {message.author}
                            </div>
                        </Link>

                        <div className="message-time">
                            {(new Date(message.time)).toDateString()}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}