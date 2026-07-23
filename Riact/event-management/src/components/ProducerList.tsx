import React, { useEffect, useState } from 'react';
import { API_BASE } from '../config';

interface Producer {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const ProducerList: React.FC = () => {
    const [producers, setProducers] = useState<Producer[]>([]);
    const [searchEmail, setSearchEmail] = useState<string>('');
    const [editingProducer, setEditingProducer] = useState<Producer | null>(null);

    useEffect(() => {
        const fetchProducers = async () => {
            try {
                const response = await fetch(`${API_BASE}/producers`);
                const data = await response.json();
                setProducers(data);
            } catch (error) {
                console.error('Error fetching producers:', error);
            }
        };

        fetchProducers();
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchEmail(event.target.value);
    };

    const handleEdit = (producer: Producer) => {
        setEditingProducer(producer);
    };

    const handleSave = (updatedProducer: Producer) => {
        setProducers(producers.map(producer => 
            producer.id === updatedProducer.id ? updatedProducer : producer
        ));
        setEditingProducer(null);
    };

    const filteredProducers = producers.filter(producer => 
        producer.email.includes(searchEmail)
    );

    return (
        <div>
            <h2>רשימת המפיקות</h2>
            <input 
                type="text" 
                value={searchEmail} 
                onChange={handleSearchChange} 
                placeholder="חפש לפי כתובת מייל" 
            />
            <ul>
                {filteredProducers.map(producer => (
                    <li key={producer.id}>
                        {editingProducer?.id === producer.id ? (
                            <div>
                                <input 
                                    type="text" 
                                    value={producer.name} 
                                    onChange={(e) => handleSave({ ...producer, name: e.target.value })} 
                                />
                                <input 
                                    type="email" 
                                    value={producer.email} 
                                    onChange={(e) => handleSave({ ...producer, email: e.target.value })} 
                                />
                                <input 
                                    type="text" 
                                    value={producer.phone} 
                                    onChange={(e) => handleSave({ ...producer, phone: e.target.value })} 
                                />
                                <button onClick={() => handleSave(producer)}>שמור</button>
                            </div>
                        ) : (
                            <div>
                                {producer.name} - {producer.email} - {producer.phone}
                                <button onClick={() => handleEdit(producer)}>ערוך</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProducerList;
