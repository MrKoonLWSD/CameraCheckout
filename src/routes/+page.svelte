<style>
  h1 {
    background-color: rgb(100, 100, 202);
    color: white;
    width:80%;
    padding: 20px;
    margin: 20px;
    text-align:center;
    border-radius: 0.5em;
  }

  .container, .camera-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
<script>
  function checkOut(camNumber) {
    var checkoutName = prompt("Name?");
  }
</script>
<div class="container">
  <h1>Camera Check out</h1>
</div>
<div class="camera-container">
  
  <div>
    <button type="button" class="btn btn-primary" on:click="{()=> { checkOut(5)}}">Camera 5</button>
    <button type="button" class="btn btn-primary" on:click="{()=> { checkOut(2)}}">Camera 2</button>
    <button type="button" class="btn btn-primary" on:click="{()=> { checkOut(10)}}">Camera 10</button>
    <button type="button" class="btn btn-primary" on:click="{()=> { checkOut(17)}}">Camera 17</button>
    <button type="button" class="btn btn-primary" on:click="{()=> { checkOut(21)}}">Camera 21</button>
  </div>
</div>