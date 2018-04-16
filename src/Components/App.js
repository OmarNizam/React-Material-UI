import React, { Component, Fragment } from "react";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

/***
 * *muscles: Is static cause it will not change, it is category
 * *exercises: It might be change cause maybe add them and delete them and edit them too.
 * so the exercises them self needs to be state.
 ***/

export default class extends Component {
  state = {
    exercises
  };

  getExercisesByMuscels() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  render() {
    const exercises = this.getExercisesByMuscels();
    console.log(exercises)
    return (
      <Fragment>
        <Header />

        <Exercises exercises={exercises} />

        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
