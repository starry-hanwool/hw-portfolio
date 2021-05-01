<template>
  <div>
    <v-parallax id="main-parallax" dark height="400" src="imgs/main_1080.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <div class="certified-badges">
            <v-avatar size="70">
              <v-img
                src="imgs/aws-certified-devops-engineer-professional.png"
              ></v-img>
            </v-avatar>
            <v-avatar size="70">
              <v-img
                src="imgs/aws-certified-solutions-architect-associate.png"
              ></v-img>
            </v-avatar>
          </div>
          <h1 class="display-1 font-weight-thin mb-4">Hanwool Lee</h1>
          <h4 class="subheading">JAVA Developer Portfolio</h4>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="main-card-wrap">
      <v-row>
        <v-col
          v-for="project in getProjects"
          :key="project.id"
          cols="12"
          lg="3"
          md="4"
          sm="6"
        >
          <MainCard :pid="project.id"></MainCard>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MainCard from '@/components/MainCard'
import { mapGetters } from 'vuex'
export default {
  components: {
    MainCard,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters('project', ['getProjects']),
  },
}
</script>
<style scoped>
#main-parallax {
  width: calc(100% + 24px);
  left: -12px;
}
.main-card-wrap {
  padding-top: 50px;
  padding-bottom: 100px;
}
.certified-badges {
  padding-bottom: 15px;
}
@media (min-width: 1904px) {
  #main-parallax {
    width: 100%;
    left: initial;
  }
}
@media (min-width: 960px) {
  #main-parallax {
    width: 140%;
    left: -20%;
  }
}
</style>
