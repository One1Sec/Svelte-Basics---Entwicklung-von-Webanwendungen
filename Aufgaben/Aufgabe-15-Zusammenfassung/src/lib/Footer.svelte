<script>
  let year = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-content">
    <h3>MMario & Luigi's Pizza</h3>
    <p>Best pizza in the Mushroom Kingdom since 1985!</p>
    <ul class="footer-links">
      <li>Home</li>
      <li>Menu</li>
      <li>Locations</li>
      <li>Contact Us</li>
    </ul>
    <p class="copyright">© {year} Mario & Luigi's Pizza. All rights reserved.</p>
  </div>
</footer>

<style>
  .footer {
    background-color: #FF5F00;
    padding: 2rem;
    color: white;
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    cursor: pointer;
  }
  .footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
  .copyright {
    margin-top: 1rem;
  }
</style>
