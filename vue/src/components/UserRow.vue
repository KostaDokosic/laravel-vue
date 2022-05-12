<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
    <th
      scope="row"
      class="
        px-6
        py-4
        font-medium
        text-gray-900
        dark:text-white
        whitespace-nowrap
      "
    >
      {{userData.id}}
    </th>
    <td class="px-6 py-4">{{userData.name}}</td>
    <td class="px-6 py-4">{{userData.email}}</td>
    <td class="px-6 py-4">{{userData.created_at}}</td>
    <td class="px-6 py-4 text-right">
      <a @click="removeUser"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Remove</a
      >
    </td>
  </tr>
</template>

<script>
import store from '../store';
export default {
    props: ['userData'],

    methods: {
      removeUser() {
        store.dispatch('removeUser', store.state.user.data.id, userData.id);
      }
    }
};
</script>

<style>
</style>