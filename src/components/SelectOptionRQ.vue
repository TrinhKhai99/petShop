<template>
  <div class="rqPet_Option mb-5">
      <div @click="changeTabStatus('all')" :class="{highlight:tabSelectStatus == 'all'}" class="btn_Option">Tất Cả </div>
      <div @click="changeTabStatus('wait')" :class="{highlight:tabSelectStatus == 'wait'}" class="btn_Option">Đang Chờ </div>
      <div @click="changeTabStatus('contacting')" :class="{highlight:tabSelectStatus == 'contacting'}" class="btn_Option">Đang Liên Hệ </div>
      <div @click="changeTabStatus('success')" :class="{highlight:tabSelectStatus == 'success'}" class="btn_Option">Thành Công </div>
      <div @click="changeTabStatus('cancel')" :class="{highlight:tabSelectStatus == 'cancel'}" class="btn_Option">Huỷ</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>