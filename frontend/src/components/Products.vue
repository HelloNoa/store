<template>
  <div>
    <div>
      <img src="//0100.ga:3000/api/assets/rip_main.png" alt="mainProuct" />
    </div>
    <h2>{{id}}</h2>
    <div class="products-container">
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_designer_auto_pencil.png"
          alt="product1"
          style="background-color: white"
          width="400px"
        />
        <h4>LIP DESIGNER AUTO PENCIL</h4>
        <span
          >Auto pencil that creates a variety of designs and colors with smooth
          drawings and vivid colors</span
        >
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_node_barm_calamanci.png"
          alt="product2"
          style="background-color: white"
          width="400px"
        />
        <h4>Name</h4>
        <p>Description</p>
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_sensual_vollume_matte.png"
          alt="product3"
          style="background-color: white"
          width="400px"
        />
        <h4>Name</h4>
        <p>Description</p>
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_node_barm_calamanci.png"
          alt="product4"
          style="background-color: white"
          width="400px"
        />
        <h4>Name</h4>
        <p>Description</p>
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_sensual_vollume_matte.png"
          alt="product5"
          style="background-color: white"
          width="400px"
        />
        <h4>Name</h4>
        <p>Description</p>
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
      <div class="products">
        <img
          src="//0100.ga:3000/api/assets/rip_rose_holic.png"
          alt="product6"
          style="background-color: white"
          width="400px"
        />
        <h4>Name</h4>
        <p>Description</p>
        <button class="btn btn-primary shop-item-button" type="button">
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  props:['id'],
  components: { Fragment },
  name: 'Products'
}
</script>
