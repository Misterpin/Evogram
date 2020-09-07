import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2000-01-01"}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: '114%'}}
        date={this.state.date}
        mode="date"
        format="YYYY-MM-DD"
        minDate="1990-01-01"
        maxDate="2020-06-01"
        confirmBtnText="Подтвердить"
        cancelBtnText="Закрыть"
        useNativeDriver="true"
        iconSource='0'
        customStyles={{
            dateInput: {
            height: 30,
            opacity: 0.7,
            marginTop: 5,
            paddingLeft: 10,
            borderWidth: 0,
            borderBottomWidth: 2,
            alignItems: 'flex-start'
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}