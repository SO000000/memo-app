<template>
    <div class="text-center">
        <div class="mb-2.5"><input type="text" v-model="title" class="w-9/12 border-2"></div>
        <div><textarea v-model="content" class="w-9/12 border-2"></textarea></div>
        <div class="center">
            <button @click='save'
                class="g-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">保存</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemoForm',
    data() {
        return {
            title: '',
            content: ''
        }
    },
    methods: {
        save() {
            let memo = {
                title: this.title,
                content: this.content
            }
            this.$store.commit('save', memo)
            this.$router.push('/')
        }
    }
}
</script>