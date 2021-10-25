<template>
  <div>
    <div>
      <h3>테스트</h3>
      <a href="/test-asana-name">아쉬탕가 아사나 이름 외우기</a>
      <!-- <a href="/asana-sequence">아사나 순서 외우기</a> -->
    </div>
    <div>
      <h3>스터디</h3>
      <button @click="onClickAsana">아쉬탕가 아사나 공부</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "yoga study",
    };
  },
  methods: {
    onClickAsana() {
      this.$router.push("/asana");
    },
  },
};
</script>

<style scoped>
button {
  font-size: 14px;
}
</style>
