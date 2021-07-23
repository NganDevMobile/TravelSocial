import {icons} from '@assets';
import {TextInput} from '@components';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {TouchableOpacity, Platform} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

const Calendar = ({testID, value, is24Hour, display}) => {
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const [date, setDate] = useState(new Date());
  var dateFormat = require('dateformat');
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios');
    setDate(selectedDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <TouchableOpacity onPress={showDatepicker}>
      <TextInput
        disabled={true}
        placeholder={''}
        value={dateFormat(date, 'dd/mm/yyyy')}
        inputStyle={styles.input}
        leftIcon={icons.birthday}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}
    </TouchableOpacity>
  );
};

export default Calendar;
