//import { Component } from "react";
import './search-box.styles.css';


 const SearchBox = ({className,placeHolder,onChangeHandler}) => (

    <input 
            className={`search-box ${className}`}
            type='search'
            placeholder={placeHolder}
            onChange={onChangeHandler}
        />
)

/**
class SearchBox extends Component{

    render(){
        const {className,placeHolder,onChangeHandler} = this.props;
        return(
            <input 
                className={`search-box ${className}`}
                type='search'
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        )
    }
}
 */
export default SearchBox;