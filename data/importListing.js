const csvFilePath='./SaltLakeCity_UTRealEstate&HomesforSaleRedfin-ScrapingData-ScrapeStorm10_8-2.csv'
const csv=require('csvtojson')

//Import CSV to the db
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})