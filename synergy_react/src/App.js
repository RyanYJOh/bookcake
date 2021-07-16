import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './components/home/Home';
import CakeList from './components/cakes/CakeList';
import Cakes from './components/cakes/Cakes';
import Cake from './components/cake/Cake';
import About from './components/about/About';
import SubscribeShared from './components/SubscribeShared';
import Recommendations from './components/recommend/Recommendations';
import Rcmnd from './components/recommend/Rcmnd';
import Letters from './components/letter/Letters';

import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cakeList_object : null,
      page : null,
    }
  }

  componentDidMount() {

}

  render() {
    return (
      <div className="app">
        <Router>
          <Route path='/' component={NavigationBar}/>
          <br id="pc"/>
          <div className = "ContentWrapper" id="app-dot-js">
            <Switch>
              <Route path='/cakes' component={Cakes} />
              <Route path='/cake/:id' component={Cake} />
              <Route path='/what-is-this' component={About}/>
              <Route path='/you-may-like-these' component={Recommendations} />
              <Route path='/you-may-like/:title' component={Rcmnd} />
              <Route path='/inside-my-head' component={Letters}/>
              <Route path='/subscribe' component={SubscribeShared}/>
              <Route exact path='/' component={Home} />

              <Route render={() => 
              <div>
                <div className="error text-center text-superlarge bolder">이곳은 미개척지🏴‍☠️</div>
                <br/>
                <div className="error text-center text-medium">입력하신 주소가 잘못되었어요.</div>
              </div>
              } />
            </Switch>
          </div>
        </Router>
        <Row id="mobile-pc" className="justify-content-center">
          <Col className="text-center">
            <div className="text-superlarge bolder">나는 불친절한 서비스지 😎</div>
          </Col>
        </Row>
        <Row id="mobile-pc" className="justify-content-center">
          <Col className="text-center">
            <div className="text-medium">화면 크기를 조절해주세요</div>
          </Col>
        </Row>
        <br/><br/>
      </div>
    )
  }
}

export default App;
