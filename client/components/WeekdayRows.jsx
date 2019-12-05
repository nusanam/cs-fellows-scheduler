import React, { Component } from 'react';

const WeekdayRows = () => {
  const rows = [];
  for (let i = 0; i < 8; i += 1) {
    if (i === 5) rows.push(<div id="row"><h4>-----------------</h4></div>)
    else rows.push(<div id="row"><h4>weekday row</h4></div>)
  }
  return (
    <div>
      {rows}
    </div>
  )
}

export default WeekdayRows;