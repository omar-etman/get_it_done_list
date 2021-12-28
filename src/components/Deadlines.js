import {useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Deadlines.css';
const Deadlines=() => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    return (
      <>
        <style>
          {`.date-picker input {
          width: 100%
          }`}
        </style>
        {/* <h3 className='date-picker__header'>
          Deadline
        </h3> */}
        <DatePicker
          wrapperClassName="date-picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          wrapperClassName="date-picker"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </>
    );
  };

export default Deadlines
