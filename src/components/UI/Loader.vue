<template>
    <div class="loading">
        <span class="loader"></span>
        <span class="loaders">Loading</span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 70px;
    align-items: center;
    justify-content: center;
}
.loader {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 8rem;
    margin-top: 3em;
  }
  .loader:before,
  .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(0, 0, 0, 0.267));
  }
  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem rgb(109, 109, 109);
    animation-name: pulsIn;
  }
  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 black;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem black;
      opacity: 1;
    }
    50% {
      box-shadow: inset 0 0 0 0 black;
      opacity: 0;
    }
    100% {
      box-shadow: inset 0 0 0 0 black;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0% {
      box-shadow: 0 0 0 0 black;
      opacity: 0;
    }
    50% {
      box-shadow: 0 0 0 0 black;
      opacity: 0;
    }
    100% {
      box-shadow: 0 0 0 1rem black;
      opacity: 1;
    }
  }
  .loaders {
  font-size: 48px;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: grey;
  box-sizing: border-box;
  text-shadow: 0 0 2px #FFF, 0 0 1px #FFF, 0 0 1px #FFF;
  letter-spacing: 2px;
  position: relative;
}
.loaders::after {
  content: 'Loading';
  position: absolute;
  left: 0;
  top: 0;
  color: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  animation: animloader 6s linear infinite;
}

@keyframes animloader {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>