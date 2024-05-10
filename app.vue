import { _0 } from './.nuxt/types/tailwind.config';
<template>
  <Html class="bg-zinc-900">
    <div v-auto-animate>
      <NuxtPage v-auto-animate />
    </div>
    <UNotifications v-auto-animate />
  </Html>
</template>

<style>
body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-thumb {
  background-color: #27272a;
  border-radius: 4px;
}

body::-webkit-scrollbar-track {
  background-color: #181818;
}

::-webkit-scrollbar {
  background-color: #27272a;
  border-radius: 4px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: #181818;
}

::-webkit-scrollbar-thumb:horizontal {
  background-color: #27272a;
  border-radius: 4px;
}
</style>
