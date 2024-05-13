<script>

    const formatter = new Intl.DateTimeFormat(
		'en',
		{
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		}
	);
</script>

<div>
    <h2>Our Delivery Times</h2>
    <p>Every Day from 9:00am till 8:00pm</p>
	<!--Hier soll die aktuelle Zeit angezeigt werden zum Formatieren kann der formatter genutzt werden-->
</div>