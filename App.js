import * as React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createDrawerNavigator
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {Dimensions} from "react-native";

import DanismanBilgileri from "./Screens/DanismanBilgileri";
import SideBar from "./components/SideBar";
import DersSec from "./Screens/DersSec";
import DersAra from "./Screens/DersAra";
import DersProgramiGoruntule from "./Screens/DersProgramiGoruntule";
import OgretimProgrami from "./Screens/OgretimProgrami";
import ProfiliYonet from "./Screens/ProfiliYonet";
import TranskriptAl from "./Screens/TranskriptAl";
import Ogrenciler from "./Screens/Ogrenciler";

const DrawerNavigator = createDrawerNavigator({
    DanismanScreen: {
        screen: DanismanBilgileri,
        navigationOptions:{
            title: "Danışman Bilgileri",
            style:{textAlign:"center", size:16}
        }
    },
    DersSecScreen:{
        screen: DersSec,
        navigationOptions:{
            title: "Ders Seç",
            style:{textAlign:"center", size:16}
        }
    },
    DersAraScreen:{
        screen: DersAra,
        navigationOptions:{
            title: "Ders Ara",
            style:{textAlign:"center", size:16}
        }
    },
    DersProgScreen: {
        screen: DersProgramiGoruntule,
        navigationOptions:{
            title: "Ders Programı",
            style:{textAlign:"center", size:16}
        }
    },
    OgretimProgScreen:{
        screen: OgretimProgrami,
        navigationOptions:{
            title: "Öğretim Programı",
            style:{textAlign:"center", size:16}
        }
    },
    ProfileScreen:{
        screen: ProfiliYonet,
        navigationOptions:{
            title: "Profil",
            style:{textAlign:"center", size:16}
        }
    },
    TranscriptScreen:{
        screen:TranskriptAl,
        navigationOptions:{
            title: "Transcript Al",
            style:{textAlign:"center", size:16}
        }
    },
    OgrecilerScreen:{
        screen:Ogrenciler,
        navigationOptions:{
            title: "Öğrenciler",
            style:{textAlign:"center", size:16}
        }
    }
},
{
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Dimensions.get("window").width * 0.85,
    hideStatusBar: true,

    contentOptions:{
        activeBackgroundColor: "rgba(212, 118, 207, 0.2)",
        activeTintColor: "#531158",
        itemsContainerStyle:{
            marginTop: 16,
            marginHorizontal: 8
        },
        itemStyle:{
            borderRadius: 4
        }
    }
}
);


export default createAppContainer(DrawerNavigator);

/*function Feed({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button
        title="Profili Yönet"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
      <Button
        title="Ders Programı"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

//const isDrawerOpen = useIsDrawerOpen();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
*/







