import { Footer, Navbar, News, QuickStats, Reminders } from '../components';
import React from "react";

const Home = () => {
  return (
    <div className="App">
        <Navbar />
        <News />
        <Reminders />
        <QuickStats />
        <Footer />
    </div>
  );
};

export default Home;
