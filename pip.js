(() => {
  const video = document.querySelector('video');

  if (!video) {
    return;
  }

  if (document.pictureInPictureElement) {
    document.exitPictureInPicture();
    return;
  }

  video.requestPictureInPicture();
})();
