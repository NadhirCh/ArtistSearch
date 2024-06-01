const createCsv = require('csv-writer').createObjectCsvWriter;

async function writeCSV(content, file) {
  const csvWriter = createCsv({
    path: file, 
    header: [
      { id: 'name', title: 'Name' },
      { id: 'mbid', title: 'MBID' },
      { id: 'url', title: 'URL' },
      { id: 'image_small', title: 'Image Small' },
      { id: 'image', title: 'Image' }
    ],
    append: true 
  });

  await csvWriter.writeRecords(content);
}

module.exports = {
  writeCSV
};
