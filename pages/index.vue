<script setup>
import { useBoardStore } from "../stores/boardStore";

const boardStore = useBoardStore();
const route = useRoute();
const router = useRouter();

const newColumnName = ref("");

const isModalOpen = computed(() => {
  return route.name === "index-tasks-id";
});

function addColumn() {
  boardStore.addColumn(newColumnName.value);
  newColumnName.value = "";
}

function closeModal() {
  router.push("/");
}
</script>

<template>
  <div class="board-wrapper">
    <main class="board" v-auto-animate>
      <BoardColumn
        v-for="(column, columnIndex) in boardStore.board.columns"
        :key="column.id"
        :column="column"
        :columnIndex="columnIndex"
      />
      <UContainer class="column">
        <UInput
          v-model="newColumnName"
          type="text"
          placeholder="Create new column"
          icon="i-heroicons-plus-circle-solid"
          @keyup.enter="addColumn"
        />
      </UContainer>
    </main>
    <UModal v-model="isModalOpen" @close="closeModal">
      <NuxtPage :key="route.fullPath" />
    </UModal>
  </div>
</template>
