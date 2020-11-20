<template>
    <div>
        <h1>Counter: {{counter}}</h1>
        <button @click="decrement">Decrement</button>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'Counter',
    computed: {
        ...mapState ({
            counter: state => state.counter
        })
    },
    methods: {
        ...mapMutations([
            'decrement',
            'increment'
        ])
    }
}
</script>