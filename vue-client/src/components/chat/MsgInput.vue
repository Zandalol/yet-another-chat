<script setup lang="ts">
import IconUploadImage from '@/components/icons/IconUploadImage.vue'
import IconAddEmoji from '@/components/icons/IconAddEmoji.vue'
import IconSendMessage from '@/components/icons/IconSendMessage.vue'
</script>


<template>
	<form>
		<label for="chat" class="sr-only">Your message</label>
		<div class="flex items-center py-4 px-3 border bg-gray-100 dark:bg-stone-900 dark:border-emerald-900">
			<button type="button"
			class="rounded-lg cursor-pointer mx-2
			text-blue-600 hover:text-blue-400 dark:text-emerald-500 dark:hover:text-emerald-300">
				<IconUploadImage />
				<span class="sr-only">Upload image</span>
			</button>

			<button type="button"
			class="rounded-lg cursor-pointer mx-2
			text-blue-600 hover:text-blue-400 dark:text-emerald-500 dark:hover:text-emerald-300">
				<IconAddEmoji />
				<span class="sr-only">Add emoji</span>
			</button>

			<textarea id="chat" rows="1" placeholder="Введите Ваше сообщение..."
			class="rounded-lg block mx-4 p-2.5 w-full text-sm resize-none overflow-hidden border
			text-gray-900 bg-white border-gray-300 focus:ring-blue-500
			focus:border-blue-500 dark:bg-stone-900 dark:border-gray-600 dark:placeholder-gray-400
			dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"></textarea>

			<button type="submit"
			class="rounded-lg cursor-pointer mx-2
			text-blue-600 hover:text-blue-400 dark:text-emerald-500 dark:hover:text-emerald-300">
				<IconSendMessage />
				<span class="sr-only">Send message</span>
			</button>
		</div>
	</form>
</template>
