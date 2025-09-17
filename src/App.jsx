import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-slate-900 h-20">
        <div className="text-3xl text-amber-300 grid place-content-center ">
          Hi there
        </div>
      </div>
    </>
  );
}

export default App;
