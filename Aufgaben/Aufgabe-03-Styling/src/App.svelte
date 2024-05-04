<script>
	let description= "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";
	let src = "images/image.png"
	let alt = "Mario and Luigi with a Pizza"
</script>


<main>
	<h1>Mario & Luigi's Pizza</h1>
	<img src={src} {alt}/>
	<p> <!-- Ergänze hier das fehlende HTML-tag --> {description}</p>
  
</main> 

<!-- Ergänze im folgenden <style> das styling für <p> -->

<style>
	h1 {
		font-family: 'Comic Sans MS';
	}
	main {
   		text-align: center;
   		background-color: #e3caa5;
   		padding: 50px;
	}
	img {
    width: 300px; 
    height: auto;  
 	}
</style>
