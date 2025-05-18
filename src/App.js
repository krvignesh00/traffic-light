import { useEffect, useState } from "react";

const lightConfig = {
  red: {
    duration: 4000,
    next: "yellow",
  },
  yellow: {
    duration: 3000,
    next: "green",
  },
  green: {
    duration: 4000,
    next: "red",
  },
};

const App = () => {
  const [light, setLight] = useState("yellow");

  useEffect(() => {

    const interval = setInterval(()=>{
      setLight(lightConfig[light].next);
    },lightConfig[light].duration);

    return ()=> {
      clearTimeout(interval);
      console.log('Interval cleared!');
    }
  }, [light]);

  return (
    <div className="App">
      <h1>Traffic Light</h1>
      <div className="container">
        <div className={`round ${light === "red" ? "red" : ""}`}></div>
        <div className={`round ${light === "yellow" ? "yellow" : ""}`}></div>
        <div className={`round ${light === "green" ? "green" : ""}`}></div>
      </div>
    </div>
  );
};

export default App;
