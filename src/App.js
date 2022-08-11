import Header from './shared/Header';
import Footer from './shared/Footer';
import Copyright from './shared/Copyright';
import Home from './layout/Home'
import About from './layout/About'
import Contact from './layout/Contact'
import Services from './layout/Services'
import Thanks from './components/Thanks'
import { Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/thanks' component={Thanks} />
      </Switch>  
      <Footer />
      <Copyright />
      {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> */}
    </>
  );
}

export default App;
