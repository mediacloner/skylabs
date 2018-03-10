import React, { Component } from 'react'
import api from 'api-client';

api.protocol = 'http'
api.host= 'localhost'
api.port= '5000'

class Search extends Component {

    constructor() {
        super()
        this.state = {
            showingByID: '' ,
            users : []
        }
    }
    handlerDelete (id) {

        this.state.showingByID != '' 
        ? this.setState({showingByID:''}):

        this.setState({ showingByID: id})
    }
    componentDidMount(){
        api.list().then((users) =>        
            this.setState({ users : users.data})
            )}

    render() {
        return (
            <div>
                <div className="text-center">
                    <h2 className="display-4">Users search</h2>
                </div>
                <form id="search" action="/search" method="get" className="text-center">
                    <input type="text" className="form-control" id="Search" placeholder="Search" />
                    <br />
                    <input type="submit" className="btn btn-dark" defaultValue="Search" />
                </form>

                <ul className="list-group">

                {this.state.users.map(user => 
                    <li key={user.id}>
                        <form action='/edit' method="get" className="text-center"> {user.name} 
                        <input type="submit" className="btn primary" defaultValue="Edit" />
                        <input type="submit" className="btn btn-warning" defaultValue="Remove" onClick={(e) => { e.preventDefault(); this.handlerDelete(user.id) }} />

                        </form>

                        { this.state.showingByID === user.id 
                            ?   <div>

                                <form id="edit" action="/save/062c8937-a287-46de-996a-c785cadc9e25" method="post" className="text-center">
                                <input type="text" className="form-control" id="Name" placeholder="Name" />
                                <input type="text" className="form-control" id="Surname" placeholder="Surname" /> <br/>
                                <input type="submit" className="btn btn-danger" defaultValue="OK" onClick={(e) => { e.preventDefault(); this.handlerDelete(user.id) }} />
                                </form>

                                </div>
                            : null
                        }

                       
                    </li>)} 
                     
{/*                      {this.state.users.map( user => {
                        <li className="list-group-item-primary">

                     
        
                            <p>{this.user.name}</p>
                            
                                <form action="/edit/{user.id}" method="get" className="text-center">Name
                                <input type="submit" className="btn btn-warning" defaultValue="Edit" />
                                <input type="submit" className="btn btn-danger" defaultValue="Remove" />
                            </form> }
                         </li>
                        }
                    )} */}
                </ul>
              {/*   <form id="edit" action="/save/062c8937-a287-46de-996a-c785cadc9e25" method="post" className="text-center">
                    <input type="text" className="form-control" id="Name" placeholder="Name" />
                    <input type="text" className="form-control" id="Surname" placeholder="Surname" />
                    <input type="text" className="form-control" id="E-mail" placeholder="E-mail" />
                    <input type="text" className="form-control" id="newUsername" placeholder="New username" />
                    <input type="text" className="form-control" id="newPassword" placeholder="New password" />
                    <input type="text" className="form-control" id="currentUsername" placeholder="Current username" />
                    <input type="text" className="form-control" id="currentPassword" placeholder="Current password" />
                    <br />
                    <input type="submit" className="btn btn-dark" defaultValue="Save" />
                </form>
                <div className="text-center">
                    <h3 className="display-4">Error on edit</h3>
                </div> */}
            </div>
        )
    }
}

export default Search