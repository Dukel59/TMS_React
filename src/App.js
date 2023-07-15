import {useEffect, useState} from "react";
import {PostsContext} from "./context/posts";
import {ThemeContext} from "./context/theme";

import RoutesComponent from "./routes";
import Menu from "./components/menu/menu";

import {TABS} from "./constants/tabs";

import './App.scss';
import usePosts from "./hooks/usePosts";
import {useSelector} from "react-redux";

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
    const {posts, setPosts}  = usePosts();
    const [search, setSearch] = useState("");
    const {theme} = useSelector(state => state.theme);

    const setNewValue = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: { ...formValues[key], value: value }
        })
    }

  return (
              <div className={`App App--${theme}`}>
                  <Menu user={user}/>
                  {/*<ThemeToggle />*/}

                  <RoutesComponent />
              </div>
  );
}

export default App;
