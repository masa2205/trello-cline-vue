<template>
    <draggable v-model="fruits">
       <div v-for="(v, i) in fruits" :key="i">{{ v }}</div>
    </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    name:"HelloWorld",
    components: {
        draggable,
    },
    data() {
        return {
            fruits: [
                "apple",
                "banana",
                "cherry"
            ],
        }
    }
}
</script>