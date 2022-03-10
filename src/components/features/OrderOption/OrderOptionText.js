import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './OrderOption.module.scss';


const OrderOptionText = ({currentValue, setOptionValue}) => (
    
  <input 
  type="text" value={currentValue} onChange={event => setOptionValue(event.currentTarget.value)}></input>
  
)


export default OrderOptionText;