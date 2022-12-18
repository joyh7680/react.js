
import React from 'react';
import PropTypes from 'prop-types';
// PropTypes 똑같이 대문자2개로 써야함 
const MyComponent = ({ name, children, favoriteNumber }) => {
    return (
        <div>
            {name}의 첫 컴포넌트
            <br />
            children 값은 {children}
            <br />
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

MyComponent.propTypes = {

    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};

MyComponent.defaultProps = {
    name: '기본이름',
};

export default MyComponent;

