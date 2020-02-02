import React, {Component, useState} from 'react';
import useInitialState from '../hook/useInitialState';


    const Search = () =>{
        const [state, setState] = useState([]);
  
        const Change = (event) =>{
            setState({value: event.target.value});
        }
        
        const InitialState = useInitialState(state.value);
        console.log(InitialState);
        
        return(
            <div className="active-cyan-3 active-cyan-4 mb-4 container Search-element__margin">
                <input className="form-control" type="text" placeholder="Search" onChange={Change} />
            </div>
        );
    }


export default Search;