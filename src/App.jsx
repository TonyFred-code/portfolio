import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>{!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
  );
}

export default App;
