import {Link, useParams} from "react-router-dom";
import {messagesAPI} from "../../services/MessagesService";
import {IMessage} from "../../models/IMessage";
import "./AuthorPageStyles.css";

export const AuthorPage = () => {
    let {authorLogin} = useParams();
    const {data: messages} = messagesAPI.useFetchAuthorsMessagesQuery(authorLogin ?? "");

    return (
        <div className="author-page">
            {
                messages && messages.length > 0 ? (
                    <div>
                        <h1>
                            Автор: {authorLogin}
                        </h1>

                        <h2>
                            Сообщения автора:
                        </h2>

                        {
                            messages && messages.map((el: IMessage) => (
                                <div key={el.id} className="message">
                                    <div>
                                        {el.message}
                                    </div>

                                    <div className="message__bottom">
                                        <Link to={`/${el.author}`}>
                                            <div className="message__author">
                                                {el.author}
                                            </div>
                                        </Link>

                                        <div className="message__time">
                                            {(new Date(el.time)).toDateString()}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>Такого автора не существует</div>
                )
            }
        </div>
    )
}
