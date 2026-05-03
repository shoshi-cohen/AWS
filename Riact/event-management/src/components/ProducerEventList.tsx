import React from 'react';
import EventList from './EventList';

const ProducerEventList: React.FC = () => {
  const events = [
    { id: 1, name: 'אירוע ראשון' },
    { id: 2, name: 'אירוע שני' },
    { id: 3, name: 'אירוע שלישי' },
  ];

  return (
    <div>
      <h2>רשימת הארועים של המפיקה</h2>
      <EventList events={events}></EventList>
    </div>
  );
};

export default ProducerEventList;
