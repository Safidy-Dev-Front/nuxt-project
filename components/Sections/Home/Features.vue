<template>
    <section id="features">
        <div class="container">
            <div class="features__wrapper md:py-28 pb-0 pt-28 flex flex-col">
                <div class="features__head text-center max-w-head-featurs mx-auto md:order-none order-1">
                    <h2 class="text-h2 text-title-color">Features</h2>
                    <p class="text-h4 features__head-description">Most calendars are designed for teams. Slate is designed
                        for freelancers</p>
                </div>
                <div class="features__content py-20 md:order-none order-3">
                    <div class="features__content-wrapper md:flex">
                        <div class="features__content-item flex-1 ">
                            <div class="features__item-parent text-center max-w-features m-auto pb-24 md:pb-0">
                                <div class="features__item-icon">
                                    <img src="icons/mdi_drawing.png" class="m-auto" alt="OpenType features">
                                </div>
                                <h3 class="font-bold text-h3 p-2.5 text-title-color">OpenType features Variable fonts</h3>
                                <p class="pt-2.5">Slate helps you see how many more days you need to work to reach your financial goal.</p>
                            </div>
                        </div>
                        <div class="features__content-item flex-1 ">
                            <div class="features__item-parent text-center max-w-features m-auto pb-24 md:pb-0">
                                <div class="features__item-icon">
                                    <img src="icons/mdi_draw.png" class="m-auto" alt="OpenType features">
                                </div>
                                <h3 class="font-bold text-h3 p-2.5 text-title-color">Design with real data</h3>
                                <p class="pt-2.5">Slate helps you see how many more days you need to work to reach your financial goal.</p>
                            </div>
                        </div>
                        <div class="features__content-item flex-1 ">
                            <div class="features__item-parent text-center max-w-features m-auto pb-24 md:pb-0">
                                <div class="features__item-icon">
                                    <img src="icons/mdi_brush.png" class="m-auto" alt="OpenType features">
                                </div>
                                <h3 class="font-bold text-h3 p-2.5 text-title-color">Fastest way to take action</h3>
                                <p class="pt-2.5">Slate helps you see how many more days you need to work to reach your financial goal.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="features__videos md:order-none order-2 pt-50px md:pt-0">
                    <PlayerVideoPlayer/>
                </div>
            </div>
        </div>
    </section>
</template>