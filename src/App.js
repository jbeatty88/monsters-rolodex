import './App.css';
import {Component, useEffect, useState} from "react";
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from "./components/search-box/search-box.component";
import {TextBanner} from "./components/text_banner/text-banner.component";

/*const App = () => {
    const [monsters, setMonsters] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => setMonsters(users))
    }, [])

    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()))


    return(
        <div className={'App'}>
            <input type={'search'} placeholder={'Search'} onChange={e => setSearchInput(e.target.value)} />
            <CardList monsters={filteredMonsters} />
        </div>
    )
}*/

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monsters: [],
            searchInput: ''
        };

        /* Must bind methods to set context of 'this' */
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(users => this.setState({monsters: users}))
    }

    /* Don't forget to BIND methods in the constructor or use arrow functions */
    /*handleChange(e) {
        this.setState({searchInput: e.target.value})
    }*/

    /* ES6: Automatically bound (lexical scoping) 'this' to place where method defined (in class)
    * This means we no longer have to bind it manually with regular methods
    *  */
    handleChange = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render() {
        const {monsters, searchInput} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchInput.toLowerCase()))
        return (
            <div className="App">
                <TextBanner>Monsters Rolodex</TextBanner>
                <SearchBox placeholder={'Search Monsters'} handleChange={this.handleChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
