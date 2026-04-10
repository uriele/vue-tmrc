<script setup lang="ts">
const orgEmail={
  name: "TMRC 2026",
  email: "tmrc2026@gmail.com"
}
const conferenceChair = { name: 'Niranjan Natekar', company: 'Western Digital', email: 'niranjan.natekar@wdc.com' }
const neilSmithAwardChair = { name: 'Michael Grobis', company: 'IEEE', email: 'mkgrobis@ieee.org' }
</script>

<template>
  <PageTitle mainTitle="Niel Smith Award" subTitle="IEEE Neil Smith Award for Contributions to the Understanding of Magnetic Phenomena in Materials and Devices" />
  <section class="main p-4">
    <p class="lead">
      The Neil Smith Award will be presented at TMRC 2026 for the best student contribution
to the understanding of magnetic phenomena in Materials and Devices. The IEEE
award is in memory of Neil Smith, whose productive industrial research career
exemplified a mastery of experimental measurement techniques and theoretical
analysis. An award committee will select winners in two subject categories: magnetic
data storage & emerging technologies. The two winners will each receive a $1,000 USD
cash prize. The winning submissions need to be original contributions that contain an
advance in the understanding of a technologically relevant physical system or
phenomena. The selection criteria will be based on originality and impact of the work, as
well as quality of the poster presentation.
    </p>


    <div class="card border-dark bg-primary text-secondary mb-3" style="--delay: 0.35s">
      <h3 class="card-header">Candidate Eligibility Criteria</h3>
      <div class="card-body">
        <ul class="card-text">
          <li>
            Undergraduate students, graduate students, and university postdoctoral
students.
          </li>
          <li>
            Lead contributor and presenter of primarily their own work on a contributed oral
or poster presentation.
          </li>
          <li>
            Student’s research advisor must be a current member of the IEEE Magnetics
Society.
          </li>
          <li>
           Past winners of the award are eligible only if the new work has substantial differentiation from the prior winning submission.
          </li>
        </ul>
      </div>
    </div>

<div class="card border-dark bg-primary text-secondary mb-3" style="--delay: 0.35s">
      <h3 class="card-header">Application Procedure</h3>
      <div class="card-body">
        <ul class="card-text">
          <li>
            Students should apply at the same time as submitting their digests by providing
the supplemental information requested in the digest submission process.
          </li>
          <li>
            Incomplete applications will not be considered.
          </li>
          <li>
             <strong>DO NOT</strong> identify the digest as part of the student award competition in the text of
the digest.
          </li>
          <li>
            Students should submit the following supplemental information:
            <ol>
              <li>
                Expected graduation date, IEEE member number, advisor name, advisor
IEEE member number.
              </li>
              <li>One-page description of the motivation for the research, the significance
of the research results, the applicant's contribution to the work being
presented, and the connections to the themes of the award.
              </li>
              <li>Signed letter of support for the student from a research advisor, who must
be a member of the IEEE Magnetics Society. This letter must include the
advisor’s signature.
              </li>
              <li>Application materials must be submitted by email to <a :href="`mailto:${orgEmail.email}`">{{ orgEmail.email }}</a> with
subject line ‘Neil Smith Award Application for {Insert Applicant Name}’
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <p class="lead">
      For any further questions, please reach out to the Neil Smith Award Committee Chair
      <a :href="`mailto:${neilSmithAwardChair.email}`">{{ neilSmithAwardChair.name }}</a>
      or conference chair <a :href="`mailto:${conferenceChair.email}`">{{ conferenceChair.name }}</a>.
    </p>
  </section>
  </template>
