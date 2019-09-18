import * as React from 'react';
import * as d3 from 'd3';

const data = [1, 2, 3, 4, 5];

export const TreeMap = (props) => {
  const margin = {top: 10, right: 10, bottom: 10, left: 10},
  const width = 445 - margin.left - margin.right,
  const height = 445 - margin.top - margin.bottom;

  d3.selectAll()

  let treemap = d3.treemap(data);

  return <svg>{treemap}</svg>;
};
