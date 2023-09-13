import {Text, View} from "react-native";
import * as React from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import {useState} from "react";
import {DateTime} from "luxon";
import {useRecoilState} from "recoil";
import {expireDateState} from "../state/expireDateState";

export function SettingsScreen() {

  const [expireDate, setExpireDate] = useRecoilState<DateTime>(expireDateState);
  const [items, setItems] = useState([
    { label: "Milk", value: "milk" },
    { label: "Bread", value: "bread" },
    { label: "Cheese", value: "cheese" },
  ]);
  const [selectedItem, setSelectedItem] = useState<string>(null);
  const [itemsOpen, setItemsOpen] = useState(false);
  return (
    <View className="flex-1 justify-center items-center">
      <View className="flex">
        <DropDownPicker
          open={itemsOpen}
          value={selectedItem}
          items={items}
          setOpen={setItemsOpen}
          setValue={() => {}}
          placeholder="Select item"
          onChangeValue={(i) => setSelectedItem(i.value)}
          zIndex={3000}
          zIndexInverse={1000}
        />
      </View>
      <Text>Expiration Date</Text>
      <DateTimePicker
        className=""
        accessibilityLabel={"Expiration Date"}
        value={expireDate?.toJSDate()}
        onChange={(i) => {setExpireDate(DateTime.fromSeconds(i.nativeEvent.timestamp))}}
      />
    </View>
  );
}