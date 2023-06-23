<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar" :class="{ 'sticky': isSticky, 'small': isSmallNavbar }">
      <div class="navbar-content">
        <h1 class="logo" :class="{ 'small': isSmallNavbar }">Davide Di Giovanni</h1>
        <div class="flex-right">
          <p class="light-mode-text">Light mode</p>
        </div>
        <label class="form-switch">
          <input type="checkbox">
          <i></i>
        </label>
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
@import 'assets/global.css';

body {
  overflow: hidden !important;
  scrollbar-width: none !important;
  /* Firefox */
  -ms-overflow-style: none !important;
  /* Internet Explorer 10+ */
}

.navbar.small {
  padding: 6px;
}

.logo.small {
  font-size: 20px;
}

.form-switch {
  display: inline-block;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  vertical-align: middle;
  /* Adjust the vertical alignment as needed */
}

.form-switch i {
  position: relative;
  display: inline-block;
  margin-right: .5rem;
  width: 46px;
  height: 26px;
  background-color: #000000;
  border-radius: 20px;
  vertical-align: text-bottom;
  transition: all 0.3s linear;
}

.form-switch i::before {
  content: "";
  position: absolute;
  left: 0;
  width: 42px;
  height: 22px;
  background-color: #888888;
  border-radius: 11px;
  transform: translate3d(2px, 2px, 0) scale3d(1, 1, 1);
  transition: all 0.25s linear;
}

.form-switch i::after {
  content: "";
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: #fff;
  border-radius: 11px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.24);
  transform: translate3d(2px, 2px, 0);
  transition: all 0.2s ease-in-out;
}

.form-switch:active i::after {
  width: 28px;
  transform: translate3d(2px, 2px, 0);
}

.form-switch:active input:checked+i::after {
  transform: translate3d(16px, 2px, 0);
}

.form-switch input {
  display: none;
}

.form-switch input:checked+i {
  background-color: #4BD763;
}

.form-switch input:checked+i::before {
  transform: translate3d(18px, 2px, 0) scale3d(0, 0, 0);
}

.form-switch input:checked+i::after {
  transform: translate3d(22px, 2px, 0);
}

body::-webkit-scrollbar {
  display: none !important;
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

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.flex-right {
  margin-left: auto;
  margin-right: 20px;
}

.light-mode-text {
  margin: 0;
}

.description {
  font-size: 24px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.content {
  padding: 0;
  margin: 0;
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
