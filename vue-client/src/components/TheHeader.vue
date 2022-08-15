<script setup lang="ts">
import { RouterLink } from 'vue-router'
import toggleTheme from '@/components/services/toggleTheme'
</script>


<template>
	<div class="grid grid-cols-3 divide-x">
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<button
			@click="toggleTheme()"
		>toggleTheme()</button>
	</div>
</template>
