$(document).ready(function () {
    // Function to update weather data on the page
    function updateWeatherData(data) {
        // Iterate through each feature and update the HTML
        $(".chart-container p strong").each(function () {
            var featureName = $(this).text().replace(":", "").trim();
            var featureValue = data[featureName.toLowerCase()];

            // Update the text content of the corresponding <span> element
            $(this).parent().find("span").text(": " + featureValue);
        });
    }
    //const apiUrl = "{% your_api_endpoint %}";
    //$.post(apiUrl, function (data) {
        // Dummy data for testing
        var dummyData = {
            timestamps: [1, 2, 3, 4, 5],
            temperatures: [20, 22, 25, 18, 23],
            wind: [5, 10, 15, 8, 13],
            visibility: [1000, 800, 1200, 900, 1100],
            cloud: [50, 60, 40, 70, 55],
            humidity: [75, 80, 70, 85, 78],
            pressure: [1015, 1010, 1020, 1005, 1018],
            rain: [0, 0, 5, 2, 0],
            longitude: 10.99,
            latitude: 44.34,
            utc_time: [1661870592, 1661874592, 1661878592, 1661882592, 1661886592]
        };

        // Update weather data on the page
        updateWeatherData(dummyData);

        // Extract data for each feature
        var timestamps = dummyData.timestamps;
        var temperatures = dummyData.temperatures;
        var wind = dummyData.wind;
        var visibility = dummyData.visibility;
        var cloud = dummyData.cloud;
        var humidity = dummyData.humidity;
        var pressure = dummyData.pressure;
        var rain = dummyData.rain;
        var latitude = dummyData.latitude;
        var longitude = dummyData.longitude;
        var utc_time = dummyData.utc_time;

        createLineChart('temperatureChart', 'Meteorological Data', timestamps, temperatures, wind, visibility, pressure, 'Temperature (K)', 'Wind Speed (m/s)', 'Visibility (m)', 'Pressure (hPa)');
        createCloudHumidityChart('cloudChart', 'Cloud and Humidity Area Chart', timestamps, cloud, humidity, rain, 'Cloud (%)', 'Humidity (%)', 'Rain (mm)');
        updateLocationContainer(longitude, latitude);

    //})
});

// Function to create a Highcharts line chart
function createLineChart(containerId, title, categories, temperatures, wind, visibility, pressure, tempUnit, windUnit, visUnit, pressUnit) {
    Highcharts.chart(containerId, {
        chart: {
            type: 'line',
            width: $(window).width() * 2 / 3 // Set the chart width to two-thirds of the screen width
        },
        title: {
            text: title + ' Line Chart'
        },
        xAxis: {
            categories: categories.map(function(timestamp) {
                return new Date(timestamp * 1000).toLocaleString();
            })
        },
        yAxis: [{
            title: {
                text: 'Temperature (K)'
            }
        }, {
            title: {
                text: 'Wind Speed (m/s)'
            },
            opposite: true
        }, {
            title: {
                text: 'Visibility (m)'
            },
            opposite: true
        }, {
            title: {
                text: 'Pressure (hPa)'
            },
            opposite: true
        }],
        series: [{
            name: 'Temperature',
            data: temperatures,
            yAxis: 0,
            tooltip: {
                valueSuffix: ' ' + tempUnit
            }
        }, {
            name: 'Wind',
            data: wind,
            yAxis: 1,
            tooltip: {
                valueSuffix: ' ' + windUnit
            }
        }, {
            name: 'Visibility',
            data: visibility,
            yAxis: 2,
            tooltip: {
                valueSuffix: ' ' + visUnit
            }
        }, {
            name: 'Pressure',
            data: pressure,
            yAxis: 3,
            tooltip: {
                valueSuffix: ' ' + pressUnit
            }
        }]
    });
}


// Function to create a Highcharts cloud, humidity, rain bar chart
function createCloudHumidityChart(containerId, title, categories, humidity, cloud, rain, humUnit, cloudUnit, rainUnit) {
    Highcharts.chart(containerId, {
        chart: {
            type: 'column',
            width: $(window).width() * 2 / 3 // Set the chart width to two-thirds of the screen width
        },
        title: {
            text: title + ' Column Chart'
        },
        xAxis: {
            categories: categories.map(function (timestamp) {
                return new Date(timestamp * 1000).toLocaleString();
            })
        },
        yAxis: [{
            title: {
                text: 'Humidity (%)'
            },
            
        }, {
            title: {
                text: 'Cloud (%)'
            },
            
        }, {
            title: {
                text: 'Rain (%)'
            },
            
        }],
        series: [{
            name: 'Humidity',
            data: humidity,
            yAxis: 0,
            tooltip: {
                valueSuffix: ' ' + humUnit
            }
        }, {
            name: 'Cloud',
            data: cloud,
            yAxis: 1,
            tooltip: {
                valueSuffix: ' ' + cloudUnit
            }
        },
        {
            name: 'Rain',
            data: rain,
            yAxis: 2,
            tooltip: {
                valueSuffix: ' ' + rainUnit
            }
        }]
        
    
        
    });
}



// Function to update location container with longitude, latitude, and UTC time
function updateLocationContainer(longitude, latitude) {
    $("#locationContainer p:nth-child(1) span").text(": " + longitude.toFixed(2)); // Display longitude
    $("#locationContainer p:nth-child(2) span").text(": " + latitude.toFixed(2));  // Display latitude
}

// Update chart position when the window is resized
$(window).resize(function () {
    createLineChart('temperatureChart', 'Meteorological Data', timestamps, temperatures, wind, visibility, cloud, pressure, 'Temperature (K)', 'Wind Speed (m/s)', 'Visibility (m)', 'Cloud (%)', 'Pressure (hPa)');
    createBarChart('humidityChart', 'Meteorological Data', timestamps, pressure, 'Pressure (hPa)');
});