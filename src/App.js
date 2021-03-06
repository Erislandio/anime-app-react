import React, { Component } from 'react';

import './App.css';
import Header from './components/header/Header'
import Loader from './components/Loader';
import Main from './components/main/Main';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      anime: null,
      loading: true,
      search: ''
    }

    this.getAnimeData = this.getAnimeData.bind(this)
  }


  getAnimeData(search) {
    fetch(`https://kitsu.io/api/edge//anime?filter[text]=${search}`).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      this.setState({ anime: data, loading: false })
    })
  }

  componentDidMount() {
    this.getAnimeData();
  }



  render() {
    const { anime } = this.state
    console.log(this)
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <div className="App">
        <Header search={this.getAnimeData}/>
        <Main data={this.state.anime.data} />
      </div>
    );
  }

}

export default App;
