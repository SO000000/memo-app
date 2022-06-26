<template>
  <div class="home text-center">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id" class="">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else class="text-slate-500">メモを登録してみよう</p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  computed: {
    hasMemos() {
      return this.$store.getters.getCount
    },
    memos () {
      return this.$store.getters.getAll
    }
  }
}
</script>


