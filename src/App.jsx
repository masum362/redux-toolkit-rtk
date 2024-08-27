// import { decrement, increment, incrementByAmount } from './redux/features/counter/counterSlice';
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsQuery } from './service/product';

function App() {

  // const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch();

  const {data,isError,isLoading} = useGetProductsQuery()
  console.log(data)

  // const handleIncrement = () => {
  //   dispatch(increment())
  // }
  // const handleDecrement = () => {
  //   dispatch(decrement())
  // }

  // const handleFormSubmit = (e) => {
  //   e.preventDefault()
  //   const inputValue = parseInt(e.target.inputNumber.value)
  //   if(inputValue){
  //     dispatch(incrementByAmount(inputValue));
  //   }
  // }

  return (
    <>
      {/* <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button> */}

      {/* <form onSubmit={handleFormSubmit}>
        <input type="number" name="inputNumber" id="inputNumber" />
        <button>Add</button>
      </form> */}
      {isError ? <h1>Something went wrong!</h1> : (
        isLoading ? <h1>Loading...</h1> : (
          data && data.products.map(item => (
            <div key={item.id}>
              <h1>{item.title}</h1>
            </div>
          ))
        )
      )}
    </>
  )
}

export default App
