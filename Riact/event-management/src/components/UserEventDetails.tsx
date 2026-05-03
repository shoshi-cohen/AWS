import React, { useContext } from "react";
import { ProducerContext } from "../context/ProducerContext";
import { Event } from "../types/event";

const UserEventDetails = ({ eventId }: { eventId: number }) => {
    const { events } = useContext(ProducerContext)!;
    const event = events.find(e => e.id === eventId);

    if (!event) return <div>Event not found</div>;

    return (
        <div>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            {/* הוסף פרטים נוספים על המפיק אם יש צורך */}
        </div>
    );
};

export default UserEventDetails;
