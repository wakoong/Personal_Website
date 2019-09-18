import * as React from 'react';
import * as d3 from 'd3';

export const SimplePieChart = (props) => {
  const height = 300;
  const width = 300;

  d3.select('.piechart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  let pie = d3.pie()(props.data);

  return (
    <svg>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = (props) => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(120);

  let interpolate = d3.interpolateRgb('#efb21f', '#083831', '#c7c7c7');

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key={index} d={arc(slice)} fill={sliceColor} />;
  });
};
