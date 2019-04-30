import React from 'react';
import {Scene,Router,navBar, Actions} from 'react-native-router-flux';
import Login from "./Login"
import LoginRegister from "./LoginRegister"
import Register from "./Register"
import CreateProfile from "./CreateProfile"
import ForgotPassword from "./ForgotPassword"
import EditProfile from "./EditProfile"
import Home from "./Home"
import EditCardDetails from "./EditCardDetails"
import About from "./About"
import ConfirmOrder from "./ConfirmOrder"
import Disclaimer from "./Disclaimer"
import Filter from "./Filter"
import ListDetails from "./ListDetails"
import List from "./List"
import MyDeliveryAddress from "./MyDeliveryAddress"
import NearBy from "./NearBy"
import RestaurantDetails from "./RestaurantDetails"
import Breakfast from "./Breakfast"
import SelectAddAddress from "./SelectAddAddress"
import Search from "./Search"
import SubmitaQuery from "./SubmitaQuery"
import Profile from './Profile';
import Payment from './Payment';
import Orders from './Orders';
import Delivery from './DeliveryLocation';
import Deliveringto from './Deliveringto';
import Menu from './Menu';
import BottomTabNavigator from './BottomTabNavigator';

const RouterComponent = () =>{
    const path1="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    return(
        <Router>
            <Scene key="root">
                <Scene key="LoginRegister" component={LoginRegister} title="Welcome" initial/>
                <Scene key="Login" component={Login} title="Login"/>
                <Scene key="Register" component={Register} title="Register"/>
                <Scene key="CreateProfile" component={CreateProfile} title="Create your Profile"/>
                <Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password" />
                <Scene key="EditProfile" component={EditProfile} title="Edit your Profile" />
                <Scene key="Home" component={Home} title="Home" hideNavBar={true}/>
                <Scene key="EditCardDetails" component={EditCardDetails} title="Edit Card details"/>
                <Scene key="ConfimOrder" component={ConfirmOrder} title="Confirm Order"></Scene>
                <Scene key="Disclaimer" component={Disclaimer} title="Disclaimer" navigationBarStyle={{backgroundColor:'#FF7518'}}/>
                <Scene key="Filter" component={Filter} title="Rigle"  navigationBarStyle={{backgroundColor:'#FF7518'}} />
                <Scene key="ListDetails" component={ListDetails} hideNavBar={true}  />
                <Scene key="List" component={List} title="Special Food" hideNavBar={true} />
                <Scene key="MyDeliveryAddress" component={MyDeliveryAddress} title="My Delivery Address" />
                <Scene key="NearBy" component={NearBy} title = "Near By Restaurant" navigationBarStyle={{backgroundColor:"#FF7518",height:80}} />
                <Scene key="RestaurantDetails" component={RestaurantDetails} title="Restaurant Details" />
                <Scene key="Breakfast" component={Breakfast} hideNavBar  />
                <Scene key="SelectAddAddress" component={SelectAddAddress} title="Select Add Address" navigationBarStyle={{backgroundColor:"#FF7518",height:130}}/>
                <Scene key="Search" component={Search} hideNavBar={true}  />
                <Scene key="SubmitaQuery" component={SubmitaQuery} navigationBarStyle={{backgroundColor:"#FF7518",height:80}} title="Submit A Query" />
                <Scene key='Profile' component = {Profile} title = 'Create a Profile'/>
                <Scene key='About' component={About} title = 'About Rigel'/>
                <Scene key='Payment' component={Payment} title='Add Payment' icon="Text"/>
                <Scene key='Orders' component={Orders} title='Orders'/>
                <Scene key='Delivery' component={Delivery} title='My Delivery Location' />
                <Scene key='Deliveringto' component={Deliveringto} title='Deliveringto'/>
                <Scene key='menu' component={Menu} title='Menu'/>
                <Scene key='BottomTabNavigator' component={BottomTabNavigator} hideNavBar/>
            </Scene>
        </Router>
    )
}

export default RouterComponent;