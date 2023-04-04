<template>
    <section id="pricing" class="py-20 bg-dark">
        <div class="container">
            <div class="pricing__head section__head text-center m-auto mb-20 text-white">
                <h2 class="text-h2">Pricing</h2>
                <p class="text-h4">Most calendars are designed for teams. Slate is designed for freelancers</p>
            </div>
            <div class="pricing__content">
                <div class="pricing__content-wrapper flex flex-wrap">
                    <div v-for="pricing in pricings" class="pricing__item flex-1">
                        <CardsPricingCard 
                        :type="pricing.type" 
                        :price="pricing.price"
                        :fonctinnality="pricing.fonctinnality"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data(){
            return {
                pricings: [
                    {
                        id:1,
                        type:'free',
                        description:'Organize across all apps by hand',
                        price:0,
                        fonctinnality:['Pricing Feature' , 'Pricing Feature', 'Pricing Feature' , 'Pricing Feature', 'Pricing Feature']
                    },
                    {
                        id:2,
                        type:'Standard',
                        description:'Organize across all apps by hand',
                        price:10,
                        fonctinnality:['Pricing Feature' , 'Pricing Feature', 'Pricing Feature' , 'Pricing Feature', 'Pricing Feature']
                    },
                    {
                        id:3,
                        type:'Business',
                        description:'Organize across all apps by hand',
                        price:99,
                        fonctinnality:['Pricing Feature' , 'Pricing Feature', 'Pricing Feature' , 'Pricing Feature', 'Pricing Feature']
                    }
                ]
            }
        }
    }
</script>
