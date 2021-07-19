import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CakeList from './CakeList';
import CakesHeader from './CakesHeader';
import Categories from './Categories';
import {Container, Row, Col} from 'react-bootstrap';

class Cakes extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : false,
            order : 'new',
            selected_cat : '모두 보기',
            feedData : [],
            items: 10,
            preItems: 0,
        }
    }

    componentDidMount() {
        this.setState({
            loading: false
        })
        this._getCategories();
        this._getCakeList();
        window.addEventListener('scroll', this.infiniteScroll);
    }

    // INFINITE SCROLL
    infiniteScroll = () => {
        const {scrollHeight} = document.documentElement;
        const {scrollTop} = document.documentElement;
        const {clientHeight} = document.documentElement;
        
        if (scrollTop >= scrollHeight - clientHeight) {
            this.setState({
                preItems : this.state.items,
                items : this.state.items + 10,
                loading : true
            });
            this._getCakeList();
            this.setState({
                loading: false
            })
        }
    }

    // CakeList Api START //
    // 아래 _getCake()를 통해 state에 넣어진 cake을 <CakeList /> 컴포넌트로 display
    _renderCakeList = () => {
        // cake_object에 json object가 여러 개면 아래와 같이 mapping을 해줘야됨.
        const cakes = this.state.feedData.map((this_cake, index) => {
        return <CakeList 
        key_line={this_cake.key_line}
        body={this_cake.body}
        source={this_cake.source_title}
        category={this_cake.category}
        created_at={this_cake.created_at}
        id = {this_cake.id}
        history = {this.props.history}
        location = {this.props.location}
        key = {this_cake.id}
        
        selected_cat = {this.state.selected_cat}
        />
        }) 
        return cakes
    }

    // 아래 _callApiCakeList()로 API를 가져오고, _getcake()로 이걸 state에 넣음(?)
    _getCakeList = async () => {
        const cake = await this._callApiCakeList();
        let dataToAdd = cake.slice(this.state.preItems, this.state.items);
        this.setState({
            feedData : [...this.state.feedData, ...dataToAdd],
            loading : false
        });
        // console.log(this.state.feedData)
    }
    
    // Cake_list API 가져오기
    _callApiCakeList = () => {
        // const cat = this.state.selected_cat
        // console.log('지금 선택된 카테고리는', cat)
        return fetch(`https://bookcake.herokuapp.com/api/cakes/`)
        .then((response) => response.json())
        // 만약 이 json 오브젝트 내에 또 다른 오브젝트가 있어서 거기에 access 하려면 json.data.cake 이런 식으로 명시해줘야 함.
        // 하지만 이 경우에는 그렇지 않기 때문에 json만 써주면 되고, 그럼 굳이 아래처럼 .then을 쓸 필요가 없는듯..
        // .then((json) => json)
        .catch((err) => console.log(err))
    }
    // CakeList Api END //

    // Category Api START //
    _renderCategories = () => {
        return <Categories 
        category={this.state.category_object}
        value = {this.state.selected_cat}
        onChange={
            this._handleCatSelection
        }
        />
    }

    _handleCatSelection = (value) => {
        this.setState({
            selected_cat : value
        })
    }

    // 아래 _callApiCategories()로 API를 가져오고, 이걸 state에 넣음
    _getCategories = async () => {
        const category = await this._callApiCategories();
        this.setState({
        category_object : category
        })
    }
    
    // Cake_list API 가져오기
    _callApiCategories = () => {
        return fetch("https://bookcake.herokuapp.com/api/categories/")
        .then((response) => response.json())
        .catch((err) => console.log(err))
    }
    // Category Api END //

    render() {
        return (
            <div className="ContentWrapper">
                <Container>
                    <Router>
                        <Row className="justify-content-center">
                            <Col className=""><CakesHeader/></Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col className="text-center">{this.state.category_object ? this._renderCategories() : ""}</Col>
                        </Row>
                        <br id="pc"/>
                        <Row className="justify-content-center">
                            <Col lg={10} className="text-right text-small italic">
                                *모든 조각들은 <span className="bolder">맥락</span>이 제거된 일부분에 불과합니다. <br/>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col lg={10} className="text-center bold">{this.state.feedData.length !== 0 ? this._renderCakeList() : "구워오는 중... 🍰"}</Col>
                        </Row>
                    </Router>
                </Container>
            </div>
        )
    }
}

export default Cakes
