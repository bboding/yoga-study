<template>
  <div>
    <h2>아쉬탕가 아사나 공부</h2>
    <div v-for="pose of poses" :key="pose.id">
      <div>
        <img
          :src="require(`../assets/poses/${pose.name}.png`)"
          alt="img"
          width="100"
        />
        <p>{{ `${pose.korean} (${pose.name})` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      poses: [],
    };
  },
  async created() {
    const res = await fetch(`https://yoga-server-api.herokuapp.com/poses`, {
      headers: {
        Accept: "application/json",
      },
    });

    const result = await res.json();
    this.poses = result;
  },
};
</script>