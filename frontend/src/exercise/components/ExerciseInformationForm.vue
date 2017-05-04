<template lang="pug">
  .exercise-information-form
    h4 {{ExerciseInformationFormData.name}}
    .form-group
      label 負荷
      input.form-control(v-model="ExerciseInformationFormData.kg")
      label kg
    .form-group
      label 回数
      input.form-control(v-model="ExerciseInformationFormData.times")
      label 回
    .form-group
      label 休憩
      input.form-control(v-model="ExerciseInformationFormData.restTime")
      label 秒
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
