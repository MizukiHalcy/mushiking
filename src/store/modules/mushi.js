import janken from "@/constants/janken.js";
import { type } from "@/constants/mushi.js";
import { toJankenName } from "@/utils/jankenUtil";

const caliculateAtkUp = (mushi, skill) => {
  if (!skill) {
    return 0;
  }
  switch (mushi.technique) {
    case 100:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.ultimate && skill.child.id === mushi.special) return 60;
        else if (skill.technique === 80) return 20;
        else if (skill.technique === 50) return 13;
        else if (skill.technique === 20) return 7;
        else return 0;
      } else {
        if (skill.technique === 80) return 10;
        else if (skill.technique === 50) return 6;
        else if (skill.technique === 20) return 4;
        else return 0;
      }
    case 90:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.ultimate && skill.child.id === mushi.special) return 30;
        else if (skill.technique === 80) return 16;
        else if (skill.technique === 50) return 10;
        else if (skill.technique === 20) return 5;
        else return 0;
      } else {
        if (skill.technique === 80) return 8;
        else if (skill.technique === 50) return 5;
        else if (skill.technique === 20) return 3;
        else return 0;
      }
    case 70:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.technique === 80) return 3;
        else if (skill.technique === 50) return 13;
        else if (skill.technique === 20) return 7;
        else return 0;
      } else {
        if (skill.technique === 80) return 2;
        else if (skill.technique === 50) return 6;
        else if (skill.technique === 20) return 4;
        else return 0;
      }
    case 60:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.technique === 80) return 2;
        else if (skill.technique === 50) return 10;
        else if (skill.technique === 20) return 5;
        else return 0;
      } else {
        if (skill.technique === 80) return 1;
        else if (skill.technique === 50) return 5;
        else if (skill.technique === 20) return 3;
        else return 0;
      }
    case 40:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.technique === 80) return 1;
        else if (skill.technique === 50) return 3;
        else if (skill.technique === 20) return 7;
        else return 0;
      } else {
        if (skill.technique === 80) return 1;
        else if (skill.technique === 50) return 2;
        else if (skill.technique === 20) return 4;
        else return 0;
      }
    case 30:
      if (skill && skill.janken === mushi.weapon) {
        if (skill.technique === 80) return 1;
        else if (skill.technique === 50) return 2;
        else if (skill.technique === 20) return 5;
        else return 0;
      } else {
        if (skill.technique === 80) return 1;
        else if (skill.technique === 50) return 1;
        else if (skill.technique === 20) return 3;
        else return 0;
      }
  }
};

export default {
  namespaced: true,
  state() {
    return {
      id: "allomyrina_dichotoma",
      name: "カブトムシ",
      src: "kabutomushi.jpg",
      weapon: janken.paa,
      basePower: 120,
      hp: 100,
      maxHp: 100,
      guu: 35,
      choki: 35,
      paa: 70,
      technique: 90,
      type: type.attack,
      special: "tornade_throw",
      skillGuu: null,
      skillChoki: null,
      skillPaa: null,
      hand: null,
    };
  },
  getters: {
    getId(state) {
      return state.id;
    },
    getWeapon(state) {
      return state.weapon;
    },
    getBasePower(state) {
      return state.basePower;
    },
    getHp(state) {
      return state.hp;
    },
    getMaxHp(state) {
      return state.maxHp;
    },
    getGuu(state) {
      return state.guu;
    },
    getChoki(state) {
      return state.choki;
    },
    getPaa(state) {
      return state.paa;
    },
    getSkillGuu(state) {
      return state.skillGuu;
    },
    getSkillChoki(state) {
      return state.skillChoki;
    },
    getSkillPaa(state) {
      return state.skillPaa;
    },
    getSpecial(state) {
      return state.special;
    },
    getHand(state) {
      return state.hand;
    },
    getPower(state) {
      return (state.maxHp + state.guu + state.choki + state.paa) / 2;
    },
  },
  mutations: {
    setMushi(state, mushi) {
      state.id = mushi.id;
      state.name = mushi.name;
      state.src = mushi.src;
      state.weapon = mushi.weapon;
      state.basePower = mushi.basePower;
      state.hp = mushi.hp;
      state.maxHp = mushi.hp;
      state.guu = mushi.guu;
      state.choki = mushi.choki;
      state.paa = mushi.paa;
      state.technique = mushi.technique;
      (state.type = mushi.type), (state.special = mushi.special);
    },
    setHp(state, hp) {
      state.hp = hp;
    },
    setMaxHp(state, maxHp) {
      state.maxHp = maxHp;
    },
    setGuu(state, guu) {
      state.guu = guu;
    },
    setChoki(state, choki) {
      state.choki = choki;
    },
    setPaa(state, paa) {
      state.paa = paa;
    },
    setSkillGuu(state, skill) {
      if (skill && skill.janken != janken.guu) return;
      if (skill && skill.ultimate && skill.child.id !== state.special) {
        state.skillGuu = skill.child;
      } else {
        state.skillGuu = skill;
      }
    },
    setSkillChoki(state, skill) {
      if (skill && skill.janken != janken.choki) return;
      if (skill && skill.ultimate && skill.child.id !== state.special) {
        state.setChoki = skill.child;
      } else {
        state.skillChoki = skill;
      }
    },
    setSkillPaa(state, skill) {
      if (skill && skill.janken != janken.paa) return;
      if (skill && skill.ultimate && skill.child.id !== state.special) {
        state.setPaa = skill.child;
      } else {
        state.skillPaa = skill;
      }
    },
    setHand(state, hand) {
      state.hand = hand;
    },
  },
  actions: {
    initializeHp(state) {
      const weapon =
        state.getters[toJankenName(state.getters.getWeapon).skillGetter];
      const skill1 =
        state.getters[
          toJankenName(state.getters.getWeapon).others[0].skillGetter
        ];
      const skill2 =
        state.getters[
          toJankenName(state.getters.getWeapon).others[1].skillGetter
        ];
      switch (state.getters.getBasePower) {
        case 100:
          if (
            weapon &&
            weapon.ultimate &&
            weapon.child.id === state.getters.getSpecial
          ) {
            state.commit("setMaxHp", state.getters.getMaxHp + 40);
          } else if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 25);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 20);
          }
          if (skill1 && skill1.technique === 80 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 10);
          }
          if (skill2 && skill2.technique === 80 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 10);
          }
          break;
        case 120:
          if (
            weapon &&
            weapon.ultimate &&
            weapon.child.id === state.getters.getSpecial
          ) {
            state.commit("setMaxHp", state.getters.getMaxHp + 32);
          } else if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 20);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 16);
          }
          if (skill1 && skill1.technique === 80 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 8);
          }
          if (skill2 && skill2.technique === 80 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 8);
          }
          break;
        case 140:
          if (
            weapon &&
            weapon.ultimate &&
            weapon.child.id === state.getters.getSpecial
          ) {
            state.commit("setMaxHp", state.getters.getMaxHp + 24);
          } else if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 15);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 12);
          }
          if (skill1 && skill1 && skill1.technique === 50 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 6);
          }
          if (skill2 && skill2 && skill2.technique === 50 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 6);
          }
          break;
        case 160:
          if (
            weapon &&
            weapon.ultimate &&
            weapon.child.id === state.getters.getSpecial
          ) {
            state.commit("setMaxHp", state.getters.getMaxHp + 20);
          } else if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 13);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 10);
          }
          if (skill1 && skill1.technique === 50 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 5);
          }
          if (skill2 && skill2.technique === 50 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 5);
          }
          break;
        case 180:
          if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 10);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 8);
          }
          if (skill1 && skill1.technique === 20 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 4);
          }
          if (skill2 && skill2.technique === 20 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 4);
          }
          break;
        case 200:
          if (weapon && weapon.id === state.getters.getSpecial) {
            state.commit("setMaxHp", state.getters.getHp + 8);
          } else if (weapon && weapon.technique === 80) {
            state.commit("setMaxHp", state.getters.getMaxHp + 6);
          }
          if (skill1 && skill1.technique === 20 && !skill1.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 4);
          }
          if (skill2 && skill2.technique === 20 && !skill2.unique) {
            state.commit("setMaxHp", state.getters.getMaxHp + 4);
          }
          break;
      }
      state.commit("setHp", state.getters.getMaxHp);
    },
    initializeAtk(state) {
      const weapon =
        state.getters[toJankenName(state.getters.getWeapon).skillGetter];
      const skill1 =
        state.getters[
          toJankenName(state.getters.getWeapon).others[0].skillGetter
        ];
      const skill2 =
        state.getters[
          toJankenName(state.getters.getWeapon).others[1].skillGetter
        ];
      const weaponUp =
        state.getters[toJankenName(state.getters.getWeapon).getter] +
        caliculateAtkUp(state.state, weapon);
      const skill1Up =
        state.getters[toJankenName(state.getters.getWeapon).others[0].getter] +
        caliculateAtkUp(state.state, skill1);
      const skill2Up =
        state.getters[toJankenName(state.getters.getWeapon).others[1].getter] +
        caliculateAtkUp(state.state, skill2);
      state.commit(toJankenName(state.getters.getWeapon).setter, weaponUp);
      state.commit(
        toJankenName(state.getters.getWeapon).others[0].setter,
        skill1Up
      );
      state.commit(
        toJankenName(state.getters.getWeapon).others[1].setter,
        skill2Up
      );
    },
    initialize(state) {
      state.dispatch("initializeHp");
      state.dispatch("initializeAtk");
    },
  },
};
