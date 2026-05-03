import React, { useState } from "react";
import { Producer } from "../types/producer";

interface AddProducerProps {
    addProducer: (producer: Producer) => void;
}

const AddProducer: React.FC<AddProducerProps> = ({ addProducer }) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); 
        const newProducer: Producer = { id: 0, name, email, phone }; 
        console.log('Sending producer:', newProducer);
        try {
            const response = await fetch('http://localhost:5000/producers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProducer),
            });
    
            if (response.ok) {
                const addedProducer = await response.json();
                addProducer(addedProducer); 
                setName('');
                setEmail('');
                setPhone('');
                alert("הוספת את: " + addedProducer.name); 
            } else {
                throw new Error('Failed to add producer');
            }
        } catch (error) {
            console.error('Error adding producer:', error);
            alert("שגיאה בהוספת המפיק: " + error.message);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
            <button type="submit">הוספה</button>
        </form>
    );
};

export default AddProducer;
