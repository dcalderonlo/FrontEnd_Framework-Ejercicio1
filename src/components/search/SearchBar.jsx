import "./c-searchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { SearchContext } from "../../Context/RouteContext";

const SearchBar = () => {

    const { setQuery } = useContext(SearchContext);

    return(
        <section>
            <div className="c-box-searchBar">
                    <FontAwesomeIcon className="c-searchBar-widget" icon={ faMagnifyingGlass } />
                <input className="c-searchBar" type="search" placeholder="Buscar..." onChange={event => {setQuery(event.target.value)}}/>
            </div>
        </section>
    )
}

export default SearchBar;