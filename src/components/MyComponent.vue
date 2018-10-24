<template lang="pug">
  div
    span {{ message }}
</template>

<script>
export default {
  name: 'MyComponent',
  data () {
    return {
      message: 'hello!'
    }
  },
  methods: {
    test (msg) {
      this.message = msg
    }
  },
  created () {
    this.message = 'bye!'
  }
}
</script>
