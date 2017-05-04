<template lang="pug">
  v-container(fluid="fluid")
    v-row
      v-col(xs12)
        h4 {{ExerciseInformationFormData.name}}
    v-row
      v-col(xs4)
        v-text-field(
          v-model="ExerciseInformationFormData.weight"
          label="負荷")
      v-col(xs8)
        v-subheader kg
    v-row
      v-col(xs4)
        v-text-field(
          v-model="ExerciseInformationFormData.reps"
          label="回数")
      v-col(xs8)
        v-subheader 回
    v-row
      v-col(xs4)
        v-text-field(
          v-model="ExerciseInformationFormData.restTime"
          label="休憩")
      v-col(xs8)
        v-subheader 秒
    v-row
      v-col(xs12)
        button.btn.btn-default(type="button" v-on:click="submitExerciseData") 送信
</template>

<script>
  export default {
    props: {
      ExerciseInformationFormData: Object,
      require: true
    },
    components: {
    },
    created: function() {
    },
    mounted: function() {
    },
    methods: {
      submitExerciseData: function() {
        eventHub.$emit('exerciseDataSubmited', Number(this.ExerciseInformationFormData.restTime));
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
</style>
