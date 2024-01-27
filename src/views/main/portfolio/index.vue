<script setup>
import {on, onscroll, select} from "@/utils/common-util";
import Isotope from "isotope-layout";
import AOS from "aos";
import { onMounted, ref } from "vue";

const initializeIsotope = () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });

    let portfolioFilters = select('#portfolio-flters li', true);

    on('click', '#portfolio-flters li', (e) => {
      e.preventDefault();

      portfolioFilters.forEach(el => {
        el.classList.remove('filter-active');
      });

      e.target.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: e.target.getAttribute('data-filter')
      });

      portfolioIsotope.on('arrangeComplete', function() {
        AOS.refresh()
      });
    }, true);
  }
}

const portfolioAllFiltersRef = ref(null)
onMounted(() => {
  initializeIsotope()

  if (portfolioAllFiltersRef.value) {
    setTimeout(() => {
      portfolioAllFiltersRef.value.click()
    }, 1000)
  }
})
</script>

<template>
  <div class="container" data-aos="fade-up">

    <div class="section-title">
      <h2>Portfolio</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>

    <ul id="portfolio-flters" class="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
      <li data-filter="*" ref="portfolioAllFiltersRef">All</li>
      <li data-filter=".filter-app">App</li>
      <li data-filter=".filter-card">Card</li>
      <li data-filter=".filter-web">Web</li>
    </ul>

    <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>App 1</h4>
          <p>App</p>
          <a href="@/assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="@/assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>App 2</h4>
          <p>App</p>
          <a href="@/assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Card 2</h4>
          <p>Card</p>
          <a href="@/assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Web 2</h4>
          <p>Web</p>
          <a href="@/assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>App 3</h4>
          <p>App</p>
          <a href="@/assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Card 1</h4>
          <p>Card</p>
          <a href="@/assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-card">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Card 3</h4>
          <p>Card</p>
          <a href="@/assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 portfolio-item filter-web">
        <div class="portfolio-img"><img src="@/assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt=""></div>
        <div class="portfolio-info">
          <h4>Web 3</h4>
          <p>Web</p>
          <a href="@/assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>

    </div>

  </div>
</template>
