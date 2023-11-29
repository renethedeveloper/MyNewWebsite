import React, { useContext } from 'react';
import { MyContext } from '../../Context';
import "./index.css";

const EventPage = () => {
  const { eventData } = useContext(MyContext);

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
