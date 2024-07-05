<template>
    <div id="app">
        <h1>{{ message }}</h1>
        <button @click="changeMessage">Change Message</button>
    </div>
</template>

<script>
export default {
    name: 'DashPage',
    data() {
        return {
            message: 'Hello Vue!'
        };
    },
    methods: {
        changeMessage() {
            this.message = 'Message changed!';
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>