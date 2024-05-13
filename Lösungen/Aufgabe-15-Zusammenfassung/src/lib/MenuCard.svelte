<script>
  import Card, { Content, Media, MediaContent } from "@smui/card";
  import IconButton from "@smui/icon-button";
  export let item;
</script>

<Card style="max-width: 300px; max-height:450px; cursor: pointer" on:click>
  <Media
    class="card-media"
    aspectRatio="square"
    style="background-image: url({item.img});"
  >
    <MediaContent>
      <h2
        style="color: #fff; position: absolute; bottom: 16px; left: 16px; margin: 0; text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);"
      >
        {item.name}
      </h2>
    </MediaContent>
  </Media>
  <Content>
    {item.description}
    <div class="action">
      <p>{item.price.toFixed(2)}€</p>
      <IconButton class="material-icons">add_shopping_cart</IconButton>
    </div>
  </Content>
</Card>

<style>
  .action {
    display: flex;
    justify-content: space-between;
  }
</style>
