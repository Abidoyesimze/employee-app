import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./datePicker.css";

function ReactDatePicker() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const filterWeekends = (date) => {
        // Return false if weekends should be disabled
        // For example, to disable weekends:
        // return date.day() !== 0 && date.day() !== 6;
        return true;
    };

    return (
        <div className="date">
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                filterDate={filterWeekends}
                showTimeSelect
                timeIntervals={30}
                timeFormat="hh:mm"
            />
            <button type="next" value="send" className="nextBtn">Next</button>
        </div>
    );
}

export default ReactDatePicker;
