import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementByAmountAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

const Counter = ({
  count,
  increment,
  decrement,
  incrementByAmount,
  incrementByAmountAsync,
}) => {
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementByAmountAsync(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ count: selectCount(state) });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { increment, decrement, incrementByAmount, incrementByAmountAsync },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
