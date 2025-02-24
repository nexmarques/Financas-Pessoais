import React, {useState} from 'react';
import {
  Container,
  ButtonFilterText,
  ModalContent,
  ButtonFilter,
} from './styles';
import {TouchableWithoutFeedback, View} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import ptBR from './localeCalendar';

LocaleConfig.locales['pt-BR'] = ptBR;
LocaleConfig.defaultLocale = 'pt-BR';

export default function CalendarModal({ closeModal, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({})


  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString))

    let markedDay = {};
    markedDay[date.dateString] = {
      selected: true,
      selectedColor: '#3b3dbf',
      textColor: '#fff'
    };

    setMarkedDates(markedDay);
  }

  function handleFilterDate(){
    handleFilter(dateNow)
    closeModal()
  }

  return (
    <Container>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={{flex: 1}} />
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
          onDayPress={handleOnDayPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayBackgroundColor: '#fff'
          }}
        />

        <ButtonFilter onPress={handleFilterDate} >
          <ButtonFilterText> Filtrar </ButtonFilterText>
        </ButtonFilter>
      </ModalContent>

    </Container>
  );
}
