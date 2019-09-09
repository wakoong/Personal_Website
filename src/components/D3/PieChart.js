import * as React from 'react';
import * as d3 from 'd3';

const data = [17000, 24000];

export const SimplePieChart = () => {
  const height = 300;
  const width = 300;

  let pie = d3.pie()(data);

  return (
    <svg height={height} width={width}>
      <g transform={`translate(${width / 2},${height / 2})`}>
        <Slice pie={pie} />
      </g>
    </svg>
  );
};

const Slice = props => {
  let { pie } = props;

  let arc = d3
    .arc()
    .innerRadius(80)
    .outerRadius(120);

  let interpolate = d3.interpolateRgb('#eaaf79', '#bc3358');

  return pie.map((slice, index) => {
    let sliceColor = interpolate(index / (pie.length - 1));

    return <path key={index} d={arc(slice)} fill={sliceColor} />;
  });
};
