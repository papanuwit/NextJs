import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Posts from './posts';
import CreatePost from '@/app/createpost/page';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link> {/* เพิ่ม Link ไปยัง CreatePost */}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/create">
            <CreatePost/>
          </Route>
          <Route path="/">
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
