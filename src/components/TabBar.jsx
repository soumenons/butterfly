import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs'
import TabBarButton from "./TabBarButton";


export function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TabBarButton 
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? '#DFC2CF' : '#F5F5F5' }
            label={label}
            />
        //   <TouchableOpacity
        //     key={route.name}
        //     accessibilityRole="button"
        //     accessibilityState={isFocused ? { selected: true } : {}}
        //     accessibilityLabel={options.tabBarAccessibilityLabel}
        //     testID={options.tabBarTestID}
        //     onPress={onPress}
        //     onLongPress={onLongPress}
        //     style={styles.tabbarItem}
        //   >
        //     {icon[route.name] && icon[route.name]({})}
        //     <Text style={{ color: isFocused ? '#DFC2CF' : '#F5F5F5' }}>
        //       {label}
        //     </Text>
        //   </TouchableOpacity>
        );
      })}
    </View>
  );
}


const styles = StyleSheet.create({
    tabbar: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666666',
        padding: 10,
        marginBottom: 15,
        borderRadius: 30,
        marginHorizontal: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
        color: '#F5F5F5',
        
    },

    // tabbarItem: {
    //     flex: 1,
    //     gap: 5,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     color: '#F5F5F5',
    // }


})