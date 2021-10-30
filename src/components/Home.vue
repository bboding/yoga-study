<template>
  <div>
    <div>
      <h3>테스트</h3>
      <button @click="$router.push('/test-asana-name')">
        아사나 이름 맞추기
      </button>
      <!-- <a href="/test-ashitanga-sequence">아쉬탕가 시퀀스 순서 맞추기</a> -->
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
