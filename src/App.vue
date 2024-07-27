<script setup>
import { onMounted } from "vue";
import Swiper from 'swiper';
// import Waypoint from 'waypoint';
import { select, onscroll } from "@/utils/common-util";
import Header from "./views/header/index.vue";
import Hero from "./views/hero/index.vue";
import ClientSection from "./views/main/clients/index.vue";
import AboutUsSection from "./views/main/about-us/index.vue";
import WhyUsSection from "./views/main/why-us/index.vue";
import SkillsSection from "./views/main/skills/index.vue";
import ServicesSection from "./views/main/services/index.vue";
import CtaSection from "./views/main/cta/index.vue";
import PortfolioSection from "./views/main/portfolio/index.vue";
import TeamSection from "./views/main/team/index.vue";
import PricingSection from "./views/main/pricing/index.vue";
import FaqSection from "./views/main/faq/index.vue";
import ContactSection from "./views/main/contact/index.vue";
import Footer from "./views/footer/index.vue";

const mainSections = [
  { id: 'clients', class: 'clients section-bg', component: ClientSection },
  { id: 'about', class: 'about', component: AboutUsSection },
  // { id: 'why-us', class: 'why-us section-bg', component: WhyUsSection },
  // { id: 'skills', class: 'skills', component: SkillsSection },
  // { id: 'services', class: 'services section-bg', component: ServicesSection },
  { id: 'cta', class: 'cta', component: CtaSection },
  // { id: 'portfolio', class: 'portfolio', component: PortfolioSection },
  { id: 'team', class: 'team section-bg', component: TeamSection },
  // { id: 'pricing', class: 'pricing', component: PricingSection },
  // { id: 'faq', class: 'faq section-bg', component: FaqSection },
  { id: 'contact', class: 'contact', component: ContactSection },
];

onMounted(() => {
  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  const selectHeader = select('#header');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  // let skilsContent = select('.skills-content');
  // if (skilsContent) {
  //   new Waypoint({
  //     element: skilsContent,
  //     offset: '80%',
  //     handler: function(direction) {
  //       let progress = select('.progress .progress-bar', true);
  //       progress.forEach((el) => {
  //         el.style.width = el.getAttribute('aria-valuenow') + '%'
  //       });
  //     }
  //   })
  // }
})
</script>

<template>
  <div>
    <!-- ======= Header ======= -->
    <Header />

    <!-- ======= Hero Section ======= -->
    <Hero />

    <!-- ======= Main Section ======= -->
    <main id="main">
      <section v-for="(section, index) in mainSections" :key="index" :id="section.id" :class="section.class">
        <component v-bind:is="section.component" />
      </section>
    </main>

    <!-- ======= Footer ======= -->
    <Footer />

    <div id="preloader"></div>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
      <i class="bi bi-arrow-up-short"></i>
    </a>
  </div>
</template>
