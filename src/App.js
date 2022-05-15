import './App.css';

const sections = [
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Projects",
    url: "/projects"
  }
]

const innerSection = (props) => (
  <li className="inner-section">
    <a href={props.url}>{props.name}</a>
  </li>
);

// TODO: Make proper nav https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mircea's Personal Site (WIP)</h1>
        <div className="nav-bar">
          <ul>{sections.map(innerSection)}</ul>
        </div>
      </header>
    </div>
  );
}

export default App;
