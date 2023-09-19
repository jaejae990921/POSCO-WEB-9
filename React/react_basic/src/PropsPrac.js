import { Component } from 'react';

class PropsPrac extends Component {
  render() {
    const { food } = this.props;

    return (
      <>
        <h2>
          제가 좋아하는 음식은 <span style={{ color: 'red' }}>{food}</span>
          입니다.
        </h2>
      </>
    );
  }
}

PropsPrac.defaultProps = {
  food: 'default',
};

export default PropsPrac;
