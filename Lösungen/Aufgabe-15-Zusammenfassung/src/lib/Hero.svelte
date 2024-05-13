<script>
  import image from "../assets/image.png";
  let heroText = "Welcome to Mario & Luigi's Pizza!";
  let heroImage = image;
</script>

<section class="hero">
  <div class="hero-content">
    <img src={heroImage} alt="Mario & Luigi's Pizza" class="hero-image" />
    <h1>{heroText}</h1>
  </div>
</section>

<style>
  .hero {
    color: white;
    background-color: #093301;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-content {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .hero-image {
    width: 100px; 
    height: auto;
    border-radius: 25px;
  }
</style>