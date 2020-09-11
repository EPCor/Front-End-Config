import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from './action';

export default function Home() {
  const sum = useSelector(state => state.home.data);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Home Page</h2>
      <div onClick={() => dispatch(updateData(sum + 1))}>
        click count: {sum}
      </div>
    </div>
  );
}
