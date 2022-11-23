<template>
    <div id="showtime-page" class="m-auto mt-3" style="max-width: 1150px;">
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" href="#" style="font-size: 24px">21<span>/11-T2</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px">21<span>/11-T2</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" style="font-size: 24px">21<span>/11-T2</span></a>
                </li>
            </ul>
        </div>
        <div class="showtime-film row">
            <div v-for="(item, index) in filmList" :key="index" class="col-6">
                <ShowtimeBox :data=item />
            </div>
        </div>
    </div>
</template>

<script>
import ShowtimeBox from './ShowtimeBox.vue';

export default {
    data() {
        return {
            nowTime: new Date(),
            filmList: []
        };
    },
    components: { ShowtimeBox }
}
</script>