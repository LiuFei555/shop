<template>
  <div class="banner">
    <div class="show"></div>
    <div class="show"></div>
    <div class="show"></div>
    <div class="show"></div>
    <div class="show5 "></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.banner {
  height: 600px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
}
.show {
  width: 308px;
  height: 150px;
  background-color: #ffffff;
  float: left;
}
.show5 {
  width: 100%;
  height: 250px;
  background-color: #fff;
  margin-top: 10px;
}
</style>