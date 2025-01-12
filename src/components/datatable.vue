<script setup>
defineProps({
    items: {
        type: Array,
        required: true
    }
})
</script>

<template>
        <ul :for="item in items" :key="item.id">
            <li>{{ item.prodid }}</li>
        </ul>
</template>