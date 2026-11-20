const searchInput = document.getElementById("searchInput");
const videoGrid = document.getElementById("videoGrid");

searchInput.addEventListener("input", function () {
    const search = searchInput.value.toLowerCase();

    const videos = videoGrid.querySelectorAll(".video");

    videos.forEach(function (video) {
        const title = video.querySelector("h3").textContent.toLowerCase();

        video.style.display = title.includes(search)
            ? "block"
            : "none";
    });
});
