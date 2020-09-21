<template>
<div class="boddy">
  <div class="loader"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.boddy {
  position: relative;
  width: 100%;
  height: 100%;
}
.loader {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-top: 16px solid blue;
  border-right: 16px solid green;
  border-bottom: 16px solid red;
  border-left: 16px solid pink;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>