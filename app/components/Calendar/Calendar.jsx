import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import PropTypes from 'prop-types';
import { shiftDate, format } from './date';

import './styles.css';

const Calendar = ({ values, onClick }) => {
  const onClickHandle = value => {
    if (value) {
      onClick(format(value.date, 'YYYY-MM-DD'));
    } else {
      onClick(null);
    }
  };
  const classForValue = value => {
    if (!value) {
      return 'color-empty';
    }
    if (value && value.count <= 4) {
      return `color-github-${value.count}`;
    }
    return 'color-github-4';
  };

  const tooltipDataAttrs = value => {
    if (value && value.date && value.count) {
      return {
        'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
          value.count
        }`
      };
    }
    return {
      'data-tip': 'no data'
    };
  };

  const startDate = new Date(new Date().getFullYear(), 0, 1);
  const endDate = shiftDate(startDate, 360);
  return (
    <CalendarHeatmap
      startDate={startDate}
      endDate={endDate}
      values={values}
      classForValue={classForValue}
      tooltipDataAttrs={tooltipDataAttrs}
      showWeekdayLabels
      onClick={onClickHandle}
    />
  );
};

Calendar.propTypes = {
  values: PropTypes.array
};

export default Calendar;
