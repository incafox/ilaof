import React, { useState } from 'react';
import LeftPanel from "./LeftPanel";
import IconsUserSelection from "./IconsUserSelection";
import CreateMessageButton from "./CreateMessageButton";
import CreateMessage from "./Views/CreateMessage";
import FilteredMessages from "./FilteredMessages";
import Inbox from "./Views/Inbox";
import Sent from "./Views/Sent";
import Drafts from "./Views/Drafts";
import Trash from "./Views/Trash";
import Favs from "./Views/Favs";

export default function Mensajes() {

    const [allMessages, setAllMessages] = useState([
        { id_message: 1000, id_student: 1, title: "Javascript", description: "Deseo aprender javascript", date: "21/01/2020", star: false, selected: false },
        { id_message: 1001, id_student: 1, title: "React", description: "Deseo aprender react", date: "22/01/2020", star: false, selected: false },
        { id_message: 1002, id_student: 1, title: "Angular", description: "Deseo aprender angular", date: "23/01/2020", star: false, selected: false },
        { id_message: 1003, id_student: 1, title: "Node", description: "Deseo aprender Node", date: "24/01/2020", star: false, selected: false },
        { id_message: 1004, id_student: 1, title: "React native", description: "Deseo aprender React native", date: "25/01/2020", star: false, selected: false }
    ])

    const [globalSelection, setGlobalSelection] = useState(false);

    const applyGlobalSelection = value => {
        setGlobalSelection(value);
        setAllMessages(allMessages.map(m => { return { id_message: m.id_message, id_student: m.id_student, title: m.title, description: m.description, date: m.date, star: m.star, selected: value } }));
    }

    const applyStar = idMessage => {
        const listMessages = allMessages.map(m => {
            if (m.id_message !== idMessage) {
                return m;
            } else {
                return { id_message: m.id_message, id_student: m.id_student, title: m.title, description: m.description, date: m.date, star: !m.star, selected: m.selected }
            }
        })
        setAllMessages(listMessages);
    }

    const applyCheckBox = (value, idMessage) => {
        const listMessages = allMessages.map(m => {
            if (m.id_message !== idMessage) {
                return m;
            } else {
                return { id_message: m.id_message, id_student: m.id_student, title: m.title, description: m.description, date: m.date, star: m.star, selected: value }
            }
        })
        setAllMessages(listMessages);
    }

    const [deletedMessages, setDeletedMessages] = useState([]);
    const deleteSelectedMessages = () => {
        setDeletedMessages(allMessages.filter(msg => msg.selected === true));
        setAllMessages(allMessages.filter(msg => msg.selected === false));
    }

    const [filteredMessages, setFilteredMessages] = useState([]);
    const searchTitle = title => {
        setFilteredMessages(allMessages.filter(m => m.title.includes(title)));
    }

    const onSendMessage = message => setAllMessages([...allMessages, message]);

    const [url, setUrl] = useState("messages");

    const onChangeUrl = new_url => setUrl(new_url);

    const favouriteMessages = allMessages.filter(m => m.star === true);

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="card mb-8" >
                    <div className="row no-gutters">
                        <div className="col-md-3">
                            <div className="row" style={{ padding: "20px" }}>
                                <CreateMessageButton onChangeUrl={onChangeUrl} />
                            </div>
                            <div className="row" style={{ padding: "20px" }}>
                                <LeftPanel onChangeUrl={onChangeUrl} />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="card-body">
                                {url === "/messages/createMessage" && <CreateMessage onSendMessage={onSendMessage} />}
                                {
                                    url !== "/messages/trash" &&
                                    <IconsUserSelection globalSelection={globalSelection}
                                        applyGlobalSelection={applyGlobalSelection}
                                        deleteSelectedMessages={deleteSelectedMessages}
                                        searchTitle={searchTitle} />
                                }
                                {url === "/messages/inbox" && <Inbox messages={allMessages}
                                    applyStar={applyStar}
                                    applyCheckBox={applyCheckBox} />}
                                {url === "/messages/sent" && <Sent />}
                                {url === "/messages/drafts" && <Drafts />}
                                {url === "/messages/trash" && <Trash deletedMessages={deletedMessages} />}
                                {url === "/messages/favs" && <Favs favouriteMessages={favouriteMessages} />}
                            </div>
                            <FilteredMessages filteredMessages={filteredMessages} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
    )
}
