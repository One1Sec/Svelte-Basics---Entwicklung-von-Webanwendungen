# Aufgabe 03 - Syling in Svelte

## Überblick
In der folgenden Aufgabe werdet ihr HTML direkt in einer Svelte-Komponente rendern und das Styling für ein p-Element ergänzen.


## Aufgaben 

1. **Zuweisung HTML-Tag** : In App.svelte ist bereits ein entsprechender Text (description) hinterlegt. In diesem befindet sich das HTML-Element 'strong' innerhalb des Strings. 
Passe das p-Element ensprechend an, damit die Beschreibung korrekt angezeigt wird. 

2. **Style** : Ändere das Styling des p-Elements in dieser Aufgabe wie folgt:
- die Schriftfarbe soll rot sein
- die Schriftart soll zu Comic Sans MS abgeändert werden
- die Schriftgröße soll zu 40pt angepasst werden 

```svelte
<script>
  let description= "Mario & Luigi's pizza service only uses <strong>fresh and local</strong> products 🍕🥦";
</script>


<main>
	<h1>Mario & Luigi's Pizza</h1>
	<p> <!-- Ergänze hier das fehlende HTML-tag --> {description}</p>
  
</main> 

<!-- Ergänze im folgenden <style> das styling für <p> -->

<style>

	  main {
   		text-align: center;
   		background-color: #e3caa5;
   		padding: 50px;
	  }
    
</style>
```