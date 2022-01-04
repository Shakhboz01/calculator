import React,{Component} from 'react';
import './App.css';
import { data } from './data';

class App extends Component {

  constructor(props){
  super(props);
  this.state={
  click:[0],
  overallClick:[0],
  lastClick:""
  };
  this.handleClick=this.handleClick.bind(this);
  }

handleClick(arr){

const {click,overallClick,lastClick}=this.state 
const copyOverall=overallClick;

  if(lastClick==''&& arr.isNUmber==true ){
  this.setState({
  click:[arr.display],
  overallClick:[arr.display],
  lastClick:"number"
  })
  }

    else if(lastClick==''&& arr.isNUmber==false ){
    this.setState({
    click:[arr.display],
    overallClick:[arr.display],
    lastClick:"symbol"
    })
    }

      else if(lastClick=="number" && 
      arr.isNUmber==true && click.length<22){
      this.setState({
      click:[...click,arr.display],
      overallClick:[...overallClick,arr.display],
      lastClick:"number"
      })
      }
    
        else if(lastClick=="number"&& arr.isNUmber==false){
        this.setState({
        click:[arr.display],
        overallClick:[...overallClick,arr.display],
        lastClick:"symbol"
        })
        }

          else if(lastClick=="symbol"&&arr.isNUmber==false ){
          copyOverall.splice(copyOverall.length-1,1,arr.display)
          this.setState({
          click:[arr.display],
          overallClick:[...copyOverall],
          lastClick:"symbol"
          })
          }

            else if(lastClick=="symbol"&&arr.isNUmber==true){
            this.setState({
            click:[arr.display],
            overallClick:[...overallClick,arr.display],
            lastClick:"number"
            })
            }

              else if(arr.name=="clear"){
              this.setState({
              click:[0],
              overallClick:[0],
              lastClick:""
              })
              }
   
                else if(arr.name=='clearOne'){
                click.pop()
                copyOverall.pop()
                this.setState({
                click:[...click],
                overallClick:[...copyOverall]
                })

                  if(click.length==0){
                  this.setState({
                  click:[0],
                  overallClick:[0],
                  lastClick:""
                  })
                  }

                }
    
                  else if(arr.name=="total"){
                  const overall=copyOverall.join('');
                  this.setState({
                  click:[eval(overall)],
                  overallClick:[0],
                  lastClick:''
                  })
                  }
}

render(){

const {click,overallClick}=this.state; 

 return (

<div className="App">

  <div className='headers'>

      <div className='dis'>
        <div style={{color:"orange"}}>
          {overallClick}
        </div>  
        <br/>
        {click} 
      </div>

    { data.map(arg=>{

      return(

      <div 
      style={arg.isNUmber?
      {backgroundColor:"rgb(63, 56, 56)",color:"white"}
      :
      {}
      } 
      className={`${arg.name} multiple`}
      key={arg.id}
      onClick={()=>this.handleClick(arg)
      }
      >

      {arg.display}

      </div>
      )
      })
    }
  </div>


</div>
  );
}
}

export default App;
