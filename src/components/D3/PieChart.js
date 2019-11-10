import * as React from 'react';
import * as d3 from 'd3';

const Arc = ({ data, index, createArc, colors, format }) => {
  return (
    <g key={index} className='arc'>
      <path className='arc' d={createArc(data)} fill={colors[index]} />
      <text
        transform={`translate(${createArc.centroid(data)})`}
        textAnchor='middle'
        alignmentBaseline='middle'
        fill='white'
        fontSize='10'>
        {data.data.name}
      </text>
    </g>
  );
};

const Pie = (props) => {
  const createPie = d3
    .pie()
    .value((d) => d.value)
    .sort(null);
  const createArc = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
  const colors = ['#84c5b2', '#41b6c4', '#2c7fb8', '#253494'];
  const format = d3.format('.2f');
  const data = createPie(props.data);

  return (
    <svg width={props.width} height={props.height}>
      <g transform={`translate(${props.translateX} ${props.translateY})`}>
        {data.map((d, i) => (
          <Arc
            key={i}
            data={d}
            index={i}
            createArc={createArc}
            colors={colors}
            format={format}
          />
        ))}
      </g>
    </svg>
  );
};

export default Pie;
