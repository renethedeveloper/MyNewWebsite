import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { MyContext } from '../../Context';
import "./index.css";

const EventPage = () => {
  const { eventData, setEventData } = useContext(MyContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3000/events");

        setEventData(response.data);
        console.log("event data", response.data)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle the error (e.g., show a message to the user)
      }
    };

    fetchEvents();
  }, [setEventData]);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div>
      <div className='container'>
        <img id='drawnKristy' src="/Images/DrawnKristy.jpg" alt="drawnKristy" />
        <div className='eventBox'>
          {eventData.map((event) => (
            <div key={event.id} className='eventItem'>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventPage;
