import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import './Deadlines.css';
const Deadlines=(props) => {
    
    const {dueDate, editorFunction} = props
    const setDueDate = (date) => {
      editorFunction('dueDate', date)
    }
    return (
      <>
        <style>
          {`.date-picker input {
          width: 100%
          }`}
        </style>
        <h3 className='date-picker__header'>
          Due Date
        </h3>
        <DatePicker
          wrapperClassName="date-picker"
          selected={dueDate || new Date()}
          onChange={(date) => setDueDate(date)}
          selectsStart
        />
      </>
    );
  };

export default Deadlines
