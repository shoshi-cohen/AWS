// components/EventList.tsx
import React, { useContext } from "react";
import { ProducerContext } from "../context/ProducerContext";
import { Event } from "../types/event";

const EventList = () => {
    const { events } = useContext(ProducerContext)!;

    return (
        <ul>
            {events.map((event: Event) => (
                <li key={event.id}>{event.title}</li>
            ))}
        </ul>
    );
};

export default EventList;
