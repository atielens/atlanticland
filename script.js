// ==== CONFIG (edit these) ====
const COMPANY = {
  phoneDisplay: "+1 (843) 941-3594",
  phoneTel: "+18439413594",
  email: "carsonesherbert5@gmail.com",
  schedulingUrl: "https://YOUR-SCHEDULING-LINK",
  googleReviewUrl: "https://YOUR-GOOGLE-REVIEW-LINK",
};

// List your photo files here (put them in /images/work/)
const WORK_PHOTOS = [
  "IMG_1",
  "IMG_2.jpg",
  "IMG_3.jpg",
  "IMG_4.jpg",
  "IMG_5.jpg",
  "IMG_6.jpg",
  "IMG_7.jpg",
  "IMG_8.jpg",
  "IMG_9.jpg",
  "IMG_10.jpg",
  "IMG_11.jpg",
  "IMG_12.jpg",
  "IMG_13.jpg",
  "IMG_14.jpg",
  "IMG_15.jpg",
  "IMG_16.jpg",
  "IMG_17.jpg",
];

// ==== INIT ====
document.getElementById("year").textContent = new Date().getFullYear();

// Fill hero/contact links dynamically (keeps HTML clean)
(function wireLinks(){
  const telLinks = document.querySelectorAll('a[href^="tel:+1XXXXXXXXXX"]');
  telLinks.forEach(a => a.href = `tel:${COMPANY.phoneTel}`);
  telLinks.forEach(a => a.textContent = COMPANY.phoneDisplay);

  const mailLinks = document.querySelectorAll('a[href^="mailto:youremail@example.com"]');
  mailLinks.forEach(a => a.href = `mailto:${COMPANY.email}`);
  mailLinks.forEach(a => a.textContent = COMPANY.email);

  document.querySelectorAll('a[href="https://YOUR-SCHEDULING-LINK"]').forEach(a => a.href = COMPANY.schedulingUrl);
  document.querySelectorAll('a[href="https://YOUR-GOOGLE-REVIEW-LINK"]').forEach(a => a.href = COMPANY.googleReviewUrl);
})();

// Gallery
(function renderGallery(){
  const grid = document.getElementById("galleryGrid");

  if (!WORK_PHOTOS.length) {
    const msg = document.createElement("div");
    msg.className = "card";
    msg.innerHTML = `
      <h3>No photos added yet</h3>
      <p>Add images to <code>images/work/</code> and list filenames in <code>WORK_PHOTOS</code>.</p>
    `;
    grid.appendChild(msg);
    return;
  }

  WORK_PHOTOS.forEach((file, idx) => {
    const fig = document.createElement("figure");
    fig.innerHTML = `
      <img loading="lazy" src="images/work/${file}" alt="Project photo ${idx + 1}">
      <figcaption>Project photo ${idx + 1}</figcaption>
    `;
    grid.appendChild(fig);
  });
})();

// Simple "mailto" form (no backend)
document.getElementById("mailtoForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = String(fd.get("name") || "").trim();
  const phone = String(fd.get("phone") || "").trim();
  const message = String(fd.get("message") || "").trim();

  const subject = encodeURIComponent(`Quote request from ${name || "Website"}`);
  const body = encodeURIComponent(
    `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${message}\n`
  );

  window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
});
