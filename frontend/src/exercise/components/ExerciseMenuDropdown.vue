<template lang="pug">
  .dropdown
    button#dropdownMenu1.btn.btn-primary.dropdown-toggle(type="button" data-toggle="dropdown", v-on:click="openExerciseMenu") メニュー
    ul.dropdown-menu
      ExerciseMenuItem(v-for="ExerciseMenuItemData in ExerciseMenuDropdownData.ExerciseMenuItems" v-bind:ExerciseMenuItemData="ExerciseMenuItemData")
</template>

<script>
  export default {
    props: {
      ExerciseMenuDropdownData: Object,
      require: true
    },
    components: {
      ExerciseMenuItem: require('./ExerciseMenuItem.vue')
    },
    created: function() {
    },
    mounted: function() {
      //FIXME: if remove it, dropdown button does not open on first click.
      $('#dropdownMenu1').dropdown();
    },
    methods: {
      openExerciseMenu: function(){
        $('#dropdownMenu1').dropdown();
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
</style>
