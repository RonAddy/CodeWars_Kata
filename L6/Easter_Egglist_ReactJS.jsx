const React = require('react');

const EggList = (props) => {
  return (
    <ul>
      {props.eggs.map( (element, index) =>
      <EasterEgg key={index} name={element}/>
      )}
    </ul>
  )
};

const EasterEgg = (props) => {
  return (
    <li>{props.name}</li>
  )
};