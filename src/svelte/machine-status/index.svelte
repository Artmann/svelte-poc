<script>
  export let orders = []

  console.log('Hello from Svelte!')

  $: console.table(orders)

</script>

<div>
  Hello World
</div>
