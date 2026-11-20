function toggleLike(button, videoId) {
    const key = "pstube_like_" + videoId;
    const liked = localStorage.getItem(key) === "true";

    localStorage.setItem(key, String(!liked));

    button.textContent = !liked ? "❤️ Liked" : "👍 Like";
}

function toggleSubscribe(button, channel) {
    const key = "pstube_sub_" + channel;
    const subscribed = localStorage.getItem(key) === "true";

    localStorage.setItem(key, String(!subscribed));

    button.textContent = !subscribed
        ? "✓ Subscribed"
        : "Subscribe";
}
