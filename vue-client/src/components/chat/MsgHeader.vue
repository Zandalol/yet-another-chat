<script setup lang="ts">
import AvatarPlaceholderIcon from '@/components/icons/IconAvatarPlaceholder.vue'
</script>


<template>
	<div class="items-center flex justify-between py-4 px-3 border
	bg-gray-100 dark:bg-stone-900 dark:border-emerald-900">
		<div>
			<a href="">
				<span class="text-base font-bold text-blue-600 truncate dark:text-emerald-500 hover:underline">
					<slot name="name">Имя Фамилия</slot>
				</span>
			</a>
		</div>

		<div>
			<div class="flex-shrink-0">
				<slot name="avatar">
					<AvatarPlaceholderIcon />
				</slot>
			</div>
		</div>
	</div>
</template>
