import {PropsWithChildren} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

type iconsProps = PropsWithChildren<{
  size?: number;
  name: string;
  color?: string;
}>;

const Icon = ({name, size, color}: iconsProps) => {
  switch (name) {
    case 'fingerprint':
      return <MaterialIcons name="fingerprint" size={size} color={color} />;
    case 'lock':
        return <FontAwesome name="lock" size={size} color={color} />;
    case 'at-sharp':
        return <Ionicons name="at-sharp" size={size} color={color} />;
    default:
        break;
  }
};

export default Icon;
