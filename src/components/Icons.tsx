import {PropsWithChildren} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/FontAwesome';

type iconsProps = PropsWithChildren<{
  size: number;
  name: string;
  color?: string;
}>;

const Icon = ({name, size, color}: iconsProps) => {
  switch (name) {
    case 'finger-print-outline':
      return <MaterialIcons name="fingerprint" size={size} color={color} />;
    case 'lock-closed-outline':
        return <FontAwesome name="lock" size={size} color={color} />;
    case 'at-sharp':
        return <Ionicons name="heart" size={size} color={color} />;
    case '3iw': 
        // return <Ionicons.Button name="heart" size={size} color={color} />;
        return <Ionicons name="heart" size={30} color="#000" />
    default:
        break;
  }
};

export default Icon;
