<template>
  <div>
    <div>
      <h3>테스트</h3>
      <button @click="$router.push('/test-asana-name')">
        아사나 이름 외우기
      </button>
      <!-- <a href="/asana-sequence">아사나 순서 외우기</a> -->
    </div>
    <div>
      <h3>스터디</h3>
      <button @click="$router.push('/asana')">아쉬탕가 요가 아사나</button>
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
};
</script>

<style scoped>
button {
  font-size: 14px;
}
</style>
