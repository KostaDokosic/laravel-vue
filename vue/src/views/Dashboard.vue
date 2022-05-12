<template>
  <PageComponent title="Dashboard">
    Welcome {{ $store.state.user.data.name }}

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">Id</th>
            <th scope="col" class="px-6 py-3">Username</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Created At</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody>
          
            <UserRow v-for="user in users" :key="user.id" :userData="user" />
          
        </tbody>
      </table>
    </div>
  </PageComponent>
</template>

<script>
import PageComponent from "../components/PageComponent.vue";
import UserRow from '../components/UserRow.vue';

import store from "../store";
export default {
  components: {
    PageComponent,
    UserRow
  },
  data() {
    return {
      users: []
    }
  },
  beforeMount() {
    store.dispatch('loadUsers', store.state.user.data.id)
      .then(usersData => this.users = usersData)
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
</style>