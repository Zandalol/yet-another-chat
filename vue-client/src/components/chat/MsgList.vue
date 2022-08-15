<script setup lang="ts">
import Msg from '@/components/chat/Msg.vue'
</script>


<template>
	<div id="MsgList" class="py-4 overflow-auto h-[75vh] flex flex-col-reverse">
		<Msg>
			<template #name>Стас Барецкий</template>
			<template #message>What is Lorem Ipsum?</template>
			<template #avatar>
				<div style="background-image: url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80)"
				id="TEST"
				class="w-10 h-10">
				</div>
			</template>
		</Msg>

		<Msg>
			<template #message>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
				has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text
				of the printing and typesetting industry. Lorem Ipsum
				has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text
				of the printing and typesetting industry. Lorem Ipsum
				has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
				of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
				the leap into electronic typesetting, remaining essentially unchanged.</template>
		</Msg>

		<Msg>
			<template #name>Стас Барецкий</template>
			<template #message></template>
		</Msg>

		<Msg>
			<template #message>"But I must explain to you how all this mistaken idea of denouncing pleasure and praising
				pain was born and I will give you a complete account of the system, and expound the actual teachings of
				the great explorer of the truth, the master-builder of human happiness."</template>
		</Msg>

		<Msg>
			<template #name>Стас Барецкий</template>
			<template #message></template>
		</Msg>

		<Msg />
		<Msg />
		<Msg />
		<Msg />
		<Msg />
		<Msg />
		<Msg />
	</div>
</template>


<style scoped>
#TEST {
    -webkit-border-radius: 60px;
    -webkit-background-clip: padding-box;
    -moz-border-radius: 60px;
    -moz-background-clip: padding;
    border-radius: 60px;
    background-clip: padding-box;
    background-size: cover;
    background-position: center center;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	/* background: #f1f5f9; */
	/* border-radius: 10px; */
}

.dark #MsgList::-webkit-scrollbar-track {
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

.dark #MsgList::-webkit-scrollbar-thumb {
	background: #10b981;
}

.dark #MsgList::-webkit-scrollbar-thumb:hover {
	background: #6ee7b7;
}
</style>
