import React from 'react';
import Home from '../components/Home';
import { connect } from 'react-redux';


class HomeMain extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
          <Home user={this.props.user}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('HomeMain mapStateToProps state => ',state);
  return {
    user : state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return { };
}

export default connect( mapStateToProps, mapDispatchToProps )(HomeMain);