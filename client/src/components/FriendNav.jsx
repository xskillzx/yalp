import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import axios from 'axios';

class FriendNav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	let id = JSON.parse(localStorage.getItem('loggedUser')).id;
    axios.get(`/user/friends/${id}`)
      .then(resp => {
        if (resp.status === 200) {
        	console.log(resp);
        }
      })
      .catch(err => {
        console.log('Something went wrong..');
      });
  }

  render() {
		return (
			<Navbar fixedBottom className="navs">
				<Nav>
					<NavItem eventKey={1} href="#">
						About
					</NavItem>
				</Nav>
				<Nav pullRight>
					<NavDropdown eventKey={2} title="Friends" id="basic-nav-dropdown friendslist">
						<MenuItem eventKey={2.1}><span>Justin</span><Button bsStyle="primary" className="chatBtn">Chat</Button></MenuItem>
						<MenuItem eventKey={2.2}>Feli <Button bsStyle="primary">Chat</Button></MenuItem>
						<MenuItem eventKey={2.3}>Franco <Button bsStyle="primary">Chat</Button></MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		)
  }
}

export default FriendNav;

/*			<Navbar.Header>
				<Navbar.Brand>
					<a href="#home">React-Bootstrap</a>
				</Navbar.Brand>
			</Navbar.Header>*/