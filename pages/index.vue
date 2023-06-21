<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar" :class="{ 'sticky': isSticky, 'small': isSmallNavbar }">
      <div class="navbar-content">
        <h1 class="logo" :class="{ 'small': isSmallNavbar }">Davide Di Giovanni</h1>
        <button class="dark-mode-toggle" @click="toggleDarkMode()">Toggle Dark Mode</button>
      </div>
    </nav>
    <!-- Welcome Section -->
    <section class="section black">
      <div class="content">
        <h1 class="heading">it's me, digio!</h1>
        <p class="description">You just landed on my portfolio website.</p>
        <p class="description">At this point, you might wanna scroll...</p>
        <h2 class="heading">⤵</h2>
      </div>
    </section>
    <!-- DevOps Section -->
    <section class="section grey">
      <div class="content">
        <h1 class="heading">🎯 DevOps 🎯</h1>
        <div style="height: 20px;"></div>
        <p class="description">I'm really passionate about the world of DevOps and I love diving into the inner workings
          of
          computers.
          With a solid experience in Linux and bash scripting, I enjoy tinkering with different setups and configurations.
          <br /><br />
          Currently, I'm focused on studying for the EX294 certification to further enhance my skills with RHEL. <br />
          I'm well-versed in Kubernetes and Docker, leveraging their power to create scalable and efficient
          solutions.<br /><br />
          When it comes to DevOps techniques, CI/CD pipelines and Azure DevOps (or Jenkins!) are my go-to tools for
          seamless integration
          and deployment. <br /><br />
          And hey, I'm no stranger to SAST tools like SonarQube, NexusIQ, and Fortify, which help me ensure code quality
          and security. <br /><br />
          I strongly believe that if something can be automated, then it must be automated. For that purpouse, you can bet
          that I will be using Ansible.
        </p>
        <h2 class="heading">⤵</h2>
      </div>
    </section>
    <!-- Angular Section -->
    <section class="section black">
      <div class="content">
        <h1 class="heading">Frontend Frameworks</h1>
        <p class="description">One of my notable achievements was remaking the 'Successions Manager' application for BNP
          Paribas Asset Management using Angular. <br />It was a challenging yet immensely rewarding project! <br /> In my
          free
          time, I like to tinker around with various websites, just like this portfolio site you're browsing, which I
          built using Nuxt.js!
        </p>
        <h2 class="heading">⤵</h2>
      </div>

    </section>

    <!-- C# Section -->
    <section class="section grey">
      <div class="content">
        <h1 class="heading">Backend Development</h1>
        <p class="description">I had some good experiences with C# and the .NET ecosystem, which I absolutely love. I have
          developed microservices and APIs using C#, implementing principles such as Domain-Driven Design (DDD),
          Test-Driven Development (TDD), and adhering to Clean Code principles. Additionally, I am proficient in working
          with object-relational mapping (ORM) frameworks like Entity Framework.</p>
        <h2 class="heading">⤵</h2>
      </div>
    </section>

    <!-- Learn more Section -->
    <section class="section black">
      <div class="content">
        <h1 class="heading">Let's get to know each other! </h1>
        <div class="buttons">
          <button class="about-button">About me</button>
          <button class="contact-button">Reach out</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      isSmallNavbar: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollThreshold = 100; // Adjust this value as needed

      if (window.pageYOffset > scrollThreshold) {
        this.isSticky = true;
        this.isSmallNavbar = true;
      } else {
        this.isSticky = false;
        this.isSmallNavbar = false;
      }
    },
    toggleDarkMode() {
      alert('Button clicked!');
    },
  },
};
</script>


<style scoped>
body {
  overflow: hidden !important;
  scrollbar-width: none !important;
  ;
  /* Firefox */
  -ms-overflow-style: none !important;
  ;
  /* Internet Explorer 10+ */
}

.navbar.small {
  padding: 6px;
}

.logo.small {
  font-size: 20px;
}

body::-webkit-scrollbar {
  display: none !important;
  ;
  /* Chrome, Safari, Opera */
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  scroll-behavior: smooth;
}

.black {
  background-color: #000;
  color: #f5f5f3;
}

.grey {
  background-color: #1c1c1e;
  color: #f5f5f3;
}

.heading {
  font-size: 82px;
  font-weight: bold;
  text-align: center;
}

.description {
  font-size: 24px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.content {
  padding: 32px;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.about-button,
.contact-button {
  font-size: 18px;
  padding: 12px 24px;
  margin: 18px;
  background-color: #007aff;
  color: #f5f5f3;
  border: none;
  border-radius: 12px;
  cursor: pointer;
}

.about-button:hover,
.contact-button:hover {
  background-color: #0040dd;
}

.navbar {
  background-color: #1c1c1e;
  color: #f5f5f3;
  padding: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
}

.navbar.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}


.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.dark-mode-toggle {
  font-size: 18px;
  padding: 8px 16px;
  background-color: transparent;
  color: #f5f5f3;
  border: none;
  cursor: pointer;
}

.dark-mode-toggle:hover {
  text-decoration: underline;
}
</style>
