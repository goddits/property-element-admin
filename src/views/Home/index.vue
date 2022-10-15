<template>
  <div>
    主页
    <el-button>按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { ceshi } from '@/utils/api/ceshi'

ceshi().then( res =>{
  console.log(res);
  
})
</script>

<style lang="scss" scoped>

</style>