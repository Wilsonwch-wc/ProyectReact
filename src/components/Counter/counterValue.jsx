import { useSelector} from 'react-redux';

const  Counter  = () => {
    const count = useSelector((state) => state.counter.value);
  
    
  
    return (
      <div>
        <div>
         
          <br />
  
  <h1>Counter value : </h1>
          <h2>{count}</h2>
  
  
      <br />
     
        </div>
      </div>
    );
  }
  
  export default Counter;