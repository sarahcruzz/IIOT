<script setup lang="ts">

</script>

<template>
  <main>    
    <header>
        <router-link to="/">Visualizar Cards</router-link>
        <router-link to="/management">Gerenciamento</router-link>
    </header>

    <div class="cards">
      
    </div>
  </main>
</template>

<style>

*{
  padding: 0;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

main{
  padding-top: 40px;
  display: flex;
  align-items: center;
  gap: 120px;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(208, 218, 240);
}

header{
  display: flex;
  width: 80%;
  height: 40px;
  justify-content: space-evenly;  
  align-items: center;

  a {
    font-size: 20px;
    text-decoration: none;
  }
}
  
</style>
