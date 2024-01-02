import { DimensionValue, Text, TouchableOpacity } from "react-native"

type props=  {
    name: string;
    color: string;
    width?: DimensionValue;
    func: () => void,
}

export default function MyBotton({name, color, width, func}: props){
    return <TouchableOpacity
    onPress={func}
    style={{
      backgroundColor: color,
      padding: 20,
      borderRadius: 10,
      marginVertical: 30,
      // width: width,
      flex: 4,
    }}
  >
    <Text
      style={{
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
        color: "#fff",
      }}
    >
      {name}
    </Text>
  </TouchableOpacity>
}