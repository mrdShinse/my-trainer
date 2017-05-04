<template lang="pug">
  #rest-timer
    .rest-time-view
      p 休憩時間は {{RestTimerData.restTime}} 秒です。
      v-progress-linear(v-model="percentage")
    .rest-time-over-view
      p トレーニングを再開してください。
</template>

<script>
  import $ from 'jquery';

  export default {
    props: {
      RestTimerData: Object,
      require: true
    },
    computed: {
      percentage: function() {
        if(this.RestTimerData.restTime) {
          return this.RestTimerData.times / this.RestTimerData.restTime * 100;
        }
        return 0;
      }
    },
    methods: {
      update: function(data) {
        if(data.times == 0) {
          $('.rest-time-over-view').removeClass('visible');
          $('.rest-time-view').addClass('visible');
        }else if(data.times == data.restTime) {
          this.close();
          return;
        }
        setTimeout(() => {
          eventHub.$emit('restTimerTick', data);
        }, 1000);
      },
      close: function() {
        $('.rest-time-view').removeClass('visible');
        $('.rest-time-over-view').addClass('visible');
        eventHub.$emit('restTimeIsOver');
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
  .rest-time-view
    display: none;

  .rest-time-over-view
    display: none;

  .visible
    display: inline-block;
</style>
