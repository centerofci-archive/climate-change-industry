const ftp = require('basic-ftp')
const fs = require('fs')

async function pullData() {
  const client = new ftp.Client()
  await client.access({
    host: 'aftp.cmdl.noaa.gov',
  })
  await client.downloadTo('co2_raw.txt', '/products/trends/co2/co2_mm_mlo.txt')
  client.close()
}

function parse(text) {
  // remove comment lines, standardize number of spaces, split by line
  let data = text.replace(/^#.*/gm, '').replace(/ {2,}/g, ' ').split('\n')

  // split each line by spaces, then put each value into a JSON object
  let result = data
    .filter((o) => o.split(' ').length > 1)
    .map((o) => {
      let split = o.split(' ')
      let uncertainty = split[8] == '-0.99' ? '.5' : split[8]
      return {
        year: +split[1],
        month: +split[2],
        level: +split[5],
        min: +split[5] - +uncertainty,
        max: +split[5] + +uncertainty,
      }
    })

  return { unit: 'ppm', levels: result }
}

; (async () => {
  await pullData()
  const raw = fs.readFileSync('./co2_raw.txt', 'utf8')
  fs.unlinkSync('./co2_raw.txt')
  const json = parse(raw)

  fs.writeFileSync(
    `${process.env.LOCATION || './src/data/'}co2_levels.json`,
    JSON.stringify(json)
  )
})()
