var React=require('react')

var Gc=React.createClass({

 render: function(){
   return (
     <div id='GrandChild'>

      <div className="row">
        <div className="col-lg-4" id="image">

          <img src={this.props.Poster}/>

        </div>
        <div className="col-lg-8" id="text">

          {this.props.Title}
          {this.props.Year}
          {this.props.imdbID}
          {this.props.Type}

        </div>
      </div>

     </div>
   )
 }
});
module.exports=Gc;
