<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="6">
        <Mushi
          :mushi="mushi1"
          :power="mushi1Power"
          :player="1"
          @setHand="setMushi1Hand"
        ></Mushi>
      </v-col>
      <v-col cols="6">
        <Mushi
          :mushi="mushi2"
          :power="mushi2Power"
          :player="2"
          @setHand="setMushi2Hand"
        ></Mushi>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" width="700px" persistent>
      <v-card>
        <v-card-title class="px-4 py-0 dialog-title">
          <v-img
            class="shrink mr-2"
            contain
            src="@/assets/img/header-logo.png"
            transition="scale-transition"
            width="100"
          />
        </v-card-title>
        <v-card-text class="dialog-text">
          <v-container>
            <v-row>
              <v-col cols="12" class="d-flex justify-center">
                <v-img
                  class="shrink mr-2"
                  contain
                  :src="mushi1HandSrc"
                  transition="scale-transition"
                  width="100"
                />
                <div class="vs pa-9 text-h6">vs.</div>
                <v-img
                  class="shrink mr-2"
                  contain
                  :src="mushi2HandSrc"
                  transition="scale-transition"
                  width="100"
                />
              </v-col>
              <v-col class="d-flex justify-center description">
                <div class="description-container" v-if="!even && win">
                  <p>
                    <span :class="winnerLabel">{{ win.name }}</span>
                    <span>のこうげき！</span>
                  </p>
                  <p v-if="win.skill">
                    <span>{{ win.skill.name }}</span>
                    <span>だ！</span>
                  </p>
                </div>
                <div class="description-container" v-else>
                  <p>
                    <span>あいこだ！</span>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="dialog-actions">
          <v-btn
            color="green darken-1"
            dark
            block
            depressed
            @click="closeDialog"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="finish" width="700px" persistent>
      <v-card>
        <v-card-title class="px-4 py-0 dialog-title">
          <v-img
            class="shrink mr-2"
            contain
            src="@/assets/img/header-logo.png"
            transition="scale-transition"
            width="100"
          />
        </v-card-title>
        <v-card-text class="d-flex justify-center align-center">
          <div v-if="winner && !winner.even" class="finish-text pt-8">
            <p>
              <span>プレイヤー</span>
              <span>{{ winner.player }}</span>
              <span>：勝ち</span>
            </p>
            <p>
              <span>{{ winner.name }}</span>
              <span>の勝ちだ！</span>
            </p>
          </div>
          <div v-else class="finish-text pt-8">
            <p>引き分け</p>
          </div>
        </v-card-text>
        <v-card-actions class="dialog-actions">
          <v-btn color="green darken-1" dark block depressed @click="goToSelect">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Mushi from "./Mushi.vue";
import janken from "@/constants/janken.js";
import { battleFunc } from "@/utils/jankenUtil.js";
export default {
  name: "HelloWorld",
  components: {
    Mushi,
  },
  data() {
    return {
      dialog: false,
      finish: false,
      winner: null,
      winnerMushi: null,
      win: null,
      even: false,
    };
  },
  computed: {
    mushi1() {
      return this.$store.state.mushi1;
    },
    mushi1Power() {
      return Math.round(this.$store.getters["mushi1/getPower"]);
    },
    mushi1Hand() {
      return this.$store.getters["mushi1/getHand"];
    },
    mushi1HandSrc() {
      switch (this.mushi1Hand) {
        case janken.guu:
          return require("../assets/img/icon/guu.jpg");
        case janken.choki:
          return require("../assets/img/icon/choki.jpg");
        case janken.paa:
          return require("../assets/img/icon/paa.jpg");
        default:
          return null;
      }
    },
    mushi1EvenDamage() {
      return Math.round(this.$store.getters["mushi1/getMaxHp"] * 0.1);
    },
    mushi2() {
      return this.$store.state.mushi2;
    },
    mushi2Power() {
      return Math.round(this.$store.getters["mushi2/getPower"]);
    },
    mushi2Hand() {
      return this.$store.getters["mushi2/getHand"];
    },
    mushi2HandSrc() {
      switch (this.mushi2Hand) {
        case janken.guu:
          return require("../assets/img/icon/guu.jpg");
        case janken.choki:
          return require("../assets/img/icon/choki.jpg");
        case janken.paa:
          return require("../assets/img/icon/paa.jpg");
        default:
          return null;
      }
    },
    mushi2EvenDamage() {
      return Math.round(this.$store.getters["mushi2/getMaxHp"] * 0.1);
    },
    winnerLabel() {
      return this.win && this.win.player === 1 ? "player-1" : "player-2";
    },
  },
  watch: {
    mushi1Hand() {
      if (this.mushi1Hand && this.mushi2Hand) {
        this.$nextTick(() => {
          this.battleStart();
        });
      }
    },
    mushi2Hand() {
      if (this.mushi1Hand && this.mushi2Hand) {
        this.$nextTick(() => {
          this.battleStart();
        });
      }
    },
  },
  methods: {
    setMushi1Hand(hand) {
      this.$store.commit("mushi1/setHand", hand);
    },
    setMushi2Hand(hand) {
      this.$store.commit("mushi2/setHand", hand);
    },
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.setMushi1Hand(null);
      this.setMushi2Hand(null);
      this.checkFinish();
    },
    battleStart() {
      this.openDialog();
      const battle = battleFunc(
        this.mushi1,
        this.mushi2,
        this.mushi1Hand,
        this.mushi2Hand
      );
      if (battle.even) {
        this.even = true;
        this.win = null;
        this.$store.commit(
          "mushi1/setHp",
          this.mushi1.hp - this.mushi1EvenDamage
        );
        this.$store.commit(
          "mushi2/setHp",
          this.mushi2.hp - this.mushi2EvenDamage
        );
      } else if (battle.label === "mushi1") {
        const skill = this.$store.getters[battle.label + "/" + battle.getSkill];
        this.even = false;
        this.win = {
          player: 1,
          name: battle.win.name,
          skill,
        };
        this.$store.commit("mushi2/setHp", this.mushi2.hp - battle.damage);
      } else {
        const skill = this.$store.getters[battle.label + "/" + battle.getSkill];
        this.even = false;
        this.win = {
          player: 2,
          name: battle.win.name,
          skill,
        };
        this.$store.commit("mushi1/setHp", this.mushi1.hp - battle.damage);
      }
    },
    checkFinish() {
      if (this.mushi1.hp <= 0 && this.mushi2.hp <= 0) {
        this.winner = {
          player: null,
          name: null,
          even: true,
        };
        this.finish = true;
        this.dialog = false;
      } else if (this.mushi1.hp <= 0) {
        this.finish = true;
        this.dialog = false;
        this.winner = {
          player: 2,
          name: this.mushi2.name,
          even: false,
        };
      } else if (this.mushi2.hp <= 0) {
        this.finish = true;
        this.dialog = false;
        this.winner = {
          player: 1,
          name: this.mushi1.name,
          even: false,
        };
      }
    },
    goToSelect() {
      this.$router.push("/");
    }
  },
  async mounted() {
    this.$store.dispatch("mushi1/initialize");
    this.$store.dispatch("mushi2/initialize");
  },
};
</script>
<style scoped>
.dialog-title {
  background-color: #43a047;
}
.dialog-text, .finish-text {
  font-family: "M+ Type-1 (general-j) Heavy";
  font-size: 1.2em;
  white-space: nowrap;
  font-weight: 700;
}
.description-container p {
  margin: 4px;
}
.description-container p span.player-1 {
  color: #c62828;
}
.description-container p span.player-2 {
  color: #0d47a1;
}
</style>
