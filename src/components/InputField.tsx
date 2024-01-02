import { Dispatch, SetStateAction } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  name: any;
  actionText?: string;
  placeHolder: string;
  secure?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  keyboardType?: KeyboardTypeOptions
};

export default function InputField({
  name,
  actionText,
  placeHolder,
  secure = false,
  keyboardType = "default",
  onChange,
}: Props) {
  return (
    <View style={[styles.container]}>
      {/* <View style={styles.flex}> */}
        {name}
        <TextInput
          style={styles.input}
          placeholder={placeHolder}
          secureTextEntry={secure}
          onChangeText={onChange}
          keyboardType={keyboardType}
        />
      <Text
        style={[
          { textAlignVertical: "bottom", color: "purple", fontWeight: "bold" },
        ]}
      >
        {actionText}
      </Text>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  // flex: {
    // flexDirection: "row",
    // marginTop: 10,
    // backgroundColor: "red",
    // flex: 1,
  // },
  container: {
    flexDirection: "row",
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1
    // marginLeft: 5,
    // backgroundColor: "purple",
  }
});
