import { createStore } from "vuex";

const STORAGE_KEY = "vue-todo-pwa";

const defaultTodos = [
  { id: 1, text: "Learn JavaScript", done: true, dueDate: "2022-03-16" },
  { id: 2, text: "Learn Vue 3", done: true, dueDate: "2022-03-15" },
  { id: 3, text: "Learn Bootstrap 5", done: false, dueDate: "2022-03-17" },
  { id: 4, text: "Build something awesome!", done: false, dueDate: "2022-03-12" },
];

// initial state
const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || defaultTodos,
  // todos:defaultTodos
};

// mutations
const mutations = {
  addTodo(state, todo) {
    state.todos.push(todo);
  },

  removeTodo(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  editTodo(state, { todo, text = todo.text, done = todo.done, dueDate = todo.dueDate }) {
    const index = state.todos.indexOf(todo);
    console.log(todo)
    console.log(index)
    console.log(state.todos)
    state.todos.splice(index, 1, {
      ...todo,
      text,
      done,
      dueDate
    });
  },
};

// actions
const actions = {
  addTodo({ commit }, text) {
    commit("addTodo", {
      id: Date.now(),
      text:text["text"],
      done: false,
      dueDate: text["date"]
    });
  },

  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },

  toggleTodo({ commit }, todo) {
    commit("editTodo", { todo, done: !todo.done });
  },

  editTodo({ commit }, { todo, value }) {
    commit("editTodo", { todo, text: value });
  },
  editDateTodo({ commit }, { todo, value }) {
    commit("editTodo", { todo, dueDate: value });
  },
  toggleAll({ state, commit }, done) {
    state.todos.forEach((todo) => {
      commit("editTodo", { todo, done });
    });
  },

  clearCompleted({ state, commit }) {
    state.todos
      .filter((todo) => todo.done)
      .forEach((todo) => {
        commit("removeTodo", todo);
      });
  },
};

// plugins
const plugins = [
  (store) => {
    store.subscribe((mutation, { todos }) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    });
  },
];

export default createStore({
  state,
  mutations,
  actions,
  plugins,
});
