<template>
  <tr>
    <td>{{ employee.employeeId }}</td>
    <td style="color:red">{{employee.fullName}}</td>
    <td >{{employee.departmentDTO.name}}</td>
    <td>
      <button @click="selectId(employee.employeeId)" data-dismiss="modal" class="btn btn-sm btn-success">Chọn</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ["employee"],
  methods: {
      selectId(id){
       let data = {
          name : this.employee.fullName,
          id: this.employee.employeeId
        }
          this.$store.dispatch("setEmployeeFoster", data);
      }
  }
};
</script>

<style>
</style>