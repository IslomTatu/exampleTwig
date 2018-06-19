import React, { Component } from 'react'
import Logo from '../../components/NavBar/Logo'
import SearchInput from '../../components/NavBar/SearchInput'
import Search from '../../components/NavBar/Search'
import Profile from '../../components/NavBar/Profil'


import './index.css'

class NavBar extends Component{

    state = {
        id: 1,
        search: false
    }

    handleClickSearch = () => {

        const search = !this.state.search
        this.setState({search: search})
        if(document.getElementsByTagName('body')[0].click()){
            console.log("clicked body")
            this.setState({search: false})
        }
    }

    handleClickProfile = () => {
        console.log(this.state.id)
        const search = this.state.id+1
        this.setState({id: search})
        console.log(this.state.id)
    }

    render(){
        return(
            <nav id='navBar'>
                <div id='navBar-container'>
                    <ul id='list-items'>
                        <li><Logo /></li>
                        <li>
                            <SearchInput search={this.state.search} />
                            <Search onClick={this.handleClickSearch} />
                            <Profile onClick={this.handleClickProfile} />
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar