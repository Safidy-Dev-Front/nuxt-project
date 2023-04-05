<template>
    <div :class="type=='Standard'? 'reveal card-pricing__wrapper text-center bg-primary standard text-white lg:py-20 p-10' : 'reveal card-pricing__wrapper text-center bg-white p-10'">
        <div class="card-pricing__head m-auto">
            <h3 class="font-bold text-h3 uppercase">{{type}}</h3>
            <p>{{description}}</p>
        </div>
        <div class="card-pricing__price flex items-center w-max m-auto">
            <p class="card-pricing_number text-h1 font-bold">{{price}}</p>
            <div class="card-pricing__unity text-left ">
                <span class="font-bold">$</span>
                <p>Per Month</p>
            </div>
        </div>
        <div class="card-pricing__list">
            <ul>
                <li v-for="fonct in fonctinnality">{{fonct}}</li>
            </ul>
        </div>
        <div class="card-pricing__foot">
            <NuxtLink to="#" :class="type=='Standard'?'btn btn-secondary block w-max m-auto':'btn btn-primary block w-max m-auto'">Order Now</NuxtLink>
        </div>
    </div>
</template>
<script>
export default{
    name:'PricingCard',
    props: ['type','description','price','fonctinnality']
}
</script>