<template>
  <v-container fluid class="text-center background pa-0">
    <query-builder :cubejs-api="cubejsApi" :query="query" style="width: 100%">
      <template v-slot:builder="{measures,setMeasures,availableMeasures}">
        <v-container fluid class="pa-4 pa-md-8 pt-6 background-white">
          <v-row>
            <v-col cols="12" md="2">
              <v-select
                multiple
                label="Measures"
                outlined
                hide-details
                :value="measures.map(i => (i.name))"
                @change="setMeasures"
                :items="availableMeasures.map(i => (i.name))"
              />
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template v-slot="{ resultSet }">
        <div class="pa-4 pa-md-8" v-if="resultSet">
          <div class="border-light pa-4 pa-md-12">
            <area-chart legend="bottom" :data="series(resultSet)"></area-chart>
          </div>
        </div>
      </template>
      
    </query-builder>
  </v-container>

  
</template>

<script>
import cubejs from '@cubejs-client/core'
import { QueryBuilder } from '@cubejs-client/vue'


const cubejsApi = cubejs("CUBEJS-TOKEN", {
  apiUrl: `http://localhost:4000/cubejs-api/v1`
});

export default {
  name: 'HelloWorld',

  components: {
    QueryBuilder
  },
  data: () => {
    const query = {
     limit: 100,
     timeDimensions: [
      {
        dimension: "CovidTimeseries.dataAsOf",
        granularity: 'week',
        dateRange: "This month"
      }
      ],
      // order: [CovidTimeseries.count: "desc"],
      dimensions: [
        "CovidTimeseries.sex"
      ],
      "filters": []
    }

    return {
      cubejsApi,
      query
    }
  },
  methods: {
    series (resultSet) {
      return resultSet.series().map(series => ({
        name: series.key,
        data: series.series.map(row => [row.x, row.value])
      }))
    }
  }
}
</script>

<style scopped>
  .background {
    background: #F3F3FB;
    min-height: 100vh;
  }
  .background-white {
    background: #fff;
  }
  .border-light {
    background: #FFFFFF;
    border-radius: 8px;
  }
</style>