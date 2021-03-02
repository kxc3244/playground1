import React from 'react';
import { Link ,Redirect,useHistory} from "react-router-dom";
import './Rooter.scss'

const isSubmitDisabled=false
function Rooter() {
  let history = useHistory();
  
// console.log(children,'children');


 return (
    <div style={{margin:'100px'}}>
      <div className='box'>
      <Link to="/">Home</Link>
      </div>
      <div className='box'>
      <Link to="/app">Main App</Link>
      </div>
      <div className='box'>
      <Link to={`/test/${isSubmitDisabled}`}>Test</Link>
      </div>
      <div className='box'>
      <a href="https://github.com/sachinrajgire/playground1/tree/master">Github</a>
      </div>
      <div className='box'>
      <a href="https://docs.google.com/spreadsheets/d/1ks0VXY6EliB37xT4OsL3CIQRA3XGaIrmATz0i4dYfYI/edit#gid=0">Student Records</a>
      </div>
      <div className='box'>
      <a href="https://wynisco.atlassian.net/wiki/spaces/RTM/overview">Confluence</a>
      </div>

    </div>)
}


export default Rooter