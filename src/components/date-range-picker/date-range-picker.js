import React, { useState } from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker } from "react-dates"

function DatePicker({ handleDatesChange, startDate, endDate }) {
  const [focusedInput, setFocusedInput] = useState()

  return (
    <div>
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={startDate}
        endDate={endDate}
        required={true}
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={focusedInput => {
          setFocusedInput(focusedInput)
        }}
        minimumNights={0}
        showDefaultInputIcon
        inputIconPosition="after"
      />
    </div>
  )
}

export default DatePicker
