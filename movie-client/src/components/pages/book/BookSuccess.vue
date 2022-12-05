<template>
    <div class="table-responsive">
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <tr>
                    <th style="width: 20%">Phim</th>
                    <th style="width: 10%">Rạp chiếu</th>
                    <th style="width: 10%">Phòng chiếu</th>
                    <th style="width: 10%">Ghế đã đặt</th>
                    <th style="width: 10%">Ngày đặt</th>
                    <th style="width: 10%">Giờ chiếu</th>
                    <th style="width: 15%">Thành tiền</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in userTickets" :key="index">
                    <td style="width: 20%">{{ item.film.name }}</td>
                    <td style="width: 10%">{{ item.cinema.name }}</td>
                    <td style="width: 10%">{{ item.room }}</td>
                    <td style="width: 10%">{{ item.seats.join(',') }}</td>
                    <td style="width: 10%">{{ moment(item.time).format('DD/MM/YYYY') }}</td>
                    <td style="width: 10%">{{bindingTime(item.time)}}</td>
                    <td style="width: 15%">{{ item.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") }} vnđ</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { getTokenDataApi } from '@/js/api/fetchAPI';
import { mapActions, mapState } from 'vuex';
import moment from 'moment';

export default {
    data() {
        return {
            userTickets: []
        }
    },
    async created() {
        await this.getUserTickets();
    },
    methods: {
        

        async getUserTickets() {
            this.controllLoader();
            try {
                const res = await getTokenDataApi('user/tickets', this.token);
                this.userTickets = res.data.data;
                console.log('user/tickets', res.data.data)

                this.controllLoader();
            } catch (error) {
                console.log(error);
                this.controllLoader();
            }
        },

        

        moment: function () {
            return moment();
        },

        bindingTime(time) {
            let minute = (new Date(time)).getMinutes()
            minute = minute < 10 ? `0${minute}` : minute;
            return `${(new Date(time)).getHours()}:${minute}`
        },

        ...mapActions(['changeToken']),
        ...mapActions(['changeIsAdmin']),
        ...mapActions(["controllLoader"])
    },
    computed: {
        ...mapState({
            token: state => state.token,
            isAdmin: state => state.isAdmin,
            dataUser: state => state.dataUser,
        }),
    },
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;422&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    .nav {
        .nav-item .nav-link {
            color: var(--bs-dark);
            font-weight: 500;
            &.active {
                background: var(--el-color-primary-dark-2);
                color: var(--bs-white);
            }
        }
        .nav-link {
            font-family: 'Oswald', sans-serif;
        }
    }
    .tab-content {
        .tab-pane {
            padding: 36px 16px;
            h2 {
                font-size: 24px; 
                color: #03599d;
                text-transform: uppercase;
            }
            table {
                thead th {
                    font-weight: 500;
                }
            }
        }
    }
    .btn-primary {
        font-family: 'Source Sans Pro', sans-serif;
    }
    label, td {
        font-family: 'Source Sans Pro', sans-serif;
        color: #000;
    }
    .error-msg {
        display: none;
        color: red;
    }
    input:invalid + .error-msg {
        display: block;
    }
</style>