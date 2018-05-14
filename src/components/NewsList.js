import React, { Component } from 'react';

const style = {
  height: 50,
  border: "1px solid black",
  margin: 6,
  padding: 8
};

class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
       news: 40,
       loadingState: false
     };
   }
  
   componentDidMount() {
     this.refs.iniscroll.addEventListener("scroll", () => {
       if (this.refs.iniscroll.scrollTop + this.refs.iniscroll.clientHeight >=this.refs.iniscroll.scrollHeight){
         this.loadMoreItems();
       }
     });
   }
  
   displayItems() {
     var news = [];
     for (var i = 0; i < this.state.news; i++) {
       news.push(<li style={style} key={i}>news {i}</li>);
     }
     return news;
   }
  
   loadMoreItems() {
     this.setState({ loadingState: true });
     setTimeout(() => {
       this.setState({ news: this.state.news + 10, loadingState: false });
     }, 3000);
   }
  
   render() {
     return (
       <div ref="iniscroll" style={{ height: "500px", overflow: "auto" }}>
         <ul>
           {this.displayItems()}
         </ul>
  
         {this.state.loadingState ? <p className="loading"> loading More News..</p> : ""}
  
       </div>
     );
   }
}

export default NewsList