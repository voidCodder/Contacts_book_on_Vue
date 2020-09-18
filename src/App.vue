<template>
  <div id="app">
    <div class="header">
      <h1>
        Список контактов
      </h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'Lato';
  src: url('~@/assets/fonts/Lato/Lato-Regular.woff2') format('woff2'),
    url('~@/assets/fonts/Lato/Lato-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url('~@/assets/fonts/Lato/Lato-Light.woff2') format('woff2'),
    url('~@/assets/fonts/Lato/Lato-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Lato';
  src: url('~@/assets/fonts/Lato/Lato-Bold.woff2') format('woff2'),
    url('~@/assets/fonts/Lato/Lato-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}
html {
  box-sizing: border-box;
}
* {
  &:before,
  :after {
    box-sizing: inherit;
  }
}
body {
  background: url('./assets/pictures/email-pattern.png');
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  line-height: 1.5;
}
a {
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: #2e37a5;
    font-weight: 600;
  }
}
.header {
  width: 100vw;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.button {
  text-decoration: none;
  background: #1abc9c;
  border-bottom: #16a085 3px solid;
  border-left: #16a085 1px solid;
  border-right: #16a085 1px solid;
  border-top: none;
  outline: none;
  border-radius: 6px;
  text-align: center;
  color: white;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background: #18b495;
    border-bottom: #16a085 1px solid;
    border-left: #16a085 1px solid;
    border-right: #16a085 1px solid;
    border-radius: 6px;
    color: white;
    transform: translate(0, 3px);
  }
  &[disabled] {
    background-color: #a1a096a6;
    border: none;
    cursor: not-allowed;
  }
  &_shadow {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
  &_icon-plus {
    &::before {
      background: url(./assets/icons/add.svg) no-repeat scroll center center /
        100% auto rgba(0, 0, 0, 0);
      content: '';
      display: inline-block;
      position: relative;
      vertical-align: middle;
      width: 15px;
      height: 15px;
      margin-right: 5px;
      top: -2px;
    }
  }
  &_icon-close {
    &::before {
      background: url(./assets/icons/close.svg) no-repeat scroll center center /
        100% auto rgba(0, 0, 0, 0);
      content: '';
      display: inline-block;
      position: relative;
      vertical-align: middle;
      width: 13px;
      height: 13px;
      margin-right: 5px;
      top: -2px;
    }
  }
  &_icon-back {
    &::before {
      background: url(./assets/icons/arrow-left.svg) no-repeat scroll center
        center / 100% auto rgba(0, 0, 0, 0);
      content: '';
      display: inline-block;
      position: relative;
      vertical-align: middle;
      width: 13px;
      height: 13px;
      margin-right: 5px;
      top: -2px;
    }
  }
}
.input {
  outline: none;
  padding: 5px;
  border: 0;
  border-bottom: 1px solid #eee;
  transition: all 0.5s ease-in-out;
  &:focus {
    border-bottom: 1px solid rgb(87, 228, 204);
  }
  &:hover {
    transform: translate(5px, 0);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  transform: scale(0, 0);
  opacity: 0;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-move {
  transition: transform 0.5s ease-out;
}
</style>
