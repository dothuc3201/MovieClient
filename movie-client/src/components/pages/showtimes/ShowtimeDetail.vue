<template>
    <div class="dialog" id="showtime-detail">
        <div class="dialog-container p-3" style="min-width: 950px;">

            <div class="dialog-header ">
                <h5 class="modal-title">BẠN ĐANG ĐẶT VÉ XEM PIM</h5>
                <button class="icon-button" @click="btnCloseOnClick">
                    <div class="icon-24 icon-exit icon-sprite"></div>
                </button>
            </div>
            <div class="dialog-body mt-3">
                <div class="text-center"><h3>CHIẾN BINH BÁO ĐEN 2: WAKANDA BẤT DIỆT</h3></div>
                
                <div class="row">
                    <div class="col">Rạp chiếu</div>
                    <div class="col">Ngày chiếu</div>
                    <div class="col">Giờ chiếu</div>
                </div>
                <div class="row">
                    <div class="col"><b>Beta Thanh Xuân</b></div>
                    <div class="col"><b>22/11/2022</b></div>
                    <div class="col">22:00</div>
                </div>
            </div>
            <div class="dialog-footer d-flex mt-3 justify-content-center">
                <button type="button" class="btn btn-primary">Đồng ý</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>