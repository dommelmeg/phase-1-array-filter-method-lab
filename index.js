const findMatching = (driversNames, firstName) => 
  console.log(driversNames.filter(driverName => 
    driverName.toLowerCase() === firstName.toLowerCase()
  ))

  

const fuzzyMatch = (driversNames, firstName) =>
  driversNames.filter(driverName =>
    driverName.substring(0, 2) === firstName.substring(0, 2)
  )

const matchName = (drivers, firstName) =>
  drivers.filter(driver =>
    driver.name === firstName
  )