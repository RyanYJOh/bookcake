import React, { Component } from 'react'
import {Container, Row, Col, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected_cat : '모두 보기',
        }
    }

    componentDidMount() {
    }

    _handleChange = (e) => {
        this.props.onChange(e.target.value)
        // console.log('클릭한 카테고리', e.target.value)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ToggleButton
                                className="btn-category text-small bold"
                                id="btn-category-seeAll"
                                value="모두 보기"
                                type="radio"
                                name="radio"
                                onClick={this._handleChange}
                            >
                                모두 보기
                            </ToggleButton>{'  '}
                            
                            {this.props.category.map((this_cat, index) => (
                            <ToggleButton
                                className="btn-category text-small bold"
                                key={index}
                                type="radio"
                                name="radio"
                                value={this_cat.category}
                                onClick={this._handleChange}
                            >
                                #{this_cat.category}
                            </ToggleButton>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Categories
