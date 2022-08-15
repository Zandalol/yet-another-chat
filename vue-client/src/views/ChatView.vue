<script setup lang="ts">
import DialogHeader from '@/components/chat/DialogHeader.vue'
import DialogList from '@/components/chat/DialogList.vue'
import MsgHeader from '@/components/chat/MsgHeader.vue'
import MsgInput from '@/components/chat/MsgInput.vue'
import MsgList from '@/components/chat/MsgList.vue'
</script>

<template>
	<div class="flex flex-row border shadow-md mx-16 w-full max-w-fit max-h-full
	bg-white dark:bg-neutral-900 dark:border-emerald-900">
		<div class="basis-1/5 border dark:border-emerald-900">
			<DialogHeader />
			<DialogList />
		</div>

		<div class="basis-3/5 flex flex-col">
			<div class="">
				<MsgHeader />
			</div>

			<div class="">
				<MsgList />
			</div>

			<div class="">
				<MsgInput />
			</div>
		</div>

		<div class="basis-1/5">
			123
		</div>
	</div>
</template>


<style scoped>
</style>
