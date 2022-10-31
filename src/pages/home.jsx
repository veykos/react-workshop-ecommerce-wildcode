import {Link} from 'react-router-dom'

export default function Home() {
    return (
      <div>
      <Link to={'/categories'} >To Categories page</Link>
        <ul>
          <li>
            <b>file name:</b> home.jsx
          </li>
          <li>
            <b>component name:</b> Home
          </li>
        </ul>
      </div>
    );
  };