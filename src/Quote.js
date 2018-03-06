import React, { Component } from 'react';
import logo from './logo.svg'; 
import RefreshButton from './RefreshButton';

class Quote extends Component {
    constructor(props){
      // Pass props to parent class
      super(props);
      this.inspirations = [
          {
              "quote" : "Do or don't. There's no try.",
              "image" : "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02542c89eff9e8b4ee9e472325ebd23e&auto=format&fit=crop&w=1350&q=80"
          },
          {
            "quote" : "Stay hungry. Stay foolish.",
            "image" : "https://images.unsplash.com/photo-1420406676079-b8491f2d07c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd3629cf8c9524d23c117a9decfad0e1&auto=format&fit=crop&w=1351&q=80"
          },
          {
            "quote" : "Yolo, c'est le carpe diem des imbéciles",
            "image" : "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8b34d2488ce4b3d9b3b3da5c83c6a42f&auto=format&fit=crop&w=1409&q=80"
          },
          {
            "quote" : "Mangez des pommes.",
            "image" : "https://images.unsplash.com/photo-1507260385058-676ee3f043e3"
          },
      ];
      // Set initial state
      this.state = {
        quote: "N'attends pas d'avoir beaucoup pour donner un peu.", 
        image: "https://images.unsplash.com/photo-1465711403138-162e171bb7e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f7624e85824898b19bf5b794e98274a&auto=format&fit=crop&w=1350&q=80"
      }
    }

    componentDidMount() {
        let refreshQuote = setInterval(function() {
            let inspiration = this.inspirations[Math.floor(Math.random() * 3)];
            this.setState({quote: inspiration.quote, image: inspiration.image });
        }.bind(this), 10000);

        // setTimeout(function(){ clearInterval(refreshQuote); }, 5000);
        //DON'T DO THIS, JUST DEMONSTRATING .forceUpdate() 
        // setTimeout(function(){ this.state.now = 'foo'; this.forceUpdate() }.bind(this), 10000);
    }
  
    render() {
        // Plus tard, ajouter un <RefreshButton />
      return (
          <div class="quote" style={{ backgroundImage: `url(${this.state.image})` }}>
                <div class="inspiration-quote">
                    <img src={logo} className="App-logo" alt="logo" /> 
                    <h1 id="lequote">{this.state.quote}</h1>
                    
                </div>
          </div>
      );
    }
  }
  export default Quote;
  