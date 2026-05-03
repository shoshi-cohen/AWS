import React, { useContext } from "react";
import { ProducerContext } from "../context/ProducerContext";
import { Event } from "../types/event";

const UserEventList = () => {
    const { events } = useContext(ProducerContext)!;

    return (
        <ul>
            {events.map((event: Event) => (
                <li key={event.id}>
                    <a href={`/events/${event.id}`}>{event.title}</a>
                </li>
            ))}
        </ul>
    );
};

export default UserEventList;
