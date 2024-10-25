import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './Components/Logo Home Screen/LogoScreen'; // Adjust the path as needed
import AdminScreen from './Components/Admin/AdminScreen'; // Create these screens
import SignUpScreen from './Components/Users/SignUpScreen'; // Create these screens
import SignInScreen from './Components/Users/SignInScreen';
import HomeScreen from './Components/Users/HomeScreen';
import ADMINHOMESCREEN from './Components/Admin/Adminhomescreen';
import DetailsScreen from './Components/Users/DetailsScreen';
import BestsellerScreen from './Components/Users/Bestseller'
import AddPayment from './Components/Admin/AddPayment';
import CartScreen from './Components/Users/CartScreen';
import vege from './Components/Users/vege';
import leaves from './Components/Users/leaves';
import OrderList from './Components/Admin/GetallorderDate';
import PhoneNumberForm from './Components/Admin/Getparticularorder';
import SeeAllScreen from './Components/Users/seeall';
import { CartProvider } from './Components/Users/cartContext';
import Profile from './Components/Users/Profile';
import NewPage from './Components/Users/new';
import Payment from './Components/Users/payment';
import Order from './Components/Users/orders'

const Stack = createStackNavigator();

const App = () => {
  return (
   <CartProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LogoScreen">
        <Stack.Screen name="LogoScreen" component={LogoScreen} options={{ title: ' WELCOME TO JuiceWorld' }} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} options={{ title: 'ADMIN SCREEN' }} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: 'SIGNUP SCREEN' }} />
        <Stack.Screen name='SignInScreen' component={SignInScreen} options={{title:'SIGNIN SCREEN'}} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title:'HOME SCREEN'}} />
        <Stack.Screen name='ADMINHOMESCREEN' component={ADMINHOMESCREEN} options={{title:'ADMIN HOME SCREEN'}} />
        <Stack.Screen name='Details' component={DetailsScreen} options={{title:'MOBILE ORDER AND PAY'}} />
        <Stack.Screen name='Bestseller' component={BestsellerScreen} options={{title:'Smoothie Varities'}}/>
        <Stack.Screen name='CartScreen' component={CartScreen} options={{title:'Cart Screen'}}/>
        <Stack.Screen name='AddPayment' component={AddPayment} options={{title:'Payment Screen'}}/>
        <Stack.Screen name='vege' component={vege} options={{title:'Fruit Varities'}}/>
        <Stack.Screen name='leaves' component={leaves} options={{title:'Shake Varities'}}/>
        <Stack.Screen name='GetallorderDate' component={OrderList} options={{title:' Screen'}}/>
        <Stack.Screen name='OrderList' component={PhoneNumberForm} options={{title:' Screen'}}/>
        <Stack.Screen name='See' component={SeeAllScreen} options={{title:' SeeAll Screen'}}/>
        <Stack.Screen name='profile' component={Profile} options={{title:' Profile Screen'}}/>
        <Stack.Screen name='new' component={NewPage} options={{title:' Vegetable Varities'}}/>
        <Stack.Screen name='order' component={Order} options={{title:'orders'}}/>  
        <Stack.Screen name='Payment' component={Payment} options={{title:'Payment'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
};

export default App;