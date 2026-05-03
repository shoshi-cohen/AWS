import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MainMenu = () => {
    return (
        <div className="main-menu">
            <h1>ברוכים הבאים למערכת ניהול הפעלות</h1>
            <Link to="/ProducerMenu">כניסת מפיקות</Link>
            <Link to="/users">כניסת משתמשים רגילים</Link>
        </div>
    );
};

export default MainMenu;
// components/MainMenu.tsx
// import React from "react";

// const MainMenu = () => {
//     return (
//         <nav>
//             <ul>
//                 <li><a href="/ProducerMenu">מפיקות</a></li>
//                 <li><a href="/EventList">אירועים</a></li>
//             </ul>
//         </nav>
//     );
// };

// export default MainMenu;
