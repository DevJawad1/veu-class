<template>
  <p>This is our mission</p>
  <div class="loader border-primary">
    <div class="icon border-primary"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .loader{
    border: 1px solid;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    animation: animate1 2.5s linear infinite forwards;
    left: 50%;
    top: 45%;
    /* transform: translate(-50%, -50%); */
  }
  .icon{
    border: 5px solid transparent !important;
    border-left: 4px solid !important;
    border-top: 4px solid !important;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  @keyframes animate1 {
    50%{
      transform: rotate(1000deg);
      width: 20px;
      height: 20px;
    }
    100%{
      width: 50px;
      height: 50px;
    }
  }

</style>