<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col cols="6" class="px-1">
          <v-card outlined height="400">
            <v-tabs v-model="tab1" color="green darken-1">
              <v-tab>ムシカード</v-tab>
              <v-tab>グー技</v-tab>
              <v-tab>チョキ技</v-tab>
              <v-tab>パー技</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab1" class="item">
              <v-tab-item>
                <div class="d-flex player-1 mushi flex-wrap">
                  <div
                    v-for="mushi in mushis"
                    :key="mushi.id"
                    class="pa-1"
                    @click="setMushi1(mushi)"
                    :class="selectedMushi1(mushi)"
                  >
                    <v-img
                      :src="mushiSrc(mushi.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-1 skill flex-wrap">
                  <div
                    v-for="skill in guuSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillGuu1(skill)"
                    :class="selectedSkillGuu1(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-1 skill flex-wrap">
                  <div
                    v-for="skill in chokiSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillChoki1(skill)"
                    :class="selectedSkillChoki1(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-1 skill flex-wrap">
                  <div
                    v-for="skill in paaSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillPaa1(skill)"
                    :class="selectedSkillPaa1(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="6" class="px-1">
          <v-card outlined height="400">
            <v-tabs v-model="tab2" color="green darken-1">
              <v-tab>ムシカード</v-tab>
              <v-tab>グー技</v-tab>
              <v-tab>チョキ技</v-tab>
              <v-tab>パー技</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab2" class="item">
              <v-tab-item>
                <div class="d-flex player-2 mushi flex-wrap">
                  <div
                    v-for="mushi in mushis"
                    :key="mushi.id"
                    class="pa-1"
                    @click="setMushi2(mushi)"
                    :class="selectedMushi2(mushi)"
                  >
                    <v-img
                      :src="mushiSrc(mushi.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-2 skill flex-wrap">
                  <div
                    v-for="skill in guuSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillGuu2(skill)"
                    :class="selectedSkillGuu2(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-2 skill flex-wrap">
                  <div
                    v-for="skill in chokiSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillChoki2(skill)"
                    :class="selectedSkillChoki2(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
              <v-tab-item>
                <div class="d-flex player-2 skill flex-wrap">
                  <div
                    v-for="skill in paaSkills"
                    :key="skill.id"
                    class="pa-1"
                    @click="setSkillPaa2(skill)"
                    :class="selectedSkillPaa2(skill)"
                  >
                    <v-img
                      :src="skillSrc(skill.src)"
                      transition="scale-transition"
                      width="130"
                      height="180"
                    ></v-img>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-btn color="green darken-1" block dark @click="goToBattle">OK</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mushis } from "@/constants/mushi.js";
import { guuSkills, chokiSkills, paaSkills } from "@/constants/skill.js";
export default {
  name: "About",
  data() {
    return {
      tab1: "mushi",
      tab2: "mushi",
      mushis: [],
      guuSkills: [],
      chokiSkills: [],
      paaSkills: [],
    };
  },
  computed: {
    mushi1() {
      return this.$store.state.mushi1;
    },
    mushiSrc() {
      return (src) => {
        return require("../assets/img/mushi/" + src);
      };
    },
    skillSrc() {
      return (src) => {
        return require("../assets/img/skill/" + src);
      };
    },
    selectedMushi1() {
      return (mushi) => {
        return this.$store.getters["mushi1/getId"] === mushi.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillGuu1() {
      return (skill) => {
        return this.$store.getters["mushi1/getSkillGuu"] &&
          this.$store.getters["mushi1/getSkillGuu"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillChoki1() {
      return (skill) => {
        return this.$store.getters["mushi1/getSkillChoki"] &&
          this.$store.getters["mushi1/getSkillChoki"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillPaa1() {
      return (skill) => {
        return this.$store.getters["mushi1/getSkillPaa"] &&
          this.$store.getters["mushi1/getSkillPaa"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
    selectedMushi2() {
      return (mushi) => {
        return this.$store.getters["mushi2/getId"] === mushi.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillGuu2() {
      return (skill) => {
        return this.$store.getters["mushi2/getSkillGuu"] &&
          this.$store.getters["mushi2/getSkillGuu"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillChoki2() {
      return (skill) => {
        return this.$store.getters["mushi2/getSkillChoki"] &&
          this.$store.getters["mushi2/getSkillChoki"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
    selectedSkillPaa2() {
      return (skill) => {
        return this.$store.getters["mushi2/getSkillPaa"] &&
          this.$store.getters["mushi2/getSkillPaa"].id === skill.id
          ? "selected"
          : "unselected";
      };
    },
  },
  methods: {
    setMushi1(mushi) {
      this.$store.commit("mushi1/setMushi", mushi);
      this.$store.commit("mushi1/setSkillGuu", null);
      this.$store.commit("mushi1/setSkillChoki", null);
      this.$store.commit("mushi1/setSkillPaa", null);
    },
    setSkillGuu1(skill) {
      this.$store.commit("mushi1/setSkillGuu", skill);
    },
    setSkillChoki1(skill) {
      this.$store.commit("mushi1/setSkillChoki", skill);
    },
    setSkillPaa1(skill) {
      this.$store.commit("mushi1/setSkillPaa", skill);
    },
    setMushi2(mushi) {
      this.$store.commit("mushi2/setMushi", mushi);
      this.$store.commit("mushi2/setSkillGuu", null);
      this.$store.commit("mushi2/setSkillChoki", null);
      this.$store.commit("mushi2/setSkillPaa", null);
    },
    setSkillGuu2(skill) {
      this.$store.commit("mushi2/setSkillGuu", skill);
    },
    setSkillChoki2(skill) {
      this.$store.commit("mushi2/setSkillChoki", skill);
    },
    setSkillPaa2(skill) {
      this.$store.commit("mushi2/setSkillPaa", skill);
    },
    goToBattle(){
      this.$router.push("/battle");
    }
  },
  mounted() {
    this.mushis = mushis;
    this.guuSkills = guuSkills;
    this.chokiSkills = chokiSkills;
    this.paaSkills = paaSkills;
  },
};
</script>
<style scoped>
.player-1 .selected {
  border: 2px solid #f44336;
}
.player-2 .selected {
  border: 2px solid #2196F3;
}
.player-1 .unselected {
  border: 2px solid transparent;
}
.player-2 .unselected {
  border: 2px solid transparent;
}
.selected {
  border-radius: 4px;
}
.item {
  overflow: auto;
  height: 345px;
}
.item::-webkit-scrollbar {
  width: 4px;
}
.item::-webkit-scrollbar-thumb {
  background-color: #A5D6A7;
  border-radius: 2px;
}
</style>
