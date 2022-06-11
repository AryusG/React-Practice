import React from "react";

export class Slides extends React.Component {
  state = {
    images: [
      "https://deih43ym53wif.cloudfront.net/zermatt-matterhorn-switzerland-shutterstock_1298208013_44fea015e5.jpeg",
      "https://s1.it.atcdn.net/wp-content/uploads/2015/11/shutterstock_279572969.jpg",
      "https://theculturetrip.com/wp-content/uploads/2021/03/j7fkyy-e1616521864398.jpg",
      "https://www.erikastravelventures.com/wp-content/uploads/2018/10/IMG_6858-e1540290382435.jpg",
    ],
    idx: 0,
    visible: true,
  };

  nextImg = () => {
    this.setState({
      idx: this.state.idx + 1,
    }, () => {
        console.log(this.state);
    });
  };
  
  render() {
    return (
      <div>
        {
            this.state.visible ? 
            <img
            style={{
                width: 400,
            }}
            src={this.state.images[this.state.idx]}
            ></img> 
            : <div>This is hidden</div> 
            
        }
        <button onClick={() => {this.setState({visible: false})}}>Hide</button>
        <button onClick={this.nextImg}>Next</button>
        <button onClick={() => {
            this.setState({
                idx: this.state.idx - 1
            }, () => {
                console.log(this.state)
            }
            )
        }}>Prev</button>
      </div>
    );
  }
}