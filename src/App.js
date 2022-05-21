import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faCircleUser, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCircleUser, faPenToSquare, faScissors } from '@fortawesome/free-solid-svg-icons'

const sections = [
  {
    name: 'About',
    icon: faCircleUser,
    url: '/about',
  },
  {
    name: 'Art',
    icon: faPenToSquare,
    url: '/art',
  },
  {
    name: 'Projects',
    icon: faScissors,
    url: '/projects'
  },
]

const innerSection = (props) => (
  <li className="inner-section">
    <a href={props.url}>
      <FontAwesomeIcon icon={props.icon} />
      {props.name}
    </a>
  </li>
);

// TODO: Make proper nav https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <em>Mircea's Personal Site (WIP)</em>
        <div className="nav-bar">
          <ul>{sections.map(innerSection)}</ul>
        </div>
      </header>
      {/* Move this to About page */}
      <div>
        <h1>About Me</h1>
        <p>Hi, my name is Mircea, I'm a software developer. This site is for sharing my writing, art, leathercrafting, coding projects, and anything else I feel like sharing.</p>
        <h2>Dev Notes</h2>
        <p>This site is open-source under the <a href="https://github.com/Rikoru/rikoru.github.io/blob/master/LICENSE">MIT LICENSE</a>.
        </p>
        <a href="https://github.com/Rikoru/rikoru.github.io">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

export default App;
