import { createContext, useContext, useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import LearnXRoute from "./routes";
import ToasterProvider from "./providers/ToasterProvider";
import "./assets/css/style.css";
import { store } from "./store";

export const HeaderTextContext = createContext();

function App() {
  const [headerText, setHeaderText] = useState("");
  return (
    <HeaderTextContext.Provider value={{ headerText, setHeaderText }}>
      <Provider store={store}>
        <RouterProvider router={LearnXRoute} />
      </Provider>
      <ToasterProvider />
    </HeaderTextContext.Provider>
  );
}

export const useTitle = () => {
  return useContext(HeaderTextContext);
};

export default App;
