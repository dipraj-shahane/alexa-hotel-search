'use strict';
const Alexa = require('alexa-sdk');
const makePlainText = Alexa.utils.TextUtils.makePlainText;
const makeImage = Alexa.utils.ImageUtils.makeImage;
const images = ["https://cdn.pixabay.com/photo/2018/04/11/15/21/a-3310713__480.png",
    "https://cdn.pixabay.com/photo/2018/03/03/07/15/letters-3195034__480.png",
    "https://cdn.pixabay.com/photo/2018/04/11/15/30/litera-3310750__480.png",
    "https://cdn.pixabay.com/photo/2018/04/11/21/33/letter-3311853_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/11/21/41/letter-3311871__480.png",
    "https://cdn.pixabay.com/photo/2018/03/03/07/17/letters-3195041__480.png",
    "https://cdn.pixabay.com/photo/2018/04/12/14/44/letter-3313571__480.png",
    "https://cdn.pixabay.com/photo/2018/04/12/15/06/letter-3313668__480.png",
    "https://cdn.pixabay.com/photo/2018/03/21/13/47/the-letters-of-the-alphabet-3246717__480.png",
    "https://cdn.pixabay.com/photo/2018/04/12/15/08/letter-3313677_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/12/23/42/letter-3315203__480.png",
    "https://cdn.pixabay.com/photo/2018/03/03/07/19/letters-3195048__480.png",
    "https://cdn.pixabay.com/photo/2018/03/21/13/48/the-letters-of-the-alphabet-3246732__480.png",
    "https://cdn.pixabay.com/photo/2018/03/21/13/48/the-letters-of-the-alphabet-3246733__480.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/01/letter-3317745_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/03/letter-3317746_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/05/letter-3317748_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/06/letter-3317751__480.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/06/letter-3317754_1280.png",
    "https://cdn.pixabay.com/photo/2018/03/03/07/23/letters-3195056__480.png",
    "https://cdn.pixabay.com/photo/2018/03/21/13/51/the-letters-of-the-alphabet-3246745__480.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/11/letter-3317790_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/12/letter-3317793_1280.png",
    "https://cdn.pixabay.com/photo/2018/04/13/22/12/letter-3317798__480.png",
    "https://cdn.pixabay.com/photo/2018/04/16/23/37/letter-3326178_1280.png",
    "https://cdn.pixabay.com/photo/2018/03/03/07/26/letters-3195067__480.png"
];
const hotels = [
    { "hotelName": "Pune Downtown", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/04/11/15/21/a-3310713__480.png" },
    { "hotelName": "Pune - Midtown", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/03/03/07/15/letters-3195034__480.png" },
    { "hotelName": "Test Hotel ABC", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/04/11/15/30/litera-3310750__480.png" },
    { "hotelName": "South Point Hotel", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/04/11/21/33/letter-3311853_1280.png" },
    { "hotelName": "Pune Buckhead", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/04/11/21/41/letter-3311871__480.png" },
    { "hotelName": "Emory University Area", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/03/03/07/17/letters-3195041__480.png" },
    { "hotelName": "Airport-North", "city": "Pune", "imageURL": "https://cdn.pixabay.com/photo/2018/04/12/14/44/letter-3313571__480.png" },
    { "hotelName": "Atlanta-Airport", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/12/15/06/letter-3313668__480.png" },
    { "hotelName": "Atlanta-Buckhead", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/03/21/13/47/the-letters-of-the-alphabet-3246717__480.png" },
    { "hotelName": "Atlanta Airport - College Park", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/12/15/08/letter-3313677_1280.png" },
    { "hotelName": "Atlanta NE - I-85 Clairmont", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/12/23/42/letter-3315203__480.png" },
    { "hotelName": "Camelot", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/03/03/07/19/letters-3195048__480.png" },
    { "hotelName": "Atlanta Airport South", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/03/21/13/48/the-letters-of-the-alphabet-3246732__480.png" },
    { "hotelName": "Atlanta - Vinings", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/03/21/13/48/the-letters-of-the-alphabet-3246733__480.png" },
    { "hotelName": "Atlanta Arpt West - Camp Creek", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/01/letter-3317745_1280.png" },
    { "hotelName": "Atlanta Galleria-Ballpark Area", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/03/letter-3317746_1280.png" },
    { "hotelName": "Atlanta West - Theme Park Area", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/05/letter-3317748_1280.png" },
    { "hotelName": "Atlanta West I-20", "city": "Atlanta", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/06/letter-3317751__480.png" },
    { "hotelName": "London - Mayfair", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/06/letter-3317754_1280.png" },
    { "hotelName": "London - Albert Embankment", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/03/03/07/23/letters-3195056__480.png" },
    { "hotelName": "London - The City", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/03/21/13/51/the-letters-of-the-alphabet-3246745__480.png" },
    { "hotelName": "London - Vauxhall", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/11/letter-3317790_1280.png" },
    { "hotelName": "London - Bloomsbury", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/12/letter-3317793_1280.png" },
    { "hotelName": "London - Victoria", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/04/13/22/12/letter-3317798__480.png" },
    { "hotelName": "London - Southwark", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/04/16/23/37/letter-3326178_1280.png" },
    { "hotelName": "London - Regents Park", "city": "London", "imageURL": "https://cdn.pixabay.com/photo/2018/03/03/07/26/letters-3195067__480.png" }
];

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.appId = 'amzn1.ask.skill.60f8dd34-065a-4800-a476-3f5fecff88bf';
    alexa.registerHandlers(handlers, moreHotelsHandler);
    alexa.execute();
};

const SKILL_NAME = 'InterContinental Hotels Group';
const GET_HOTEL_MESSAGE = "Here's your Hotel: ";
const HELP_MESSAGE = 'You can say search hotel, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye from IHG Alexa Skill demo app!';
const MORE_HOTELS = 'Do you want more hotels?';

const HOTEL_BATCH_COUNT = 3;

const states = {
    "SEARCHMODE": "SEARCHMODE",
    "MOREMODE": "MOREMODE"
};

const handlers = {
    'LaunchRequest': function() {
        this.response.speak('Welcome to IHG hotel search. Try saying search hotel.').listen('Try saying search hotel.');
        this.emit(':responseReady');
    },
    'Search': function() {
        if (this.event.request.dialogState !== 'COMPLETED') {
            this.emit(':delegate');
        }
        else {
            let searchDetails = {
                city: this.event.request.intent.slots.city.value,
                checkInDate: getFormattedDate(this.event.request.intent.slots.checkInDate.value),
                checkOutDate: getFormattedDate(this.event.request.intent.slots.checkOutDate.value)
            };
            let filteredHotels = searchHotels(searchDetails);
            let slicedHotels = sliceHotels(0, filteredHotels);
            let hotels = '';
            slicedHotels.forEach(hotel => {
                hotels += hotel.hotelName + ',';
            });

            if (filteredHotels.length > HOTEL_BATCH_COUNT) {
                hotels += MORE_HOTELS;
                this.handler.state = states.MOREMODE;
                this.attributes["count"] = 0;
                this.attributes["city"] = searchDetails.city;
                this.attributes["hotels"] = filteredHotels;
            }
            else {
                // @TODO: search mode
            }
            this.response.speak(hotels);
            // Display.RenderTemplate directives can be added to the response
            if (this.event.context.System.device.supportedInterfaces.Display) {
                this.response.renderTemplate(buildHotelListTemplate(slicedHotels, 0, searchDetails.city));
            }
            this.response.listen(MORE_HOTELS);
            this.emit(':responseReady');
        }
    },
    'AMAZON.HelpIntent': function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_REPROMPT);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function() {
        console.log('===== session ended =======');
    }
};

const moreHotelsHandler = Alexa.CreateStateHandler(states.MOREMODE, {
    'AMAZON.YesIntent': function() {
        const count = parseInt(this.attributes["count"], 10);
        const filteredHotels = this.attributes["hotels"];
        let hotels = '';
        let slicedHotels = sliceHotels(count + 1, filteredHotels);
        slicedHotels.forEach(hotel => {
            hotels += hotel.hotelName + ',';
        });
        let city = this.attributes["city"];
        if (filteredHotels.length > HOTEL_BATCH_COUNT * count) {
            hotels += MORE_HOTELS;
        }
        this.attributes["count"] = count + 1;
        this.response.speak(hotels);
        if (this.event.context.System.device.supportedInterfaces.Display) {
            this.response.renderTemplate(buildHotelListTemplate(slicedHotels, HOTEL_BATCH_COUNT * (count + 1), city));
        }
        this.response.listen(MORE_HOTELS);
        this.emit(':responseReady');
    },
    'AMAZON.NoIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function() {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function() {
        console.log('===== session ended =======');
    }
});

function buildHotelListTemplate(hotelsToList, number, city) {
    const listItemBuilder = new Alexa.templateBuilders.ListItemBuilder();
    const listTemplateBuilder = new Alexa.templateBuilders.ListTemplate1Builder();
    hotelsToList.forEach(function(hotel) {
        number++;
        listItemBuilder.addItem(makeImage(hotel.imageURL, 200, 200),
            hotel.hotelName, makePlainText("" + number + ":" + hotel.hotelName));
    });
    return listTemplateBuilder.setToken(city)
        .setTitle('Hotels in ' + city)
        .setListItems(listItemBuilder.build())
        .build();
}

function searchHotels(searchDetails) {
    //@TODO: service integration
    let filteredHotels = hotels.filter(hotel => hotel.city.toUpperCase() === searchDetails.city.toUpperCase());
    if (filteredHotels.length == 0) {
        //@TODO: try saying new location
        console.log("Filtered hotels list is empty!");
    }
    filteredHotels.forEach(hotel => {
        hotel.imageURL = images[Math.floor(Math.random() * images.length)];
    });
    return filteredHotels;
}

function sliceHotels(count, hotels) {
    let startIndex = HOTEL_BATCH_COUNT * count;
    let endIndex = HOTEL_BATCH_COUNT + startIndex;
    return hotels.slice(startIndex, endIndex);
}

function getFormattedDate(date) {
    var dateArray = date.split("-");
    return dateArray[2] + dateArray[1] + dateArray[0];
}
