<template lang="pug">
  v-select.select-menu(
    v-model="ExerciseMenuSelectorData.selectedMenu"
    v-bind:items="ExerciseMenuSelectorData.items"
    v-on:input="selectMenu")
</template>

<script>
  export default {
    props: {
      ExerciseMenuSelectorData: Object,
      require: true
    },
    data: function() {
      return {
        states: ['hoge', 'fuga']
      }
    },
    created: function() {
    },
    mounted: function() {
    },
    methods: {
      selectMenu: function() {
        eventHub.$emit('menuSelected', this.ExerciseMenuSelectorData.selectedMenu)
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
  .select-menu
    width: 40%;
</style>
