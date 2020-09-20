import React, {
  useContext, createContext
} from 'react';
import UseStateExample from './example/useStateExample';
import UseReducerExample from './example/useReducerExample';
import UseRefExample from './example/useRefExample'
import UseMemoExample from './example/useMemoExample'
import UseCallbackExample from './example/useCallbackExample'
import UseDragableList from './demo/drag'
import './App.css';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return ( <button style = {
      {
        background: theme.background,
        color: theme.foreground
      }
    } >
    I am styled by theme context!
    </button>
  );
}
const ThemeContext = createContext(themes.light);
function Toolbar(props) {
  return ( <div>
    <ThemedButton />
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value = {
          themes.dark
        } >
        <Toolbar />
      </ThemeContext.Provider>
      <UseStateExample/>
      <UseReducerExample/>
      <UseRefExample />
      <UseMemoExample />
      <UseCallbackExample/>
      <UseDragableList/>
    </div>
  );
}

export default App;
