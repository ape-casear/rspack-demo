<template>
    <div id="app" class="app">
        <Child></Child>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {
        Child: () => import('./child.vue'),
    },
}
</script>
