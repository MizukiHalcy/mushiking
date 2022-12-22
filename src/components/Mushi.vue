<template>
  <v-container class="mushi">
    <v-row class="mushi-hp">
      <v-col cols="12">
        <v-progress-linear
          color="success"
          height="20"
          :value="(mushi.hp / mushi.maxHp) * 100"
          striped
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
    <v-row class="mushi-top">
      <v-col cols="6">
        <v-img
          :src="src"
          transition="scale-transition"
          width="280"
          height="380"
        ></v-img>
      </v-col>
      <v-col cols="6">
        <div class="mushi-skill pb-2 d-flex" @click="setHand('guu')">
          <div class="janken-icon">
            <v-img
              src="../assets/img/icon/guu.jpg"
              transition="scale-transition"
              width="50"
            ></v-img>
          </div>
          <div class="skill-name d-flex justify-center align-center pl-4">
            <span>{{ mushi.skillGuu?.name || "なし" }}</span>
          </div>
        </div>
        <div class="mushi-skill pb-2 d-flex" @click="setHand('choki')">
          <div class="janken-icon">
            <v-img
              src="../assets/img/icon/choki.jpg"
              transition="scale-transition"
              width="50"
            ></v-img>
          </div>
          <div class="skill-name d-flex justify-center align-center pl-4">
            <span>{{ mushi.skillChoki?.name || "なし" }}</span>
          </div>
        </div>
        <div class="mushi-skill pb-2 d-flex" @click="setHand('paa')">
          <div class="janken-icon">
            <v-img
              src="../assets/img/icon/paa.jpg"
              transition="scale-transition"
              width="50"
            ></v-img>
          </div>
          <div class="skill-name d-flex justify-center align-center pl-4">
            <span>{{ mushi.skillPaa?.name || "なし" }}</span>
          </div>
        </div>
        <div class="mushi-power mb-2" :class="className">
          <p class="type-name">{{ typeName }}</p>
          <p class="power">{{ power }}</p>
        </div>
        <div v-if="isSelected" class="selected d-flex align-center justify-center">
          <p class="type-name">選択完了！</p>
        </div>
        <div v-else class="unselected d-flex align-center justify-center">
          <p class="type-name">技未選択</p>
        </div>
      </v-col>
    </v-row>
    <v-row class="player-name">
      <v-col class="player-name-column" cols="12">
        <div class="player-name-container" :class="className">
          <span>プレイヤー</span>
          <span>{{ player }}</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { type } from "@/constants/mushi.js";
import janken from "@/constants/janken.js";
export default {
  name: "Mushi",
  props: {
    mushi: {
      type: Object,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    player: {
      type: Number,
      required: true,
    }
  },
  computed: {
    src() {
      return require("../assets/img/mushi/" + this.mushi.src);
    },
    typeName() {
      switch (this.mushi.type) {
        case type.attack:
          return "アタック";
        case type.defense:
          return "ディフェンス";
        default:
          return "バランス";
      }
    },
    className() {
      if(this.player === 1) {
        return "player-1";
      } else {
        return "player-2";
      }
    },
    isSelected() {
      return !!this.mushi.hand;
    }
  },
  methods: {
    setHand(hand) {
      if(this.mushi.hand) {
        return;
      }
      switch (hand) {
        case "guu":
          this.$emit("setHand", janken.guu);
          break;
        case "choki":
          this.$emit("setHand", janken.choki);
          break;
        case "paa":
          this.$emit("setHand", janken.paa);
          break;
      }
    }
  }
};
</script>
<style scoped>
.skill-name, .mushi-power, .unselected, .selected, .player-name {
  font-family: "M+ Type-1 (general-j) Heavy";
  white-space: nowrap;
  font-weight: 700;
}
.mushi-skill {
  cursor: pointer;
}
.mushi-power, .player-name-container {
  border-radius: 4px;
}
.mushi-power.player-1, .player-name-container.player-1{
  border: 1px solid #F44336;
  background-color: #FFCDD2;
  color: #C62828;
}
.mushi-power.player-2, .player-name-container.player-2{
  border: 1px solid #2196F3;
  background-color: #BBDEFB;
  color: #0D47A1;
}
.mushi-power p, .unselected p, .selected p {
  margin: 0px;
}
.mushi-power p.type-name{
  font-size: 0.9em;
}
.mushi-power p.power{
  font-weight: 700;
}
.unselected, .selected {
  border-radius: 4px;
  height: 150px;
}
.unselected {
  border: 1px solid #607D8B;
  background-color: #CFD8DC;
  color: #37474F
}
.selected {
  border: 1px solid #8BC34A;
  background-color: #DCEDC8;
  color: #558B2F
}
</style>
