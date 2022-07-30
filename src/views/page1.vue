<template>
	<div>
		{{ counter.count }}
		<button @click="add">ADD</button>
	</div>
</template>
<script setup>
import { useCounterStore } from '@/store'

const counter = useCounterStore()

function add() {
	// counter.count++
	// with autocompletion ✨
	// counter.$patch({ count: counter.count + 1 })
	// or using an action instead
	counter.increment()
}

</script>