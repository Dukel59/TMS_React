import {useEffect, useState} from "react";
import {PostsContext} from "./context/posts";
import {ThemeContext} from "./context/theme";

import RoutesComponent from "./routes";
import Menu from "./components/menu/menu";
import ThemeToggle, {THEME} from "./components/themeToggle/themeToggle";

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
    const [ posts, setPosts ] = useState([]);
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState(THEME.light)

    useEffect(() => {
        const getPosts = async() => {
            try{
                const urlParams = new URLSearchParams({
                    limit: 11,
                    offset: 1
                });
                console.log('https://studapi.teachmeskills.by/blog/posts?' + urlParams);
                const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
                    .then(response => response.json())

                 setPosts(postsResponse);
            } catch (e){
                console.error(e)
            }
        }

        getPosts()
    }, []);

    const setNewValue = (key, value) => {
        setFormValues({
            ...formValues,
            [key]: { ...formValues[key], value: value }
        })
    }

  return (
      <ThemeContext.Provider value={[theme, setTheme]}>
          <PostsContext.Provider value={{posts, search, setSearch}}>
              <div className={`App App--${theme}`}>
                  <Menu user={user}/>
                  <ThemeToggle />

                  <RoutesComponent />
              </div>
          </PostsContext.Provider>
      </ThemeContext.Provider>
  );
}

export default App;
