import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
interface Props {}

const App = (props: Props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={Layout} exact={false} />
      </Switch>
    </Router>
  );
};

export default App;
