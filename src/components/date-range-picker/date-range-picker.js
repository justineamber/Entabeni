import React, { Component } from "react"
import "react-dates/initialize"
import "react-dates/lib/css/_datepicker.css"
import { DateRangePicker } from "react-dates"

class DatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    }
  }

  render() {
    return (
      <div>
        <DateRangePicker
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate })
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            this.setState({ focusedInput })
          }}
          minimumNights={0}
          initialStartDate={{
            _isAMomentObject: true,
            _isUTC: false,
            _pf: {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
            },
          }}
          initialEndDate={{
            _isAMomentObject: true,
            _isUTC: false,
            _pf: {
              empty: false,
              unusedTokens: [],
              unusedInput: [],
            },
          }}
          showDefaultInputIcon
          inputIconPosition="after"
          autoFocusEndDate
        />
      </div>
    )
  }
}

export default DatePicker
