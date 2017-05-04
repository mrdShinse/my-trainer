<template lang="pug">
  v-app
    .execixe-view-container
      p メニューを選択してください
      .menu-dropdown-container
        ExerciseMenuSelector(v-bind:ExerciseMenuSelectorData="ExerciseMenuSelectorData")
      .exercise-info-form-container(v-if="isMenuSelected")
        ExerciseInformationForm(v-bind:ExerciseInformationFormData="ExerciseInformationFormData")
      .rest-timer-container
        RestTimer(ref="restTimer" v-bind:RestTimerData="RestTimerData")
</template>

<script>
  export default {
    components: {
      ExerciseMenuSelector:   require('./ExerciseMenuSelector.vue'),
      ExerciseInformationForm: require('./ExerciseInformationForm.vue'),
      RestTimer:              require('./RestTimer.vue')
    },
    data: function() {
      return {
        ExerciseMenuSelectorData: {
          items: [
            'プッシュアップ',
            'プランク'
          ]
        },
        ExerciseInformationFormData: {
          isSelected: false
        },
        RestTimerData: {
        },
        isMenuSelected: false,
        isTimerRun: false
      }
    },
    computed: {
    },
    created: function() {
    },
    mounted: function() {
      eventHub.$on('menuSelected', this.setExerciseMenu)
      eventHub.$on('exerciseDataSubmited', this.runTimer)
      eventHub.$on('restTimeIsOver', this.closeTimer)
      eventHub.$on('restTimerTick', this.tickTimer);
    },
    methods: {
      setExerciseMenu: function(selectedMenu) {
        this.isMenuSelected = true;
        this.ExerciseInformationFormData = {name: selectedMenu};
      },
      runTimer: function(restTime) {
        this.isMenuSelected = false;
        this.isTimerRun = true;
        const RestTimerData = {
          restTime,
          times: 0
        }
        this.RestTimerData = RestTimerData;
        this.$refs.restTimer.update(RestTimerData);
      },
      closeTimer: function() {
        this.isTimerRun = false;
      },
      tickTimer: function(data) {
        const RestTimerData = {
          restTime: data.restTime,
          times: data.times + 1
        }
        this.RestTimerData = RestTimerData;
        this.$refs.restTimer.update(RestTimerData);
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
  .execixe-view-container
    height: 600px;
    min-width: 240px;
    min-height: 420px;
</style>
