<script setup lang="ts">
import {Deadline} from "@/stores/Deadline";
defineProps<{
  deadlines: Deadline[]
}>();
</script>

<template>
  <PageTitle mainTitle="Deadlines" />
  <section class="main p-4">
    <div class="main-text">
      <h1 class="reveal" style="--delay: 0.1s">Important Dates</h1>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="deadline in deadlines" :key="deadline.name">
          <strong>{{ deadline.name }}:</strong> {{ deadline.date }}
        </li>
      </ul>
    </div>
  </section>
</template>
