import { View } from 'react-native';
import { globalStyles } from '../config/theme/theme';
import MenuItem from '../components/MenuItem';
import Header from '../components/Header';

// Importar la información para cada item
import { animationMenuItems, menuItems, uiMenuItems } from '../constants/optionsData';

export default function indexPage() {
    return (
        <View style={globalStyles.mainContainer}>
            <View style={globalStyles.globalMargin}>
                <View>
                    <Header headerTitle='Home' safe />
                    <View style={globalStyles.itemsContainer}>
                        {animationMenuItems.map(item => (
                            <MenuItem key={item.component} name={item.name} icon={item.icon} path={`${item.type}/${item.component}`} />
                        ))}
                    </View>
                    <View style={globalStyles.itemsContainer}>
                        {menuItems.map(item => (
                            <MenuItem key={item.component} name={item.name} icon={item.icon} path={`${item.type}/${item.component}`} />
                        ))}
                    </View>
                    <View style={globalStyles.itemsContainer}>
                        {uiMenuItems.map(item => (
                            <MenuItem key={item.component} name={item.name} icon={item.icon} path={`${item.type}/${item.component}`} />
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
};