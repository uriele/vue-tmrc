<script setup lang="ts">
import { RouterLink } from 'vue-router'

const stats = [
  { label: 'Launch window', value: '3-5 weeks' },
  { label: 'Projects per month', value: '2 max' },
  { label: 'Client retention', value: '90%' },
]

const focusChips = ['Component map', 'Motion cues', 'Content scaffolds']

</script>

<template>
  <section class="hero">
    <div class="hero-text">
      <p class="eyebrow reveal" style="--delay: 0s">TMRC 2026</p>
      <h1 class="reveal" style="--delay: 0.1s">San Diego, California.</h1>
      <p class="lead reveal" style="--delay: 0.2s">
        The 37th Magnetic Recording Conference (TMRC 2026) was held 
        August 3rd – August 5th, 2026 at the campus of the University of California San Diego in San Diego, California.
        The conference focused on significant new advances in magnetic storage, especially Solid State Magnetic Memory and Recording Technologies for >3 Tbits/in2. 
      </p>
    </div>

    <div class="hero-card reveal" style="--delay: 0.35s">
      <p class="card-label">Topic of Interest Include</p>
      <h3>Magnetic solid state memory and logic</h3>
      <ul>
        <li>Magnetic Random Access Memory (MRAM): architecture, STT-MRAM, VCMRAM, SOT-MRAM, and TI/2D materials.</li>
        <li>New architectures and applications for in- and near-memory compute, and advanced memory bus architectures.</li>
        <li>AI, ML and neuromorphic compute applications, 2.5 and 3D applications, and harsh environments.</li>
      </ul>
      <h3>Advanced Magnetic Recording for > 3 Tbits/in2 </h3>
      <ul>
        <li>Readers, writers, media, servo, tribology, HDI, and signal processing.</li>
        <li>Heat Assisted Magnetic Recording (HAMR).</li>
        <li>Microwave-Assisted Magnetic Recording (MAMR).</li>
        <li>Alternative magnetic recording technologies (HIMR, Heated-dot, TDMR, tape, and all-optical switching).</li>
      </ul>
      <h3>Fundamentals</h3>
      <ul>
        <li>Metrology.</li>
        <li>Tooling.</li>
        <li>Materials.</li>
        <li>Recording physics.</li>
      </ul>
    </div>
  </section>
</template>
