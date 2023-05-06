import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import { createStore } from 'redux'
import reducer from './reducer';
import { Provider } from 'react-redux';
import StudentLists from './Student-lists';
import AddStudent from './Add-student'
import EditStudent from './Edit-student';
import Header from './Header';
import PageNotFound from './Page-not-found'
function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <div className='container'>
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/edit/:id" component={EditStudent}/>
          <Route exact path="/add" component={AddStudent}/>
          <Route exact path="/" component={StudentLists}/>
          <Route component={PageNotFound}/>
        </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
