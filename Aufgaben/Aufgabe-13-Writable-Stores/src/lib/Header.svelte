<script>
    let description = "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";
    const src = "images/image.png"
    const alt = "Mario and Luigi with a Pizza"
</script>

<div id="header">
    <h1>Mario & Luigi's Pizza</h1>
    <p>{@html description}</p>
    <img id="logo" {src} {alt}/>
</div>

<style>
  #logo {
    border-radius: 50%;
    width: 200px; /* Anpassen der Breite und Höhe des Bildes */
    height: 200px;
    object-fit: cover;
  }
</style>