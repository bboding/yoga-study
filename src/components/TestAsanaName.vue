<template>
  <div>
    <h2 style="margin-bottom: 50px">아쉬탕가 아사나 이름 외우기</h2>
    <div v-if="isShowResult" class="mb-5">
      <h1>
        <span v-if="score === 10">🎉</span>
        {{ `결과: ${score}/10` }}
        <span v-if="score === 10">🎉</span>
      </h1>
      <v-btn depressed @click="makeQuizzed"
        >다시하기
      </v-btn>
    </div>

    <div
      v-for="(quiz, index) of quizzes"
      :key="`quiz-${index}`"
      style="margin-bottom: 50px"
    >
      <div style="font-size: 12px">
        {{ `${index + 1}/10` }}
        <span v-if="isShowResult">
          <span v-if="quiz.picked !== quiz.korean" class="font-red">
            {{ `땡!` }}
          </span>
        </span>
      </div>
      <img
        :src="require(`@/assets/poses/${quiz.name}.png`)"
        alt="img"
        width="200"
      />
      <div v-for="(question, i) of quiz.questionList" :key="`item-${i}`">
        <input
          type="radio"
          :id="`${index}-${question}`"
          :name="`answer-${quiz.name}`"
          :value="question"
          v-model="quiz.picked"
        />
        <label
          :for="`${index}-${question}`"
          :class="isShowResult && quiz.korean === question ? 'font-green' : ''"
          >{{ question }}</label
        >
      </div>
    </div>

    <v-row align="center" justify="center" class="mb-3">
      <v-btn
        color="primary"
        depressed
        @click="showResult"
        :disabled="isShowResult"
        class="mr-2"
        >확인</v-btn
      >
      <v-btn depressed @click="makeQuizzed">다시하기</v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quizzes: [],
      isShowResult: false,
      score: 0,
    };
  },
  async created() {
    await this.makeQuizzed();
  },
  methods: {
    showResult() {
      let notAnswered = false;
      for (const quiz of this.quizzes) {
        if (!quiz.picked) {
          alert("답하지 않은 문제가 있습니다.");
          notAnswered = true;
          return;
        }

        if (quiz.picked === quiz.korean) this.score += 1;
      }
      if (!notAnswered) {
        this.isShowResult = true;
        window.scrollTo(0, 0);
      }
    },
    async makeQuizzed() {
      this.score = 0;
      const { data } = await this.$axios.get(
        "http://localhost:3000/quiz/poses",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      this.quizzes = data;
      window.scrollTo(0, 0);

      this.isShowResult = false;
    },
  },
};
</script>

<style scoped>
.font-green {
  color: #4caf50;
}

.font-red {
  color: #f44336;
}
</style>