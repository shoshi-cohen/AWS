import React, { useContext, useState } from "react";
import { ProducerContext } from "../context/ProducerContext";
import { Event } from "../types/event";

const AddEvent = () => {
    const { addEvent } = useContext(ProducerContext)!;
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [producerId, setProducerId] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newEvent: Event = { id: Date.now(), title, date, producerId };
        addEvent(newEvent);
        setTitle("");
        setDate("");
        setProducerId(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Event Title" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="number" value={producerId} onChange={(e) => setProducerId(Number(e.target.value))} placeholder="Producer ID" required />
            <button type="submit">Add Event</button>
        </form>
    );
};

export default AddEvent;