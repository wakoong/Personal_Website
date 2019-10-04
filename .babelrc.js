const isTest = String(process.env.NODE_ENV) === 'test';

// module.exports = {
//   presets: [['env', {modules:{ isTest ? 'commonjs' : false }}], 'react'],
//   plugins: [
//     'syntax-dynamic-import',
//     'transform-class-properties',
//     'transform-object-rest-spread'
//   ]
// }

module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['transform-class-properties', 'transform-object-rest-spread'],
};
