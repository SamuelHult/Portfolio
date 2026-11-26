const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });
}

document.querySelector("#year").textContent = String(new Date().getFullYear());

const galleryImages = [
  {
    src: "assets/dragspel-sommar-2022.webp",
    alt: "Samuel spelar dragspel utomhus framför ett rött hus",
    caption: "Samuel bjuder glasskunder på dragspelsmusik 2022."
  },
  {
    src: "assets/samuel-hult-karlssons.jpg",
    alt: "Samuel med sitt röda dragspel i en butik fylld av dragspel",
    caption: "Besök hos Karlssons Musik i Fjärås som slutade med nyinköpt Dise Diamant 2026."
  },
  {
    src: "assets/samuel-hult-live.jpg",
    alt: "Samuel spelar dragspel inför publik",
    caption: "Samuel spelar jullåtar i Skeppsås församlingshem 2024."
  }
];
const galleryCarousel = document.querySelector("#gallery-carousel");

if (galleryCarousel && galleryImages.length > 0) {
  const stage = galleryCarousel.querySelector("[data-gallery-slide]");
  const count = galleryCarousel.querySelector("[data-gallery-count]");
  let currentImage = 0;

  const renderImage = () => {
    const image = galleryImages[currentImage];
    const slide = document.createElement("figure");
    const visual = document.createElement("div");
    const photo = document.createElement("img");
    const caption = document.createElement("figcaption");
    const label = document.createElement("span");
    const title = document.createElement("h3");

    slide.className = "gallery-slide";
    visual.className = "gallery-slide__visual";
    photo.className = "gallery-slide__image";
    photo.src = image.src;
    photo.alt = image.alt;
    photo.loading = "lazy";
    photo.decoding = "async";
    caption.className = "gallery-slide__copy";
    label.className = "gallery-slide__label";
    label.textContent = "Bildgalleri";
    title.textContent = image.caption;
    caption.append(label, title);
    visual.append(photo);
    slide.append(visual, caption);
    stage.replaceChildren(slide);
    count.textContent = `${String(currentImage + 1).padStart(2, "0")} / ${String(galleryImages.length).padStart(2, "0")}`;
  };

  galleryCarousel.querySelector("[data-gallery-previous]").addEventListener("click", () => {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    renderImage();
  });
  galleryCarousel.querySelector("[data-gallery-next]").addEventListener("click", () => {
    currentImage = (currentImage + 1) % galleryImages.length;
    renderImage();
  });

  renderImage();
}

const youtubeClips = [
  { id: "wC_qb4Fb9KQ", title: "Annas Visa – Samuel Hult" },
  { id: "yDE5pS7eIBI", title: "Vals från Boda – Samuel Hult" }
];
const musicCarousel = document.querySelector("#music-carousel");

if (musicCarousel && youtubeClips.length > 0) {
  const stage = musicCarousel.querySelector("[data-player]");
  const count = musicCarousel.querySelector(".carousel-count");
  let currentClip = 0;

  const renderClip = () => {
    const clip = youtubeClips[currentClip];
    const slide = document.createElement("article");
    const visual = document.createElement("div");
    const player = document.createElement("iframe");
    const copy = document.createElement("div");
    const sourceLabel = document.createElement("span");
    const title = document.createElement("h3");
    const description = document.createElement("p");

    slide.className = "music-slide";
    visual.className = "music-slide__visual";
    player.className = "music-slide__frame";
    player.src = `https://www.youtube.com/embed/${encodeURIComponent(clip.id)}?rel=0&playsinline=1`;
    player.title = clip.title;
    player.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    player.allowFullscreen = true;
    player.loading = "lazy";
    player.referrerPolicy = "strict-origin-when-cross-origin";

    copy.className = "music-slide__copy";
    sourceLabel.className = "music-slide__label";
    sourceLabel.textContent = "På YouTube";
    title.textContent = clip.title;
    description.textContent = "Se och lyssna på Samuel spela dragspel – direkt här på sidan.";
    copy.append(sourceLabel, title, description);
    visual.append(player);
    slide.append(visual, copy);
    stage.replaceChildren(slide);
    count.textContent = `${String(currentClip + 1).padStart(2, "0")} / ${String(youtubeClips.length).padStart(2, "0")}`;
  };

  musicCarousel.querySelector("[data-previous]").addEventListener("click", () => {
    currentClip = (currentClip - 1 + youtubeClips.length) % youtubeClips.length;
    renderClip();
  });
  musicCarousel.querySelector("[data-next]").addEventListener("click", () => {
    currentClip = (currentClip + 1) % youtubeClips.length;
    renderClip();
  });

  renderClip();
}
