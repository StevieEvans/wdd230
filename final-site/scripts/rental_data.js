const url = 'data/rental_data.json'
const rentalCard = document.querySelector('article')

const scooterSection = document.querySelector('.scooters')
const atvSection = document.querySelector('.atvs')
const jeepSection = document.querySelector('.jeeps')

async function getrentals() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    displayRentals(data.rentals)
}

const displayRentals = (rentals) => {
    
    rentals.forEach(rental => {
        const rentalInfo = createRentalInfo(rental)
        const reservationRentalSection = createReservationRentalSection(rental)
        const walkInRentalSection = createWalkInRentalSection(rental)
        // memberCard.appendChild(memSection)
        if(rental.rentalType === "scooter") {
            scooterSection.appendChild(rentalInfo)
            rentalInfo.appendChild(reservationRentalSection)
            rentalInfo.appendChild(walkInRentalSection)
        } else if (rental.rentalType === "atv") {
            atvSection.appendChild(rentalInfo)
            rentalInfo.appendChild(reservationRentalSection)
            rentalInfo.appendChild(walkInRentalSection)
        } else {
            jeepSection.appendChild(rentalInfo)
            rentalInfo.appendChild(reservationRentalSection)
            rentalInfo.appendChild(walkInRentalSection)
        }
    });
}

const createRentalInfo = (rental) => {
    let rentalInfoSection = document.createElement('section')
    rentalInfoSection.id = `${rental.name.replace(/ /g, '_')}`

    let rentalImg = document.createElement('img')
    rentalImg.src = rental.img
    rentalImg.alt = rental.name
    rentalImg.loading = "lazy"

    let rentalName = document.createElement('p')
    rentalName.id ="rental_name"

    let rentalCapacity = document.createElement('p')

    rentalName.textContent = `${rental.name}`
    rentalCapacity.textContent = `${rental.maxPersons}`

    rentalInfoSection.appendChild(rentalImg)
    rentalInfoSection.appendChild(rentalName)
    rentalInfoSection.appendChild(rentalCapacity)

    return rentalInfoSection
}

const createReservationRentalSection = (rental) => {
    
    let reservationRentalsSection = document.createElement('div')
    reservationRentalsSection.classList.add("reservation_prices")

    // let rentalImg = document.createElement('img')
    // rentalImg.src = rental.img
    // rentalImg.alt = rental.name
    // rentalImg.loading = "lazy"

    // let rentalName = document.createElement('p')
    // rentalName.id ="rental-name"

    // let rentalCapacity = document.createElement('p')
    let rentalHalfDay = document.createElement('p')
    let rentalFullDay = document.createElement('p')
    // let rentalHalfDayWalk = document.createElement('p')
    // let rentalFullDayWalk = document.createElement('p')

    // rentalName.textContent = `${rental.name}`
    // rentalCapacity.textContent = `Max Persons: ${rental.maxPersons}`
    rentalHalfDay.textContent = `Half Day(3 hrs): ${rental.halfDayReservation}`
    rentalFullDay.textContent = `Full Day: ${rental.fullDayReservation}`
    // rentalHalfDayWalk.textContent = `Half Day(3 hrs): ${rental.halfDayWalkIn}`
    // rentalFullDayWalk.textContent = `Full Day: ${rental.fullDayWalkIn}`

    // reservationRentalsSection.appendChild(rentalImg)
    // reservationRentalsSection.appendChild(rentalName)
    // reservationRentalsSection.appendChild(rentalCapacity)
    reservationRentalsSection.appendChild(rentalHalfDay)
    reservationRentalsSection.appendChild(rentalFullDay)
    // reservationRentalsSection.appendChild(rentalHalfDayWalk)
    // reservationRentalsSection.appendChild(rentalFullDayWalk)

    return reservationRentalsSection
}

const createWalkInRentalSection = (rental) => {
    let walkInRentalsSection = document.createElement('div')
    walkInRentalsSection.classList.add("walk_in_prices")

    // let rentalImg = document.createElement('img')
    // rentalImg.src = rental.img
    // rentalImg.alt = rental.name
    // rentalImg.loading = "lazy"

    // let rentalName = document.createElement('p')
    // rentalName.id ="rental-name"

    // let rentalCapacity = document.createElement('p')
    // let rentalHalfDay = document.createElement('p')
    // let rentalFullDay = document.createElement('p')
    let rentalHalfDayWalk = document.createElement('p')
    let rentalFullDayWalk = document.createElement('p')

    // rentalName.textContent = `${rental.name}`
    // rentalCapacity.textContent = `Max Persons: ${rental.maxPersons}`
    // rentalHalfDay.textContent = `Half Day(3 hrs): ${rental.halfDayReservation}`
    // rentalFullDay.textContent = `Full Day: ${rental.fullDayReservation}`
    rentalHalfDayWalk.textContent = `Half Day(3 hrs): ${rental.halfDayWalkIn}`
    rentalFullDayWalk.textContent = `Full Day: ${rental.fullDayWalkIn}`

    // walkInRentalsSection.appendChild(rentalImg)
    // walkInRentalsSection.appendChild(rentalName)
    // walkInRentalsSection.appendChild(rentalCapacity)
    // walkInRentalsSection.appendChild(rentalHalfDay)
    // walkInRentalsSection.appendChild(rentalFullDay)
    walkInRentalsSection.appendChild(rentalHalfDayWalk)
    walkInRentalsSection.appendChild(rentalFullDayWalk)

    return walkInRentalsSection
}

getrentals();