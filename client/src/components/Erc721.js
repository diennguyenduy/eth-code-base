import React, { Component } from 'react';
import { Layout } from 'antd';
import Navbar from './Navbar';
import '../styles/App.css';

const { Content } = Layout;

class Erc721 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: props.web3
    };
  }

  render() {
    return (
      <div>
        <Navbar page={'2'} />
        <Content>
          <div>ERC_20</div>
        </Content>
      </div>
    );
  }
}

export default Erc721;
