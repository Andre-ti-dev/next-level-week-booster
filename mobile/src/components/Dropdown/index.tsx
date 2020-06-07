import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

interface Props {
  placeholderText: string;
  items: {
    label: string;
    value: string;
  }[],
  onSelected: (value: string) => void;
}
 
export const Dropdown: React.FC<Props> = ({ placeholderText, items, onSelected }) => {
    const placeholder = {
      label: placeholderText,
      value: null,
      color: '#9EA0A4',
    };
    return (
      <View style={styles.container}>
        <RNPickerSelect
            onValueChange={(value) => onSelected(value)}
            placeholder={placeholder}
            items={items}
            style={{
              ...pickerSelectStyles,
              iconContainer: {
                top: 18,
                right: 12,
              },

            }}
            Icon={() => {
              return <Feather name="chevron-down" size={24} color="#A0A0B2" />;
            }}
        />
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingLeft: 16
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 30,
    color: '#A0A0B2',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 30,
    color: '#A0A0B2',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default Dropdown;