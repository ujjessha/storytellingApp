import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";
import Logout from "../screens/Logout";
import CustomSideBar from "../screens/customSideBar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{activeTintColor:"#e91e63", inactiveTintColor:this.state.light_theme? "black":"white", itemStyle:{marginVertical:5}}} 
        drawerContent={props=>{
            <CustomSideBar {...props}></CustomSideBar>
        }}>

            <Drawer.Screen name="Home" component={StackNavigator}  options={{onmountOnBlur:true}}/>
            <Drawer.Screen name="Profile" component={Profile} options={{onmountOnBlur:true}}/>
            <Drawer.Screen name="Logout" component={Logout} options={{onmountOnBlur:true}} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;