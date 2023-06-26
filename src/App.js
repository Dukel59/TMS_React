import {useState} from "react";

import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import Input from "./components/form/input/input";
import Textarea from "./components/form/textarea/textarea";
import {TABS} from "./constants/tabs";

import './App.scss';

const user = {
    firstName: "Alex",
    lastName: "Bla"
}

const formDefaultValues = {
    name: {key: 'input', value: 'test1', label: 'Name'},
    msg: {key: 'textarea', value: 'test2', label: 'Message'}
}


function App() {
    const  [activeTab, setActiveTab] = useState(TABS[0]?.key);
    const [formValues, setFormValues] = useState(formDefaultValues);
    const setNewValue = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: { ...formValues[key], value: value }
        })
    }

  return (
      <div className="App">
        <Menu user={user}/>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS}/>
          <Input value={formValues.name} label={formValues.name.label} onChange={setNewValue}/>
          <Textarea value={formValues.msg} label={formValues.msg.label} onChange={setNewValue}/>
      </div>
  );
}

export default App;
