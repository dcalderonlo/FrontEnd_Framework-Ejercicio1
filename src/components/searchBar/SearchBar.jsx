import "./c-searchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    return(
        <div className="c-box-searchBar">
            {/* <div className="c-searchBar-Widget"> */}
                <FontAwesomeIcon className="c-searchBar-widget" icon={ faMagnifyingGlass } />
            {/* </div> */}
            <input className="c-searchBar" type="search" placeholder="Buscar..."/>
        </div>
    )
}

export default SearchBar;