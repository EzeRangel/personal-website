---
title: "ICUSA: Achieving a Faster and More Optimized Digital Presence"
description: "A complete reorientation of ICUSA's digital presence leading to an improved user experience."
published_at: "2023-02-15"
---

<script>
  import Image from '$lib/components/PostImage.svelte';
</script>

[ICUSA](https://icusa.com.mx) is a Mexican company that specializes in the production of plastics for the agricultural sector and has focused on developing products to improve the efficiency of work. This has driven a complete reorientation of its digital presence through its website.

ICUSA had many opportunities for improvement that would allow it to position in the digital market and differentiate itself from its competitors. These critical areas were:

- Separate the corporate website from the product and service divisions.
- Web redesign that reflects the new brand identity.
- Responsive design is non-negotiable.
- Performance optimization and fast loading to improve the user experience.

## New Information Architecture

The first step for the development was to restructure the content with the aim of differentiating the organizational site from its work divisions. This makes it possible to segment the users who visit the organizational site from the customers who are looking for information about agricultural or industrial products, resulting in three main sites:

- [ICUSA](https://icusa.com.mx), the corporative website.
- [ICUSA Agroplasticos](https://agroplasticos.mx), the website with product information for the agricultural sector.
- [ICUSA Industrial](https://industrial.icusa.com.mx), a landing page with product information for the industrial sector.

### Challenges

The main challenge was to reorganize the information from one site and turn it into three, with their own sitemap, taxonomies, and content categories. This reorganization also required correctly manipulate redirections to inform search engines that there would be a change in the old site URLs.

Defining the URLs correctly for each site made it easier to create a correct sitemap for each one.

## Web Design

My friend Edel Güicho was responsible for the website redesign, using the recent brand identity change and the new information architecture as a basis, he created a graphic proposal that showed the company's technology focus. The mobile-first design made it easier to set up the main components early, so they could be used on both tablet and desktop screens.

## Development

[Search Engines likes fast websites](https://adhocti.com/en/blog/4-errors-that-few-pay-attention-to-and-brutally-slow-down-your-site-speed), so this was an opportunity to develop an efficient website for Google and fast for users. The plan for ICUSA was to implement a headless architecture with a single CMS that connects to the three websites.

I chose Next.js for the technology stack because it has both dynamic features and static benefits. Next.js allows for pre-rendering of static sites, this means that when the site is compiled, pages can be created with data from a CMS before the site is put into production. This feature offers performance benefits since the page does not need to be rendered on the client.

The development for Agroplasticos needed a different development approach because there are products with information that need to be up to date. The best way to do this was to use Incremental Static Regeneration from Next.js. This mechanism allows _static pages to be updated after they have been built_, without needing to rebuild the entire site.

### Optimizing Performance for Google Page Speed

Using Next.js can help improve a site's performance, but it's not a guarantee that problems won't happen, like what happened with ICUSA. This is a list of the main points that needed to be optimized on the website to get a better Google PageSpeed score.

#### Optimizing LCP

The Largest Contentful Paint (LCP) is a metric to measure how quickly a user perceives a website is loading. This metric is based on the size of the largest visible image or text block, in relation to the moment the page began to load.

I needed to find an efficient way to load the large image for the first render of the ICUSA homepage, which was our LCP. I faced the decision of which image format to use - PNG with transparency, Webp, or JPG. To decide which image to use, I conducted a small experiment and measured the LCP of the page for every image format, which you can see below.

<Image
  src="/images/02-2023/filmstrip-icusa-image-experiment.png"
  alt="An LCP timeline comparing images with different formats"
  caption="The results were clear: using a JPG image with the same background saved 300kbs compared to the PNG image with transparency"
/>

In addition to using the correct image, it was necessary to load it efficiently. Thanks to the Next.js `<Image />` component, it is possible to prioritize loading the image and provide the browser with the information it needs to know what image to load depending on the device the user is using.

#### Optimizing TBT

The Total Blocking Time (TBT) is a metric that describes how long the main JavaScript thread is blocked until the page is fully usable. If it's too long (over 50 ms), users will likely find the page slow or unresponsive, [which can make them give up on it](https://web.dev/tbt/). To make sure this isn't a problem for projects done with Next.js, we need to pay extra attention to the this metric. Here are the most important points to keep in mind when optimizing the TBT for ICUSA.

**Take care of third-party libraries that increment the final bundle size**

Using third-party libraries in a Next.js project can slow down the loading time. To address this, I used `@next/bundle-analyzer` to view all the libraries and their size in the final bundle. This led me decide which libraries should I prioritize or load it asynchronously, which would reduce the size of the bundle created by Next.js.

**Use the CSS compiled with Javascript correctly**

Using TailwindCSS alongside CSS Modules is a helpful way to write optimized CSS for a Next.js project. Tailwind takes care of compiling the code and removing any styles that are not being used, meaning only the CSS that is used is loaded. With CSS Modules, you can wrap up the CSS code and link it to the component you are building, so there is no risk of any styles overriding what you have done.

**Optimize third-party scripts**

The `Script` component of Next.js is a great tool that enabled me to include the Facebook Messenger Chat without impacting the final bundle of the project. Using this component with the correct strategy helped me to focus on the key code for the site and have the chat load when everything else was already prepared.

## Results

Applying this architecture with Next.js produced good results. Google PageSpeed analysis showed a 50% improvement in the overall rating for mobile devices and 100% performance on desktop.

The site loading time decreased dramatically, from 8 seconds to less than 1 second. This greatly improved the user experience for everyone visiting ICUSA. Plus, Next.js allowed ICUSA to easily scale their web application as their traffic increased.
