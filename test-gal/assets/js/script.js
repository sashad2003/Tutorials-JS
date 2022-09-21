import lightGallery from "https://cdn.skypack.dev/lightgallery@2.1.2";

import lgZoom from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/zoom";

import lgThumbnail from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/thumbnail";

import lgShare from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/share";

import lgRotate from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/rotate";
import lgAutoplay from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/autoplay";
import lgFullscreen from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/fullscreen";
import lgHash from "https://cdn.skypack.dev/lightgallery@2.1.2/plugins/hash";

$("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: true,
    // lastRow: "hide",
    rowHeight: 180,
    margins: 1
  })
  .on("jg.complete", function () {
    lightGallery(document.getElementById("animated-thumbnails-gallery"), {
      autoplayFirstVideo: false,
      pager: false,
      galleryId: 2,
      customSlideName: true,
      flipHorizontal: false,
      flipVertical: false,
      rotateLeft: false,
      plugins: [
        lgZoom,
        lgThumbnail,
        lgShare,
        lgRotate,
        lgFullscreen,
        lgAutoplay,
        lgHash
      ],
      mobileSettings: {
        controls: true,
        showCloseIcon: true,
        download: false,
        rotate: false
      }
    });
  });
