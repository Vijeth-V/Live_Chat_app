import { useContext, useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";
import { ChatContext } from "../context/ChatContext";

export const useFetchLatestMessage = (chat) => {
    const { newMessage, notifications } = useContext(ChatContext);
    const [latestMessage, setLatestMessage] = useState(null);

    useEffect(() => {

        const getMessages = async () => {
            const response = await getRequest(`${baseUrl}/messages/${chat?._id}`);

            if (response.error) {
                return console.log("Error fetching messages", response.error);
            }       
            const lastMessage = response[response.length - 1];

            setLatestMessage(lastMessage);
        };
        getMessages();
    }, [newMessage, notifications]);

    return { latestMessage };
};