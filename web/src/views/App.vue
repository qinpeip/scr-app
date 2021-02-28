<template>
  <div>
    {{isOnline? '有网' : '无网'}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnline: false
    }
  },
  created() {
  }
}
</script>