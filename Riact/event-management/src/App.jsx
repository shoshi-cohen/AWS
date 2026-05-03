import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Users from './components/Users';
import AddProducer from './components/AddProducer';
import ProducerList from './components/ProducerList';
import ProducerMenu from './components/ProducerMenu';
import { ProducerProvider } from './context/ProducerContext';

function App() {
  return (
    <ProducerProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/users" element={<Users />} />
        <Route path="/AddProducer" element={<AddProducer />} />
        <Route path="/ProducerList" element={<ProducerList />} />
        <Route path="/ProducerMenu" element={<ProducerMenu />} />
      </Routes>
    </Router>
    </ProducerProvider>
  );
}
export default App;

// import React from "react";
// import { ProducerProvider } from "./context/ProducerContext";
// import AddProducer from "./components/AddProducer";
// import EventList from "./components/EventList";

// const App = () => {
//     return (
//         <ProducerProvider>
//             <h1>Event Management System</h1>
//             <AddProducer />
//             <EventList />
//             {/* הוסף קומפוננטות נוספות לפי הצורך */}
//         </ProducerProvider>
//     );
// };

