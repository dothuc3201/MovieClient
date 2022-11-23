<template>
    <div class="dialog" id="showtime-popup">
        <div class="dialog-container p-3" style="min-width: 950px;">

            <div class="dialog-header ">
                <h5 class="modal-title">LỊCH CHIẾU</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div class="dialog-body mt-3">
                <div class="text-center">Rạp</div>
                <div class="modal-show-time">

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
                <div class="row">
                    <div class="col-12"><b>2D phụ đề</b></div>
                    <div class="col-3">
                        <div class="text-center">9:30</div>
                        <div class="text-center">167 ghế trống</div>
                    </div>
                </div>
            </div>
            <!-- <div class="dialog-footer d-flex mt-3 justify-content-end">
                <button type="button" class="btn btn-secondary mx-2">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
        </div>

    </div>
</template>

<script>
export default {

}
</script>