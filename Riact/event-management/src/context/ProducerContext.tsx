import React, { createContext, useState, ReactNode } from "react";
import { Producer } from "../types/producer";
import { Event } from "../types/event";

type ProducerContextType = {
    producers: Producer[];
    events: Event[];
    addProducer: (producer: Producer) => void;
    updateProducer: (producer: Producer) => void;
    addEvent: (event: Event) => void;
    deleteEvent: (eventId: number) => void;
};

export const ProducerContext = createContext<ProducerContextType | undefined>(undefined);

export const ProducerProvider = ({ children }: { children: ReactNode }) => {
    const [producers, setProducers] = useState<Producer[]>([]);
    const [events, setEvents] = useState<Event[]>([]);

    const addProducer = (producer: Producer) => setProducers((prev) => [...prev, producer]);
    const updateProducer = (updatedProducer: Producer) => {
        setProducers((prev) => prev.map((p) => (p.id === updatedProducer.id ? updatedProducer : p)));
    };
    const addEvent = (event: Event) => setEvents((prev) => [...prev, event]);
    const deleteEvent = (eventId: number) => setEvents((prev) => prev.filter((event) => event.id !== eventId));

    return (
        <ProducerContext.Provider value={{ producers, events, addProducer, updateProducer, addEvent, deleteEvent }}>
            {children}
        </ProducerContext.Provider>
    );
};
