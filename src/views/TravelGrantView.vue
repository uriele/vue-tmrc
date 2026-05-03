<script setup lang="ts">
import PageTitle from '@/components/PageTitle.vue'
import type { Person } from '@/stores/Person'
defineProps({
  grantawardemail: {
    type: String,
    required: true,
  },
  conferencechair: {
    type: Object as () => Person,
    required: true,
  }
})
</script>

<template>
  <PageTitle mainTitle="Travel Grants" />
  <section class="main p-4">
    <p class="lead">
      Students presenting posters at the poster session or delivering oral presentations at TMRC 2026 are eligible to apply for travel
      grants up to $1000. To apply for travel grants, confirmed conference registration and digest submission is mandatory.
      Please submit to <a :href="`mailto:${grantawardemail}`">{{ grantawardemail }}</a> an email with the subject line:
      <span class="text-secondary">’Travel Grant Application for {Insert applicant name}’</span> and
      include the following in the email body:
    </p>
    <div class="card border-dark bg-primary text-secondary mb-3" style="--delay: 0.35s">
      <div class="card-body">
        <ul class="card-text">
        <li>Two-page digest submitted to the conference</li>
        <li>Confirmed registration receipt</li>
        <li>Recommendation letter from adviser</li>
      </ul>
    </div>
  </div>
<p class="lead">
Please direct any questions to the Conference Chair, <a :href="`mailto:${conferencechair.email}`">{{ conferencechair.name }}</a>.
</p>
</section>
</template>
