import janken from "@/constants/janken.js";
const jankenProperties = {
  guu: {
    name: "guu",
    skill: "skillGuu",
    skillGetter: "getSkillGuu",
    getter: "getGuu",
    setter: "setGuu",
  },
  choki: {
    name: "choki",
    skill: "skillChoki",
    skillGetter: "getSkillChoki",
    getter: "getChoki",
    setter: "setChoki",
  },
  paa: {
    name: "paa",
    skill: "skillPaa",
    skillGetter: "getSkillPaa",
    getter: "getPaa",
    setter: "setPaa",
  },
};
export const toJankenName = (type) => {
  switch (type) {
    case janken.guu:
      return {
        ...jankenProperties.guu,
        others: [jankenProperties.choki, jankenProperties.paa],
      };
    case janken.choki:
      return {
        ...jankenProperties.choki,
        others: [jankenProperties.guu, jankenProperties.paa],
      };
    case janken.paa:
      return {
        ...jankenProperties.paa,
        others: [jankenProperties.guu, jankenProperties.choki],
      };
  }
};

export const battleFunc = (mushi1, mushi2, hand1, hand2) => {
  if (hand1 === janken.guu) {
    if (hand2 === janken.guu) {
      return {
        win: null,
        label: null,
        even: true,
        damage: null,
        getSkill: null,
      };
    } else if (hand2 === janken.choki) {
      return {
        win: mushi1,
        label: "mushi1",
        even: false,
        damage: mushi1.guu,
        getSkill: "getSkillGuu",
      };
    } else {
      return {
        win: mushi2,
        label: "mushi2",
        even: false,
        damage: mushi2.paa,
        getSkill: "getSkillPaa",
      };
    }
  } else if (hand1 === janken.choki) {
    if (hand2 === janken.guu) {
      return {
        win: mushi2,
        label: "mushi2",
        even: false,
        damage: mushi2.guu,
        getSkill: "getSkillGuu",
      };
    } else if (hand2 === janken.choki) {
      return {
        win: null,
        label: null,
        even: true,
        damage: null,
        getSkill: null,
      };
    } else {
      return {
        win: mushi1,
        label: "mushi1",
        even: false,
        damage: mushi1.choki,
        getSkill: "getSkillChoki",
      };
    }
  } else {
    if (hand2 === janken.guu) {
      return {
        win: mushi1,
        label: "mushi1",
        even: false,
        damage: mushi1.paa,
        getSkill: "getSkillPaa",
      };
    } else if (hand2 === janken.choki) {
      return {
        win: mushi2,
        label: "mushi2",
        even: false,
        damage: mushi2.choki,
        getSkill: "getSkillChoki",
      };
    } else {
      return {
        win: null,
        label: null,
        even: true,
        damage: null,
        getSkill: null,
      };
    }
  }
};
