import React from 'react';
import { withRouter, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Search from './Search.jsx';
import BusinessList from './BusinessList.jsx';
import BusinessPage from './BusinessPage.jsx';
import Profile from './Profile.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      business: {},
      userId: 0,
      loggedIn: false,
      checkedIn: false,
      favorites: {},
    }
    this.photos = [];
    this.searchResults = {};
  }

  createUser(userData) {
    // userData = {
    //   name: 
    //   email: 
    //   username: 
    //   password: 
    // }
    let self = this;
    axios.post('/server/signup', userData)
      .then(resp => {
        if (resp.status === 201) {
          window.alert('Signed up!')
          let loginData = {
            username: userData.username,
            password: userData.password
          }
          this.loginUser(loginData);
        }
      })
      .catch(err => {
        window.alert('Username is taken')
      });
  }

  loginUser(userData) {
    // let loginData = {
    //   username:
    //   password:
    // }
    let self = this;
    axios.post('/server/login', userData)
      .then(resp => {
        if (resp.status === 200) {
          this.setState({
            username: resp.data[0].username,
            password: '',
            email: resp.data[0].email,
            userId: resp.data[0].id,
            name: resp.data[0].name,
            loggedIn: true,
          });
          this.getFavorite()
          self.props.history.push('/search');
        }
      })
      .catch(err => {
        window.alert('Wrong username or password');
      });
  }

  logoutUser() {
    this.setState({loggedIn: false})
  }

  pushToListings(search, loc) {
    loc ? this.props.history.push(`/listings?search=${search}&location=${loc}`) : this.props.history.push(`/listings?search=${search}`);
  }

  updateBusiness(e, business) {
    e.preventDefault()
    this.getBusinessInfo(business)
  }

  checkIn(business) {
    let userBusinessObj = {
      userId: this.state.userId,
      business: business
    }
    axios.post('/server/profile/checkins', userBusinessObj)
    .then(resp => {
      this.setState({checkedIn: true});
    });
  }

  getFavorite() {
    const { userId } = this.state;
    axios.get(`/profile/favorites/${userId}`)
    .then(resp => {
      let { favorites } = this.state;
      if (resp.data) {
        resp.data.forEach((favorite) => {
          favorites[favorite.business_id] = true;
        })
        this.setState({favorites});
      }
    });
  }

  favoriteIn(business) {
    let userBusinessObj = {
      userId: this.state.userId,
      businessId: business.id
    };
    axios.post('/profile/favorites', userBusinessObj)
      .then(result => {
        let { favorites } = this.state;
        let { data } = result;
        favorites[business.id] = data;
        this.setState({ favorites });
      });
  }

  getBusinessFav(businessId) {
    return this.state.favorites[businessId] ? true : false;
  }

  backToResults() {
    this.props.history.push('/listings');
  }

  render() {
    return (
      <div>
        <div id="topnav">
          {this.state.loggedIn ?
            <div onClick={e => {
              document.body.style.background = "url('beer.jpg')";
              document.body.style.backgroundSize = "100%";
            }}>
              <Link to="/search" className="logoLink">
                <img className="logo"src="https://image.ibb.co/cRbaE6/imageedit_16_4158574454.png"/>
                YALP!
              </Link>
              <Link to="/" className="logout">
                <div onClick={this.logoutUser.bind(this)}>Log Out</div>
              </Link>
              <Link to="/profile" className="profile">
                <div onClick={this.logoutUser.bind(this)}>Profile</div>
              </Link>
            </div> :
            <div>
              <img className="logo" src="https://image.ibb.co/cRbaE6/imageedit_16_4158574454.png"/>
              YALP!
            </div>
          }
        </div>
        <Switch>
          <Route exact path="/" render={() => <div id="form-background"><div id="form"><Home /></div></div>}/>
          <Route path="/search" render={() => <div id="form-background"><div id="form"><Search goToListings={this.pushToListings.bind(this)}/></div></div>}/>
          <Route path="/login" render={() => <div id="form-background"><div id="form"><Login loginUser={this.loginUser.bind(this)}/></div></div>}/>
          <Route path="/signup" render={() => <div id="form-background"><div id="form"><Signup createUser={this.createUser.bind(this)}/></div></div>}/>
          <Route path="/listings" render={(props) => <div id="listings"><BusinessList location={props.location}/></div>}/>
          {/* <Route path={`/business/${this.state.business.name}`} render={ 
            () => <BusinessPage business={this.state.business} 
              getBusinessInfo={this.getBusinessInfo.bind(this)} 
              getBusinesses={this.getBusinesses.bind(this)}
              getFavoriteInfo={this.getBusinessFav.bind(this)}
              checkIn={this.checkIn.bind(this)}
              username={this.state.username}
              userId={this.state.userId}
              checkedIn={this.state.checkedIn}
              getBusinessPhotos={this.getBusinessPhotos.bind(this)}
              photos={this.photos}
              favoriteIn={this.favoriteIn.bind(this)}
              backToResults={this.backToResults.bind(this)}
              /> 
            }
          /> */}
          <Route path="/business/:id" render={(props) => <BusinessPage history={props.history} businessPlaceId={props.match.params.id}/>}/>
          <Route path="/profile" render={() => <div><Profile profileId={this.state.userId} /></div>}/>
        </Switch>
    </div>
    )
  }
}

export default withRouter(App);
