/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "react-dates/initialize";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import koLocale from "moment/locale/ko";
import moment from "moment";
import "moment/locale/ko";
import uuid from "react-uuid";
import "./Calendar.scss";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      small: false,
      block: false,
      orientation: "horizontal",
    };
  }

  render() {
    const { startDate, endDate } = this.state;
    moment.locale("ko", koLocale);
    return (
      <div className="Calendar">
        <DateRangePicker
          startDate={startDate}
          startDateId="startDate"
          endDate={endDate}
          endDateId="endDate"
          onDatesChange={({ startDate, endDate }) => {
            this.setState({ startDate, endDate });
            this.props.userDateHandler(startDate, endDate);
          }}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => this.setState({ focusedInput })}
          numberOfMonths="1"
          showInputs="true"
          block={this.state.block}
          small={this.state.small}
        />
      </div>
    );
  }
}

export default Calendar;
