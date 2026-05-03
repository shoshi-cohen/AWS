import React from 'react';

interface EventDetailsProps {
  eventId: number;
}

const EventDetails: React.FC<EventDetailsProps> = ({ eventId }) => {
  // כאן תוכל להוסיף לוגיקה כדי להביא את פרטי הארוע מהשרת

  return (
    <div>
      <h2>פרטי הארוע</h2>
      {/* הוסף כאן את פרטי הארוע */}
    </div>
  );
};

export default EventDetails;
