<script setup>
  const user={
    id:1,
    name:"ade"
}
</script>
<template>
<!-- <p>
  <RouterLink :to="{name:'home'}">Go to homepage </RouterLink>
</p>
<p>
  <RouterLink :to="{name:'about'}">Go to aboutpage</RouterLink>
</p>
<p>
  <RouterLink :to="`/user/${user.name}/post/${user.id}`">Go to user page</RouterLink>
</p> -->

  <RouterView/>
</template>

<style scoped>

</style>