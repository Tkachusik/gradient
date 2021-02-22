import { Switch, Route } from 'react-router-dom';
import New from './new';
import Home from './home';
import Edit from './edit';
import './App.css';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={New} />
            <Route path="/edit/:id" component={Edit} />
        </Switch>
    );
}

export default App;