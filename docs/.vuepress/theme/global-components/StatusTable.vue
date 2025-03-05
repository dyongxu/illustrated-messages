
<template>



<div>


    <ul class="status-legend">
      <li class="status-icon done"><span><svg xmlns="http://www.w3.org/2000/svg" width="14.2327" height="9.9744" viewBox="0 0 14.2327 9.9744"><polyline points="0.5 4.255 5.17 9.474 13.733 0.5" fill="none" stroke="#328741" stroke-linecap="round" stroke-linejoin="round"/></svg></span> Done</li>
      <li class="status-icon ip"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="11.907" viewBox="0 0 11.907 11.907"> <g> <circle cx="5.9535" cy="5.9535" r="5.9535" fill="#f9cf85"/> <path d="M5.9535,11.907A5.9535,5.9535,0,0,0,11.907,5.9535H0A5.9535,5.9535,0,0,0,5.9535,11.907Z" fill="#fdb917"/></g></svg></span> In progress</li>
      <li class="status-icon iq"><span><svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="11.907" viewBox="0 0 11.907 11.907"> <circle cx="5.9535" cy="5.9535" r="5.9535" fill="#cbcccb"/></svg></span> In queue</li>
      <li class="status-icon na"><span><svg xmlns="http://www.w3.org/2000/svg" width="6.9767" height="1" viewBox="0 0 6.9767 1"> <g> <line y1="0.5" x2="2.9767" y2="0.5" fill="none" stroke="#cbcccb" stroke-miterlimit="10"/> <line x1="4" y1="0.5" x2="6.9767" y2="0.5" fill="none" stroke="#cbcccb" stroke-miterlimit="10"/> </g> </svg></span> N/A</li>
    </ul>
    <div class="status-table">
    <b-table-simple hover small responsive>
      <b-thead head-variant="light">
        <b-tr>
          <b-th>Item</b-th>
          <b-th class="moment-type">Mini-Spot</b-th>
          <b-th class="moment-type">Spot</b-th>
          <b-th class="moment-type">Dialog</b-th>
          <b-th class="moment-type">Scene</b-th>
        </b-tr>
      </b-thead>
      <b-tbody v-for="group in groups">
        <b-tr>
          <b-th colspan="5" class="group-header">{{group.header}}</b-th>
        </b-tr>
        <b-tr v-for="item in group.items">
          <b-td>{{item.title}}</b-td>
          <b-td v-for="status in item.status" class="status-icon" :class="status">

<span v-if="status === 'na'" aria-label="N/A"><svg xmlns="http://www.w3.org/2000/svg" width="6.9767" height="1" viewBox="0 0 6.9767 1"> <g> <line y1="0.5" x2="2.9767" y2="0.5" fill="none" stroke="#cbcccb" stroke-miterlimit="10"/> <line x1="4" y1="0.5" x2="6.9767" y2="0.5" fill="none" stroke="#cbcccb" stroke-miterlimit="10"/> </g> </svg></span>
<span v-if="status === 'done'" aria-label="Done"><svg xmlns="http://www.w3.org/2000/svg" width="14.2327" height="9.9744" viewBox="0 0 14.2327 9.9744"><polyline points="0.5 4.255 5.17 9.474 13.733 0.5" fill="none" stroke="#328741" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
<span v-if="status === 'ip'" aria-label="In progress"><svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="11.907" viewBox="0 0 11.907 11.907"> <g> <circle cx="5.9535" cy="5.9535" r="5.9535" fill="#f9cf85"/> <path d="M5.9535,11.907A5.9535,5.9535,0,0,0,11.907,5.9535H0A5.9535,5.9535,0,0,0,5.9535,11.907Z" fill="#fdb917"/></g></svg></span>
<span v-if="status === 'iq'" aria-label="In queue"><svg xmlns="http://www.w3.org/2000/svg" width="11.907" height="11.907" viewBox="0 0 11.907 11.907"> <circle cx="5.9535" cy="5.9535" r="5.9535" fill="#cbcccb"/></svg></span>

          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>


  </div>
</div>
</template>


<script>
import { BTableSimple, BThead, BTbody, BTr, BTh, BTd } from 'bootstrap-vue'
export default {
  components: {
    'b-table-simple': BTableSimple,
    'b-thead': BThead,
    'b-tbody': BTbody,
    'b-tr': BTr,
    'b-th': BTh,
    'b-td': BTd
  },
  props: {
    'groups': Array
  },
  computed: {

  },
  data () {
      return {

      }
  }
}
</script>

<style lang="scss">
.status-legend {
  list-style: none;
  display: flex;
  padding: 0;
  li {
    margin-right: 50px;
    span {
      display: inline-block;
      margin-right: 12px;
    }
  }
}
.table {
    border: solid 1px #cbcccb;
    border-radius: 10px;
    .moment-type {

    }
.group-header {
  font-style: italic;
  text-decoration: underline;
}
thead th {
  font-weight: bold;

}
.thead-light th {
  background-color: #eef0f0;
}

}
.status-icon {
  vertical-align: middle;
}


</style>
