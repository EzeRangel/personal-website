<div class="wrapper">
  <header class="header">
    <a href="/">Ezequiel Rangel</a>
  </header>
  <section id="intro">
    <div class="hero">
      <h1 class="hero__title">
        <span>
          I design Digital
          <br />
          products, web design,
          <br /> and branding.
        </span>
      </h1>
      <p class="hero__copy">
        Bring a business mind to design, and transform your career and company, with this free book by Apple and Electronic Arts design veteran Ryan Rumsey. Inside, he shares the essential vocabulary frameworks that you can put right to work.
      </p>
      <a href="#" class="hero__cta">
        About me
        <span>&rarr;</span>
      </a>
    </div>
  </section>
</div>

<style>
  .hero__title{
    @apply text-4xl leading-[4rem] font-display mb-12 font-normal;
    @apply md:leading-[6rem] md:text-[4.3rem];
  }

  .hero__title > span{
    @apply border-b-[15px] border-featured;
  }

  .hero__copy{
    @apply leading-7 mb-12 max-w-xl;
  }

  .hero__cta{
    @apply font-semibold transition-colors;
    @apply hover:text-featured-dark;
  }

  .hero__cta > span{
    @apply transition-transform translate-x-0 inline-block;
  }

  .hero__cta:hover > span{
    @apply translate-x-4;
  }
</style>