import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent_c extends Component {

    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    static defaultProps = {
        name: '기본이름',
    };

    render() {

        const { name, children, favoriteNumber } = this.props;
        // this es5 에서는 최상위의 객체를 가리킴
        // 보안적으로 취약함
        // es6 부터는 class함수에서 this 자기만해당하는 instance 객체를 가리킴

        return (
            <div>
                {name}의 첫 컴포넌트
                <br />
                children 값은 {children}
                <br />
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

export default MyComponent_c;

