import React, { useEffect, useState, useContext } from "react";
import { Modal, TouchableOpacity } from "react-native";
import { Background, ListBalance, Area, Title, List } from "./styles";
import Header from '../../components/Header'
import api from "../../services/api";
import { format } from 'date-fns'
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../components/BalanceItem";
import Icon from 'react-native-vector-icons/MaterialIcons'
import HistoricoList from "../../components/HistoricoList";
import CalendarModal from "../../components/CalendarModal";

export default function Home(){ 
  const isFocused = useIsFocused();
  const [listBalance, setListBalance] = useState([])
  const [dataMovements, setDataMovements] = useState(new Date())
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)
  
    

  useEffect(() =>{
    let isActive = true;
    
    async function getMovements() {
      
      const response = await api.get('/receives');      
      let date = new Date(dataMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000
      let dateFormatted = format(onlyDate, 'dd/MM/yyyy')
      

      const receives = await api.get('/receives',{
        params:{
          date: dateFormatted
        }
      })

      const balance = await api.get('/balance',{
        params:{
          date: dateFormatted
        }
      })
      if(isActive){
        setListBalance(balance.data)
        setMovements(receives.data)
      }      
    }
    getMovements()

    return () => {
      isActive = false;
    }    

  },[isFocused, dataMovements])

  async function handleDelete(id){
    try{
      await api.delete('/receives/delete',{
        params:{
          item_id: id
        }
      })
      setDataMovements(new Date())
    }
    catch(error){
      console.log(error)
    }
  }

  function filterDateMovements(dateSelected){
    setDataMovements(dateSelected)
  }
   
  return(
    <Background>
      <Header title={'Minhas movimentações'} />

      <ListBalance 
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ item => item.tag }
        renderItem={({ item }) => (
          <BalanceItem data={item} />
        )}
      />

      <Area>
        <TouchableOpacity onPress={() => setModalVisible(true)} >
          <Icon 
            name="event"
            color="#121212"
            size={30}
          />
        </TouchableOpacity>
        <Title> Últimas movimentações </Title>      
      </Area>

      <List
        data={movements}
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => <HistoricoList data={item} deleteItem={handleDelete} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      <Modal visible={modalVisible} animationType="fade" transparent={true} >
        <CalendarModal 
        closeModal={() => setModalVisible(false)} 
        handleFilter={filterDateMovements}
        />
      </Modal>
 

      
    </Background>
  )
}
