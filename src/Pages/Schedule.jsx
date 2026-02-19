import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Schedule/Header";
import SessionList from "../Components/Schedule/SessionList";
import { useState } from "react";
import ScheduleTabs from "../Components/Schedule/ScheduleTabs";
import sessions from "../Components/Schedule/Sessions";
import SessionCard from "../Components/Schedule/SessionCard";
import Footer from "./Footer";

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const filteredSessions = sessions.filter(
    session => session.status === activeTab
  );

  const sortedSessions = filteredSessions.sort((a, b) => {
    if (activeTab === "upcoming") {
      return new Date(a.date) - new Date(b.date); 
    } else {
      return new Date(b.date) - new Date(a.date); 
    }
  });

  return (
    <>
      <Navbar />
      <Header />
      <div style={{ padding: "40px" }}>
        <h2>My Schedule</h2>

        <ScheduleTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <p>Currently Viewing: {activeTab}</p>

        {sortedSessions.length === 0 ? (
        <EmptyState
          message={`No ${activeTab} sessions found.`}
          buttonText="Book a Session"
        />
      ) : (
        sortedSessions.map(session => (
          <SessionCard key={session.id} session={session} />
        ))
      )}
      </div>
      <Footer />
    </>
  );
}
