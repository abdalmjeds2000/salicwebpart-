import React, {useState, useEffect} from 'react'
import './HistoryNavigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const HistoryNavigation = (props) => {
  const [cTime, setTime] = useState(new Date().toUTCString().slice(0, 16) + ' ' + new Date().toLocaleTimeString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toUTCString().slice(0, 16) + ' ' + new Date().toLocaleTimeString());
    }, 1000);
  });


  
  return (
    <div className='history-navigation'>
      <div className="links">
        <NavLink to="/home">SALIC Gate</NavLink>
        {props.children}
      </div>
      <div className="time">
        <FontAwesomeIcon icon={faCalendarDays} /> {cTime}
      </div>
    </div>
  )
}

export default HistoryNavigation