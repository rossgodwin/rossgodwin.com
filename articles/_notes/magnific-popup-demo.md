---
layout: article-magnific-popup
title: Jekyll Magnific Popup Demo
summary: These are just some basic notes that I took while doing some research on agile software development.
categories: [notes]
tags: [jekyll, magnific-popup, demo]
date: 2020-07-07
gallery:
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 5"
    title: "Image 5 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 6"
    title: "Image 6 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 7"
    title: "Image 7 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 8"
    title: "Image 8 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 9"
    title: "Image 9 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-1-th.jpg
    alt: "placeholder image 10"
    title: "Image 10 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 11"
    title: "Image 11 title caption"
  - url: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3.jpg
    image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-3-th.jpg
    alt: "placeholder image 12"
    title: "Image 12 title caption"
    class: custom-mfp-big
gallery2:
  - url: https://flic.kr/p/8a6Ven
    image_path: https://farm2.staticflickr.com/1272/4697500467_8294dac099_q.jpg
    alt: "Black and grays with a hint of green"
  - url: https://flic.kr/p/8a738X
    image_path: https://farm5.staticflickr.com/4029/4697523701_249e93ba23_q.jpg
    alt: "Made for open text placement"
  - url: https://flic.kr/p/8a6VXP
    image_path: https://farm5.staticflickr.com/4046/4697502929_72c612c636_q.jpg
    alt: "Fog in the trees"
gallery3:
  - image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-2-th.jpg
    alt: "placeholder image 2"
  - image_path: /assets/images/article/magnific-popup-demo/unsplash-gallery-image-4-th.jpg
    alt: "placeholder image 4"
---


{% include magnific-popup-gallery.html caption="This is a sample gallery with **Markdown support**." %}

{% include magnific-popup-gallery.html id="gallery2" caption="This is a second gallery example with images hosted externally." %}

{% include magnific-popup-gallery.html id="gallery3" caption="This is a third gallery example with two images and fills the entire content container." %}
