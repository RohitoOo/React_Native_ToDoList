/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react"
import { Platform, StyleSheet, Text, View, FlatList } from "react-native"
import { Input, CheckBox, Button } from "react-native-elements"
// import AsyncStorage from "@react-native-community/async-storage"

// import { Formik } from "formik"
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
})

type Props = {}
export default class App extends Component<Props> {
  state = {
    name: "Rohito",
    tasks: ["100K/Year"],
    task: "",
    doneTasks: []
  }
  handleChange = task => {
    this.setState({
      task
    })
  }
  handleSubmit = async () => {
    await this.setState({
      tasks: [this.state.task, ...this.state.tasks],
      task: ""
    })
  }
  render() {
    const { task, tasks, name, doneTasks } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{name}'s To Do List</Text>
        <Input
          required
          placeholder="Just Do It!"
          style={{ backgroundColor: "red" }}
          style={{ flex: 1 }}
          value={task}
          onChangeText={task => this.handleChange(task)}
          onSubmitEditing={() => this.handleSubmit()}
        />
        {tasks.length > 0 && (
          <FlatList
            data={tasks}
            renderItem={({ item, index }) => (
              <Text
                key={index}
                style={{ padding: 10 }}
                onLongPress={() => {}}
                onPress={() => {
                  tasks.splice(index, 1)
                  this.setState({
                    tasks,
                    doneTasks: [item, ...doneTasks]
                  })
                }}>
                {index + 1}. {item}
              </Text>
            )}
          />
        )}
        {doneTasks && (
          <FlatList
            data={doneTasks}
            renderItem={({ item, index }) => (
              <Text
                key={index}
                style={{
                  padding: 10,
                  color: "red",
                  textDecorationLine: "line-through"
                }}
                strikeThrough={"true"}>
                {item}
              </Text>
            )}
          />
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    padding: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
})
