<template>
  <div class="containerError">
    <h1 class="numbers">
      404
    </h1>
    <h2 class="not-found">
      Страница не найдена
    </h2>
    <br>
    <p class="text">
      Страницы, на которую вы попали, не существует. <br>
      Вы можете проверить правильность введенного адреса <br>
      или перейти на главную страницу сайта
    </p>
    <div class="bottom">
      <h1 class="logo">
        <span class="name-logo">Palermo</span>shopping
      </h1>
      <nuxt-link
        :to="localePath('index')"
      >
        <button class="button">
          На главную
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'empty'
}
</script>

<style scoped>
.containerError {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F8F9;
  flex-direction: column;
  position: absolute;
  top: 0;
  z-index: 996;
}
.numbers {
  font-size: 200px;
  color: #3B4B68;
}
.not-found {
  font-size: 30px;
  color: #3B4B68;
}
.text {
  text-align: center;
  font-size: 14px;
  color: #3B4B68;
  line-height: 1.5em;
}
.bottom {
  display: flex;
  width: 380px;
  justify-content: space-around;
  margin-top: 30px;
}
.button {
  background-color: #3B4B68;
  color: white;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  font-weight: bold;
}
.logo {
  font-size: 24px;
  font-weight: 400;
  color: #8E9BAD;
  cursor: pointer;
}
.name-logo {
  color: #3B4B68;
  font-weight: 900;
}
</style>
