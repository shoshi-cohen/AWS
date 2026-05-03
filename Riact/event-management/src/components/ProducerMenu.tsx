import React from 'react';
import { Link } from 'react-router-dom';

const ProducerMenu = () => {
    return (
        <div>
            <h2>כניסת מפיקות</h2>
            <Link to="/AddProducer">הוספת מפיקה</Link>
            <Link to="/ProducerList">מפיקה קיימת</Link>
        </div>
    );
};

export default ProducerMenu;
// components/ProducerMenu.tsx
// import React from "react";

// const ProducerMenu = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><a href="./AddProducer">הוספת מפיקה</a></li>
//                 <li><a href="/my-events">מפיקה קיימת</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default ProducerMenu;
