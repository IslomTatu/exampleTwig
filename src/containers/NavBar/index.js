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
                    <div id='list-items'>
                        <div className="list-logo"><Logo /></div>
                        {/*<div className="list-news">*/}
                            {/*<p>hot news</p>*/}
                            {/*<p>popular news</p>*/}
                        {/*</div>*/}
                        <div className="list-right">
                            <SearchInput search={this.state.search} />
                            <Search type={this.state.search} onClick={this.handleClickSearch} />

                            <Profile onClick={this.handleClickProfile} />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar