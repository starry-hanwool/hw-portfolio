<template>
  <v-card :outlined="true" class="pa-2" tile>
    <v-img height="350" :src="project.cover"></v-img>
    <v-card-title>{{ project.title }}</v-card-title>

    <v-card-text>
      <v-row class="mx-0">
        <v-icon small>fas fa-calendar-check</v-icon>
        <div class="grey--text ml-3">{{ project.period }}</div>
      </v-row>

      <div class="my-4 subtitle-1">{{ project.subTitle }}</div>

      <div>
        {{ project.desc }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip v-for="tag in project.badge" :key="tag" class="ma-1" x-small>{{
        tag
      }}</v-chip>
    </v-card-text>
    <v-card-actions>
      <ImageSliderDialog :project="project"></ImageSliderDialog>
    </v-card-actions>
  </v-card>
</template>

<script>
import ImageSliderDialog from '@/components/ImageSliderDialog'

export default {
  name: 'MainCard',
  components: {
    ImageSliderDialog,
  },
  props: {
    pid: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      project: this.$store.getters['project/getProject'](this.pid),
    }
  },
}
</script>
