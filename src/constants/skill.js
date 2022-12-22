import janken from "@/constants/janken";

export const tornadeThrow = {
  id: "tornade_throw",
  src: "tornade_throw.jpg",
  code: "tornade_throw",
  name: "トルネードスロー",
  janken: janken.paa,
  technique: 80,
  unique: false,
  ultimate: false,
};

export const runningCutter = {
  id: "running_cutter",
  src: "running_cutter.jpg",
  code: "running_cutter",
  name: "ランニングカッター",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: false,
};

export const rollingSmash = {
  id: "rolling_smash",
  src: "rolling_smash.jpg",
  code: "rolling_smash",
  name: "ローリングスマッシュ",
  janken: janken.guu,
  technique: 80,
  unique: false,
  ultimate: false,
};

export const completeSmash = {
  id: "complete_smash",
  src: "complete_smash.jpg",
  code: "complete_smash",
  name: "コンプリートスマッシュ",
  janken: janken.guu,
  technique: 50,
  unique: false,
  ultimate: false,
};

export const crossDive = {
  id: "cross_dive",
  src: "cross_dive.jpg",
  code: "cross_dive",
  name: "クロスダイブ",
  janken: janken.choki,
  technique: 20,
  unique: false,
  ultimate: false,
};

export const cycloneWhip = {
  id: "cyclone_whip",
  src: "cyclone_whip.jpg",
  code: "cyclone_whip",
  name: "サイクロンホイップ",
  janken: janken.paa,
  technique: 50,
  unique: false,
  ultimate: false,
};

export const daisharin = {
  id: "daisharin",
  src: "daisharin.jpg",
  code: "daisharin",
  name: "ダイシャリン",
  janken: janken.paa,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const devilSleeper = {
  id: "devil_sleeper",
  src: "devil_sleeper.jpg",
  code: "devil_sleeper",
  name: "デビルスリーパー",
  janken: janken.choki,
  technique: 50,
  unique: false,
  ultimate: false,
};
export const dragonAttack = {
  id: "dragon_attack",
  src: "dragon_attack.jpg",
  code: "dragon_attack",
  name: "ドラゴンアタック",
  janken: janken.guu,
  technique: 50,
  unique: false,
  ultimate: false,
};
export const earthquakeThrow = {
  id: "earthquake_throw",
  src: "earthquake_throw.jpg",
  code: "earthquake_throw",
  name: "アースクエイクスロー",
  janken: janken.paa,
  technique: 20,
  unique: false,
  ultimate: false,
};
export const forestBridge = {
  id: "forest_bridge",
  src: "forest_bridge.jpg",
  code: "forest_bridge",
  name: "フォレストブリッジ",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const ganganSmash = {
  id: "gangan_smash",
  src: "gangan_smash.jpg",
  code: "gangan_smash",
  name: "ガンガンスマッシュ",
  janken: janken.guu,
  technique: 20,
  unique: false,
  ultimate: false,
};
export const hayabusa = {
  id: "hayabusa",
  src: "hayabusa.jpg",
  code: "hayabusa",
  name: "ハヤブサ",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const hayate = {
  id: "hayate",
  src: "hayate.jpg",
  code: "hayate",
  name: "ハヤテ",
  janken: janken.guu,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const kagerou = {
  id: "kagerou",
  src: "kagerou.jpg",
  code: "kagerou",
  name: "カゲロウ",
  janken: janken.guu,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const kawasemiHug = {
  id: "kawasemi_hug",
  src: "kawasemi_hug.jpg",
  code: "kawasemi_hug",
  name: "カワセミハッグ",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const reverseSlum = {
  id: "reverse_slum",
  src: "reverse_slum.jpg",
  code: "reverse_slum",
  name: "リバーススラム",
  janken: janken.paa,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const rollingClutchHold = {
  id: "rolling_clutch_hold",
  src: "rolling_clutch_hold.jpg",
  code: "rolling_clutch_hold",
  name: "ローリングクラッチホールド",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: false,
};
export const sideScrewThrow = {
  id: "side_screw_throw",
  src: "side_screw_throw.jpg",
  code: "side_screw_throw",
  name: "サイドスクリュースロー",
  janken: janken.paa,
  technique: 50,
  unique: false,
  ultimate: false,
};
export const submarineAttack = {
  id: "submarine_attack",
  src: "submarine_attack.jpg",
  code: "submarine_attack",
  name: "サブマリンアタック",
  janken: janken.guu,
  technique: 50,
  unique: false,
  ultimate: false,
};
export const superTornadeThrow = {
  id: "super_tornade_throw",
  src: "super_tornade_throw.jpg",
  name: "スーパートルネードスロー",
  janken: janken.paa,
  technique: 80,
  unique: false,
  ultimate: true,
  child: tornadeThrow,
};

export const superRunningCutter = {
  id: "super_running_cutter",
  src: "super_running_cutter.jpg",
  name: "スーパーランニングカッター",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: true,
  child: runningCutter,
};

export const superRollingSmash = {
  id: "super_rolling_smash",
  src: "super_rolling_smash.jpg",
  name: "スーパーローリングスマッシュ",
  janken: janken.guu,
  technique: 80,
  unique: false,
  ultimate: true,
  child: rollingSmash,
};

export const superHayabusa = {
  id: "super_hayabusa",
  src: "super_hayabusa.jpg",
  name: "スーパーハヤブサ",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: true,
  child: hayabusa,
};

export const superKagerou = {
  id: "super_kagerou",
  src: "super_kagerou.jpg",
  name: "スーパーカゲロウ",
  janken: janken.guu,
  technique: 80,
  unique: false,
  ultimate: true,
  child: kagerou,
};

export const superKawasemiHug = {
  id: "super_kawasemi_hug",
  src: "super_kawasemi_hug.jpg",
  name: "スーパーカワセミハッグ",
  janken: janken.choki,
  technique: 80,
  unique: false,
  ultimate: true,
  child: kawasemiHug,
};

export const guuSkills = [
  rollingSmash,
  completeSmash,
  dragonAttack,
  ganganSmash,
  hayate,
  kagerou,
  submarineAttack,
  superRollingSmash,
  superKagerou,
];
export const chokiSkills = [
  runningCutter, 
  crossDive,
  devilSleeper,
  forestBridge,
  hayabusa,
  kawasemiHug,
  rollingClutchHold,
  superRunningCutter,
  superHayabusa,
  superKawasemiHug,
];
export const paaSkills = [
  tornadeThrow, 
  cycloneWhip,
  daisharin,
  earthquakeThrow,
  reverseSlum,
  sideScrewThrow,
  superTornadeThrow
];
