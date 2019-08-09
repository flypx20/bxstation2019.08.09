<template>
  <div>
    <head-layout>个人中心</head-layout>
    <personal-infocard></personal-infocard>
    <personal-tablist></personal-tablist>
  </div>
</template>

<script>
import HeadLayout from "../layout/HeadLayout";
import PersonalInfocard from "./components/Infocard";
import PersonalTablist from "./components/Tablist";
export default {
  name: "Personal",
  components: {
    HeadLayout,
    PersonalInfocard,
    PersonalTablist
  }
};
</script>

<style lang="stylus" scoped></style>

