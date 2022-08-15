<script setup lang="ts">
import Dialog from '@/components/chat/Dialog.vue'
</script>


<template>
	<Dialog />
</template>


<style scoped>
::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	/* background: #f1f5f9; */
	/* border-radius: 10px; */
}

.dark #ChatMsgList::-webkit-scrollbar-track {
	/* background: #262626; */
	/* border-radius: 10px; */
}

::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background: #2563eb;
}

::-webkit-scrollbar-thumb:hover {
	background: #60a5fa;
}

.dark #ChatMsgList::-webkit-scrollbar-thumb {
	background: #10b981;
}

.dark #ChatMsgList::-webkit-scrollbar-thumb:hover {
	background: #6ee7b7;
}
</style>
