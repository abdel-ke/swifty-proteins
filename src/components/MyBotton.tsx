import { Button } from "@rneui/base";
import { DimensionValue, StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native"

type props=  {
    name: string;
    color: string;
    func: () => void,
    loading: boolean,
    containerStyle: StyleProp<ViewStyle>
}

export default function MyBotton({name, color, func, loading, containerStyle}: props){
  //   return <TouchableOpacity
  //   onPress={func}
  //   style={{
  //     backgroundColor: color,
  //     padding: 20,
  //     borderRadius: 10,
  //     marginVertical: 30,
  //     // width: width,
  //     flex: 4,
  //   }}
  // >
  //   <Text
  //     style={{
  //       textAlign: "center",
  //       fontWeight: "700",
  //       fontSize: 16,
  //       color: "#fff",
  //     }}
  //   >
  //     {name}
  //   </Text>
  // </TouchableOpacity>
  return <Button
  onPress={func}
  title={name}
  loading={loading}
  loadingProps={{
    size: 'small',
    color: 'rgba(111, 202, 186, 1)',
  }}
  titleStyle={{ fontWeight: '700' }}
  buttonStyle={{
    backgroundColor: color,
  }}
  containerStyle={containerStyle}
/>
}