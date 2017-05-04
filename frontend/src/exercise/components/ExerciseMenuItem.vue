<template lang="pug">
  li(v-on:click="selectMenu")
    a.menu-name {{ExerciseMenuItemData.name}}
</template>

<script>
  export default {
    props: {
      ExerciseMenuItemData: Object,
      require: true
    },
    components: {
    },
    created: function() {
    },
    mounted: function() {
    },
    methods: {
      selectMenu: function() {
        eventHub.$emit('menuSelected', this.ExerciseMenuItemData)
      }
    }

  }
</script>


<style lang="sass?indentedSyntax" scoped>
</style>
