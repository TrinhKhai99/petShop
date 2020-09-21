<template>
  <tr>
      <td>{{ employee.employeeId }}</td>
      <td><router-link :to="{ name: 'EmployeeDetail', params: { id:employee.employeeId }}">{{employee.fullName}}</router-link></td>
      <td>{{employee.phoneNumber}}</td>
      <td>{{employee.gender}}</td>
      <td>{{new Date(employee.birthday).toDateString()}}</td>
      <td>{{new Date(employee.joinDate).toDateString()}}</td>
      <td>{{employee.region}}</td>
      <td>{{employee.departmentDTO.name}}</td>
      <td>
        <router-link tag="button" class="btn btn-sm btn-info" :to="{ name: 'EmployeeDetail', params: { id:employee.employeeId }}">Sửa</router-link>
        <button @click.prevent="deleteEmployee" class="btn btn-sm btn-danger">
          Xóa
        </button>
        </td>
      
  </tr>
</template>

<script>
export default {
    props: ["employee"],
    methods: {
      deleteEmployee() {
        this.$store.dispatch("deleteEmployee", this.employee.employeeId)
      }
    }
}
</script>

<style>

</style>