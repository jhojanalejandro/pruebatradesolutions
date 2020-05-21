import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Tienda from './components/Tienda';
import ProductoComponent from './components/ProductoComponent';
import Registrot from './components/Registrot';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
            <Route path='/fetchdata' component={FetchData} />
            <Route path='/tienda' component={Tienda} />
            <Route path='/producto' component={ProductoComponent} />
            <Route path='/registrot' component={Registrot} />
            
      </Layout>
    );
  }
}
