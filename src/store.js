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
    }
  }
});
