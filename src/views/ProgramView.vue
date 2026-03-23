<script setup lang="ts">

defineProps<{
  programEvents: {
    date: string;
    time: string;
    event: string;
    location: {
      name: string;
      link: string;
    };
  }[];
}>()
</script>

<template>
  <PageTitle mainTitle="Program" />
  <section class="main p-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Event</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="program in programEvents" :key="program.event">
          <th scope="row">{{ program.date }}</th>
          <td>{{ program.time }}</td>
          <td>{{ program.event }}</td>
          <td>
          <a :href="`https://maps.app.goo.gl/${program.location.link}`" target="_blank">{{ program.location.name }}</a>
          </td>
        </tr>
      </tbody>
    </table>

  </section>
</template>

<style scoped>
.custom-infowindow {
  background: var(--bs-primary);
  color: var(--bs-secondary);
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
}
</style>
