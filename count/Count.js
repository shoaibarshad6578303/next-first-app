import { useSelector } from 'react-redux'
import {  increment } from './countSlide'
import { useDispatch } from 'react-redux';


export default function Count() {

  const { count } = useSelector(state => state.count)
  const dispatch= useDispatch();

  return (
    <>
      <p>Counter: { count }</p>
      <button onClick={() => { dispatch(increment())}}>Update</button>
    </>
  );
}