<template>
  <div class="noteList">
      <NoteMess v-for="note in notes" :key="note.id" :note="note"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NoteMess from './NoteMess'
export default {
    components: {
        NoteMess
    },
    computed: mapState(['notes'])
}
</script>

<style>
.noteList {
    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 15px;
    width: 320px;
    z-index: 99999;
}
</style>