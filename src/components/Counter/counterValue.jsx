import { useSelector} from 'react-redux';

const  Counter  = () => {
    const count = useSelector((state) => state.counter.value);
  
    
  
    return (
      <div>
        <div>
         
          <br />
  
  <h1>Counter value : </h1>
          <span>{count}</span>
  
  
      <br />
     
        </div>
      </div>
    );
  }
  
  export default Counter;