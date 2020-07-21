cube(`CovidTimeseries`, {
  sql: `SELECT * FROM public.covid_timeseries`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [id]
    }
  },
  
  dimensions: {
    sex: {
      sql: `${CUBE}."Sex"`,
      type: `string`
    },
    
    ageGroup: {
      sql: `${CUBE}."Age_group"`,
      type: `string`
    },
    
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    
    footNote: {
      sql: `foot_note`,
      type: `string`
    },
    
    state: {
      sql: `${CUBE}."State"`,
      type: `string`
    },
    
    endWeek: {
      sql: `${CUBE}."End_Week"`,
      type: `time`
    },
    
    startWeek: {
      sql: `${CUBE}."Start_week"`,
      type: `time`
    },
    
    dataAsOf: {
      sql: `data_as_of`,
      type: `time`
    }
  }
});
