import React, { Component } from 'react';
import './App.css';
import RecommendedFriends from './components/social-network/RecommendedFriends';
class App extends Component {

  constructor() {
    super();
    this.items = [
        {
            icon: "fas fa-home fa-3x",
            label: "Home"
        },
        {
            icon: "fas fa-gift fa-3x",
            label: "Gilf"
        },
        {
            icon: "fas fa-upload fa-3x",
            label: "Upload"
        },
        {
            icon: "fas fa-cog fa-3x",
            label: "Setting"
        }
    ];
    this.users = [
        {
            img: "https://picsum.photos/100",
            name: "Long"
        },
        {
            img: "https://picsum.photos/100",
            name: "Bằng"
        },
        {
            img: "https://picsum.photos/100",
            name: "Hà"
        },
        {
            img: "https://picsum.photos/100",
            name: "Khánh"
        },
        {
            img: "https://picsum.photos/100",
            name: "Linh"
        }
    ]
}
render() {
    return (
        <div className="App">
            <RecommendedFriends users={this.users}/>
        </div>
    );
}
}

export default App;
