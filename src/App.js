import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import {TABS} from "./constants/tabs";

import './App.scss';
import {useState} from "react";

function App() {
    const  [activeTab, setActiveTab] = useState(TABS[0]?.key);
  const user = {
    firstName: "Alex",
    lastName: "Bla"
  }
  return (
      <div className="App">
        <Menu user={user}/>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS}/>
      </div>
  );
}

export default App;
