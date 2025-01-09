import { useState } from 'react';
 
const Default = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
     
        
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Contador :  {count}
        </button>
      
      </div>
      
    </div>
  );
};

 

export default Default;
