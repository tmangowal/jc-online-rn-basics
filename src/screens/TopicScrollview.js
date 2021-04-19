import React from 'react';
import { View, Text, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { primaryBrand, secondaryBrand } from '../styles/colors'

const todoItemStyles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    borderWidth: 1, 
    borderColor: secondaryBrand,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 4,
    alignItems: "center"
  },
  todoBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4
  }
})

const TodoItem = ({ todoActivity }) => {
  return (
    <View style={{ 
        ...todoItemStyles.todoItemContainer
      }} >
      <Text>{todoActivity}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight style={{ backgroundColor: primaryBrand, ...todoItemStyles.todoBtn }} activeOpacity={0.8} underlayColor="white" onPress={() => null} >
          <Text>Done</Text>
        </TouchableHighlight>
        <TouchableOpacity activeOpacity={0.8} style={{ ...todoItemStyles.todoBtn, backgroundColor: secondaryBrand }}>
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const TopicScrollview = () => {

  const todoData = [
    {
      todoActivity: "Coding"
    },
    {
      todoActivity: "Makan"
    },
    {
      todoActivity: "Minum"
    },
    {
      todoActivity: "Rebahan"
    },
    {
      todoActivity: "Belajar"
    },
    {
      todoActivity: "Ujian"
    },
    {
      todoActivity: "Kerja"
    },
    {
      todoActivity: "Jogging"
    },
    {
      todoActivity: "Traveling"
    },
    {
      todoActivity: "Belanja"
    },
    {
      todoActivity: "Tidur"
    },
    {
      todoActivity: "Bangun"
    },
    {
      todoActivity: "Design"
    },
  ]

  const renderTodos = () => {
    return todoData.map((val) => {
      return <TodoItem key={val.todoActivity} todoActivity={val.todoActivity} />
    })
  }

  const renderTodoFlatlist = ({ item }) => {
    return <TodoItem todoActivity={item.todoActivity} />
  }

  return (
    <View style={{ backgroundColor: 'lightblue', height: '100%' }}>
      {/* <TodoItem todoActivity="Coding" /> */}
      {/* {renderTodos()} */}
      <FlatList
        keyExtractor={(item) => item.todoActivity}
        data={todoData}
        // renderItem={({ item }) => renderTodoFlatlist(item.todoActivity)}
        renderItem={renderTodoFlatlist}
      />
    </View>
  );
};

export default TopicScrollview;
