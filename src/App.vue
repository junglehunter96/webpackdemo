<template>
	<div class="container">
		{{ title }}
	</div>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('HELLO WOLRD')
</script>

<style scoped>
.container {
	width: 100%;
	text-align: center;
	font-weight: bold;
	font-size: 32px;
}
</style>
