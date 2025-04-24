<template>
  <div>
    <Header />

    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'
</script>

<style scoped>
main {
  padding: 2rem;
}
</style>