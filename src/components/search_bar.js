import React, { Component } from 'react';

class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = { term: '' };
    }
    
    render() {
// passing the handler to the element        
        return ( 
            <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
            );
    }
    
onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
}
    
// event handler (event) argument can be any name you decide  
/* I cleaned up code by placing this directly in the element above

    onInputChange(event) {
        console.log(event.target.value);
    }
*/    
}
    
export default SearchBar;    