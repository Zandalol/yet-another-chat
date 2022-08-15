<script setup lang="ts">
import AvatarPlaceholderIcon from '@/components/icons/IconAvatarPlaceholder.vue'
</script>


<template>
	<div class="py-3 sm:py-4 px-4">
		<div class="flex space-x-4">
			<div class="flex-shrink-0">
				<slot name="avatar">
					<AvatarPlaceholderIcon />
				</slot>
			</div>

			<div class="flex-1 min-w-0">
				<a href="">
					<span class="text-sm font-bold text-blue-600 truncate dark:text-emerald-500 hover:underline">
						<slot name="name">Имя Фамилия</slot>
					</span>
				</a>

				<span class="text-sm font-normal ml-1 text-gray-400 truncate dark:text-gray-400">
					<slot name="time">00:00</slot>
				</span>

				<p class="text-sm mt-1 text-gray-600 dark:text-gray-100">
					<slot name="message">...</slot>
				</p>
			</div>
		</div>
	</div>
</template>
