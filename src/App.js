//components
import Home from "./components/Home";
import DataProvider from "./context/DateProvider";

const App = () => {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
};

export default App;
