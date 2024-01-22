<template>
  <div class="pagina-com-video">
    <video autoplay loop muted>
      <source src="../assets/pokemon-ash-live-wallpaper.mp4" type="video/mp4" />
      Seu navegador não suporta a tag de vídeo.
    </video>
    <!-- Conteúdo adicional da página -->
  </div>
</template>

<style>
.pagina-com-video {
  position: relative;
  min-height: 100vh;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
