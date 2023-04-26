import "./c-searchBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ setQuery }) => {
// const SearchBar = () => {

    // const [search, setSearch] = useState('');

    // const debounceRef = useRef<NodeJS.Timeout>()

    // const searchValue = (event /*ChanegeEvent<HTMLInputElement>*/) => {
    //     if (debounceRef.current) {
    //         clearTimeout( debounceRef.current );
    //     }

    //     debounceRef.current = setTimeout(() => {
    //         console.log(event.target.value);
    //     }, 1000);
    // }
    // const searchValue = (value) => {
    //     console.log(value)
    // }

    return(
        <div className="c-box-searchBar">
                <FontAwesomeIcon className="c-searchBar-widget" icon={ faMagnifyingGlass } />
            <input className="c-searchBar" type="search" placeholder="Buscar..." onChange={event => {setQuery(event.target.value)}}/>
        </div>
    )
}

export default SearchBar;