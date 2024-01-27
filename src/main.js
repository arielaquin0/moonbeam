import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import GLightbox from 'glightbox'
import 'remixicon/fonts/remixicon.css'
import 'swiper/swiper-bundle.css';
import '@/assets/scss/style.scss'

const app = createApp(App)

// Initialize AOS before mounting the app
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

GLightbox({
    selector: '.glightbox', // Set the selector for elements to be lightboxed
});

GLightbox({
    selector: '.portfolio-lightbox'
});

app.use(createPinia())
app.use(router)

app.mount('#app')
