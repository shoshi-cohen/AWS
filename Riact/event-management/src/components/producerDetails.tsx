import React, { useContext } from "react";
import { ProducerContext } from "../context/ProducerContext";
import { Producer } from "../types/producer";

const ProducerDetails = ({ producerId }: { producerId: number }) => {
    const { producers } = useContext(ProducerContext)!;
    const producer = producers.find(p => p.id === producerId);

    if (!producer) return <div>Producer not found</div>;

    return (
        <div>
            <h2>{producer.name}</h2>
            <p>Email: {producer.email}</p>
            <p>Phone: {producer.phone}</p>
            {/* הוסף אפשרות לעריכה כאן */}
        </div>
    );
};

export default ProducerDetails;
