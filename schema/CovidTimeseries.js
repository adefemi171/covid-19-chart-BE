cube(`CovidTimeseries`, {
  sql: `SELECT * FROM public.covid_timeseries`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    },
    totalDeath: {
      type: `count`,
      sql: `${CUBE}."total_deaths"`,
    }
  },
  
  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    sex: {
      sql: `${CUBE}."Sex"`,
      type: `string`
    },
    
    ageGroup: {
      sql: `${CUBE}."Age_group"`,
      type: `string`
    },
    
    footNote: {
      sql: `foot_note`,
      type: `string`
    },
    
    state: {
      sql: `${CUBE}."State"`,
      type: `string`
    },
    
    dataAsOf: {
      sql: `data_as_of`,
      type: `time`
    },
    
    startWeek: {
      sql: `${CUBE}."Start_week"`,
      type: `time`
    },
    
    endWeek: {
      sql: `${CUBE}."End_Week"`,
      type: `time`
    },
    covidDeath: {
      sql: `${CUBE}."covid_deaths"`,
      type: `string`
    },
  }
});
