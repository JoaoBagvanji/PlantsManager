import React from "react";
import colors from "../styles/colors";
import { Welcome } from "../pages/Welcome";
import { createStackNavigator } from "@react-navigation/stack";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSelect } from "../pages/PlantSelect";

const StackRoutes = createStackNavigator();
 const AppRoutes: React.FC = () =>(
     <StackRoutes.Navigator screenOptions={{headerShown:false, cardStyle: {backgroundColor:colors.white},}}>
         
        <StackRoutes.Screen name="Welcome" component={Welcome}/>

        <StackRoutes.Screen name="UserIdentification" component={UserIdentification}/>

        <StackRoutes.Screen name="Confirmation" component={Confirmation}/>

        <StackRoutes.Screen name="PlantSelect" component={PlantSelect} />

     </StackRoutes.Navigator>
 )

 
 export default AppRoutes;