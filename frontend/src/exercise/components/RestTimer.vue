<template lang="pug">
  #rest-timer
    .rest-time-view
      p 休憩時間は {{RestTimerData.restTime}} 秒です。
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
    components: {
    },
    created: function() {
    },
    mounted: function() {
    },
    watch: {
    },
    methods: {
      runTimer: function(restTime) {
        console.log('restTime is '+restTime)
        $('.rest-time-view').addClass('visible');
        const waitMilliSec = restTime * 1000;
        setTimeout(() => {
          eventHub.$emit('restTimeIsOver');
          $('.rest-time-view').removeClass('visible');
          $('.rest-time-over-view').addClass('visible');
        }, waitMilliSec);
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
