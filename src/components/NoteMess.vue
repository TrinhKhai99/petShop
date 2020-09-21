<template>
   <div :class="typeClass" class="alert alert-dismissible fade show" role="alert">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span class="sr-only">Close</span>
      </button>
      <strong>{{note.message}}</strong> 
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: ['note'],
    data() {
        return {
            timeout: null,
        }
    },
    computed: {
        typeClass() {
            return `alert-${this.note.type}`
        }
    },
    created() {
        this.timeout = setTimeout(() => {
            this.deleteNote(this.note);
        }, 3000)
    },
    beforeDestroy() {
        clearTimeout(this.timeout)
    },
    methods: mapActions(['deleteNote'])
}
</script>

<style>

</style>