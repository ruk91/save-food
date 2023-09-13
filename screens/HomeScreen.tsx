import {Text, View} from "react-native";
import * as React from "react";
import {useRecoilValue} from "recoil";
import {DateTime} from "luxon";
import {expireDateState} from "../state/expireDateState";

export function HomeScreen() {
  const expireDate = useRecoilValue<DateTime>(expireDateState);
  return (
    <View className="flex-1 justify-center items-center">
      {
        expireDate ? <Text>Expire date: {expireDate?.toFormat("yyyy-mm-dd")}</Text> : <Text>No items</Text>
      }
    </View>
  );
}