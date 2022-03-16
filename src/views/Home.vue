<template>
  <h1 class="text-primary mt-5 mb-4">TODOS</h1>
  <div
      class="input-group mb-3"
  >

    <input
        class="form-control form-control-lg me-2"
        type="text"
        autofocus
        autocomplete="off"
        placeholder="What needs to be done?"
        @keyup.enter="addTodo"
    />


    <input
        class="form-control form-control-lg"
        type="date"
        autofocus
        v-model="currentDateText"
        @change="updateDate"

    />
  </div>
  <ul class="list-group mb-3" v-show="todos.length">
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>
        <input
            class="form-check-input me-3"
            type="checkbox"
            :checked="allChecked"
            @change="toggleAll(!allChecked)"
        />
        <span class="text-secondary px-1">
          {{ remaining }} {{ pluralize(remaining, "item") }} left
        </span>
      </div>
      <div>
        <input
            class="form-control"
            type="text"
            placeholder="Search Todo"
            v-model="search"
        />
      </div>
      <div>
        <button
            class="btn"
            @click="sortByDate(myIcon)"
            data-sort="none"
        >
          Date
          <font-awesome-icon :icon="myIcon"/>
        </button>
      </div>

      <nav class="nav">
        <ul class="nav">
          <li class="nav-item" v-for="(val, key) in filters" :key="key">
            <a
                class="nav-link px-2 py-1"
                :href="'#/' + key"
                :class="{ 'link-secondary': visibility !== key }"
                @click="visibility = key"
            >{{ capitalize(key) }}
            </a>
          </li>
        </ul>
      </nav>
    </li>
    <section v-for="(val,key) in dueDateGroups" :key="key">
      <div>{{ key }}</div>

      <TodoItem v-for="todo in val" :key="todo.id" :todo="todo"/>
    </section>
  </ul>
  <button
      type="button"
      class="btn btn-primary w-100"
      v-show="todos.length > remaining"
      @click="clearCompleted"
  >
    Clear completed
  </button>
</template>

<script>
import {mapActions} from "vuex";
import TodoItem from "@/components/TodoItem.vue";
import {faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
// import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.done),
  completed: (todos) => todos.filter((todo) => todo.done)
};

export default {
  name: "Home",
  props: {
    filter: String,
  },
  components: {
    TodoItem
  },
  data() {
    return {
      visibility: this.filter,
      filters: filters,
      myDateIcon: faSort,
      currentDateText: new Date().toISOString().substr(0, 10),
      search: ""
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    allChecked() {
      return this.todos.every((todo) => todo.done);
    },
    filteredTodos() {
      return filters[this.visibility](this.todos.filter((todo) => {
        return todo.text.toUpperCase().includes(this.search.toUpperCase())
      }));
    },
    remaining() {
      return this.todos.filter((todo) => !todo.done).length;
    },
    myIcon() {
      return this.myDateIcon
    },
    dueDateGroups() {
      const dueDates = {};
      const currentDate = new Date().toISOString().split("T")[0];
      const tomorrowDate = new Date(new Date().getTime() + 86400000).toISOString().split("T")[0];
      this.filteredTodos.forEach((todo) => {
        var currentGroup = todo.dueDate;
        if (todo.dueDate < currentDate) {
          currentGroup = "Overdue";
        } else if (todo.dueDate == currentDate) {
          currentGroup = "Today"
        } else if (todo.dueDate == tomorrowDate) {
          currentGroup = "Tomorrow";
        }
        if (!(currentGroup in dueDates)) {
          dueDates[currentGroup] = [];
        }
        dueDates[currentGroup].push(todo);
      });
      return dueDates;
    },
  },
  methods: {
    ...mapActions(["toggleAll", "clearCompleted"]),
    addTodo(e) {
      const text = e.target.value.trim();
      const date = this.currentDateText
      if (text) {
        this.$store.dispatch("addTodo", {text: text, date: date});
        e.target.value = "";
      }
    },
    pluralize(n, w) {
      return n === 1 ? w : w + "s";
    },
    capitalize(s) {
      return s.charAt(0).toUpperCase() + s.slice(1);
    },
    sortByDate(e) {
      switch (e.iconName) {
        case "sort":
          this.myDateIcon = faSortDown;
          this.todos.sort((a, b) => {
            return new Date(b.dueDate) - new Date(a.dueDate)
          });
          break;
        case "sort-down":
          this.myDateIcon = faSortUp;
          this.todos.sort((a, b) => {

            return new Date(a.dueDate) - new Date(b.dueDate)
          });
          break;
        case "sort-up":
          this.myDateIcon = faSort;
          this.todos.sort((a, b) => {

            return a.id - b.id
          });
          break;
      }
    },
    updateDate(e) {
      this.currentDateText = e.target.value.trim();
    }
  },
};
</script>

<style lang="scss">
.form-check-input {
  cursor: pointer;
}
</style>
