import React, { Component } from 'react'
import './Main.css'
import star from '../../assets/img/start.png'
import sword from '../../assets/img/iconfinder_Sword_2913105.png'
import ep from '../../assets/img/iconfinder_icon-60_667367.png'
import rip from '../../assets/img/iconfinder_tombstone_2671449.png'



export default class Main extends Component {


    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }


    componentDidMount() {
        this.setState({ loading: false })
    }

    render() {

        return (
            this.state.loading ? <div className="loading">loading...</div> : (
                <div id="main">
                    {this.props.data.map(res => {
                        return <div key={res.id}>
                            <div className="content">
                                <div className="image">
                                    <img src={`https://media.kitsu.io/anime/cover_images/${res.id}/small.jpg`} />
                                </div>
                                <div className="name">
                                    <h1>{res.attributes.abbreviatedTitles[0]}</h1>
                                    <p className="desc">
                                        {res.attributes.synopsis}
                                    </p>
                                </div>
                            </div>
                            <div className="info">
                                <h1>Informations</h1>
                                <span className="age">
                                    Age:
                                    {res.attributes.ageRatingGuide}
                                    <img src={sword} />
                                </span>
                                <span className="rate">
                                    Ranking:
                                    {
                                        res.attributes.averageRating + '%'
                                    }
                                    <img src={star} />
                                </span>
                                <span className="qunat">
                                    Episodes: {res.attributes.episodeCount}
                                    <img src={ep} />
                                </span>
                                <span className="data">
                                    End Date: {res.attributes.endDate}
                                    <img src={rip} />
                                </span>
                            </div>
                        </div>
                    })}
                </div>
            )
        )
    }
}
