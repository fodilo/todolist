import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // state of loggedin
    LoggedIn: localStorage.getItem("loggedin") || null,
    // lists of todos
    toDos: []
  },
  mutations: {
    // login : mutate the state of loggedIn
    login(state) {
      state.LoggedIn = true;
    },
    // logout : mutate the state of loggedIn
    logout(state) {
      state.LoggedIn = false;
    },
    // add to do item
    addToDo(state, param) {
      state.toDos.push(param);
    },
    // check toDoItem
    checkOffToDo(state, param) {
      state.toDos.find(element => {
        return (element.id = param);
      }).checked = true;
    },
    //remove toDoItem
    removeToDo(state, param) {
      state.toDos = state.toDos.filter(element => {
        return element.id != param;
      });
    },
    //move a to do up (index-1)
    moveUp(state, param) {
      let index = state.toDos.findIndex(element => element.id == param);
      if (index > 0) {
        let first = Object.assign([], state.toDos[index]);
        let second = Object.assign([], state.toDos[index - 1]);
        state.toDos[index - 1] = first;
        state.toDos[index] = second;
      }
    },
    //move a to do up (index+1)
    moveDown(state, param) {
      let index = state.toDos.findIndex(element => element.id == param);
      if (index < state.toDos.length - 1) {
        let first = Object.assign([], state.toDos[index]);
        let second = Object.assign([], state.toDos[index + 1]);
        state.toDos[index + 1] = first;
        state.toDos[index] = second;
      }
    }
  },
  actions: {
    LOGIN(context) {
      context.commit("login");
    },
    LOGOUT(context) {
      context.commit("logout");
    },
    ADD_TODO(context, todo) {
      context.commit("addToDo", todo);
    },
    CHECK_OFF_TODO(context, todoId) {
      context.commit("checkOffToDo", todoId);
    },
    REMOVE_TODO(context, todoId) {
      context.commit("removeToDo", todoId);
    },
    MOVE_UP(context, todoId) {
      context.commit("moveUp", todoId);
    },
    MOVE_DOWN(context, todoId) {
      context.commit("moveDown", todoId);
    }
  }
});
