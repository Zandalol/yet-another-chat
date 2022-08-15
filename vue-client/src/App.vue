<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/TheHeader.vue'
import Sidebar from '@/components/TheSidebar.vue'
</script>


<template>
	<div class="bg-neutral-50 dark:bg-neutral-900 transition-colors h-full min-h-screen max-h-screen overflow-clip">
		<div class="flex flex-col">
			<div class="min-w-full">
				<Header />
			</div>
			<div class="flex flex-row">
				<div>
					<Sidebar />
				</div>
				<div class="grow">
					<RouterView />
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
</style>
