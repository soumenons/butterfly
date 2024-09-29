import { Tabs } from "expo-router"
import { TabBar } from "../../components/TabBar";
import { Text } from "react-native";
import MedLog from '../../components/MedLog';

const TabsLayout = () => {
    return (
        <Tabs 
            tabBar={props=> <TabBar {...props} />}
        >
            <Tabs.Screen 
            name="log" 
            options={{
                headerTitle: "log",
                title: "Log",
                }} />

            <Tabs.Screen 
            name="index" 
            options={{
                headerTitle: "Home",
                title: "Home",
            }}
            />

            <Tabs.Screen 
            name="user" 
            options={{
                headerTitle: 'Profile',
                title: "Profile",
                }} />
        </Tabs>
    ); 
};

export default TabsLayout;