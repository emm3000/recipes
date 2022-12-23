/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
const cheerio = require('cheerio')
const axios = require('axios')
const fs = require('fs')
const URL = 'https://www.comeperuano.pe/'
const { v4: uuidv4 } = require('uuid')

async function fetchPages (url) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)
  const linkList = []

  $('#pt-cv-view-9911fa994s').find('.col-md-4').each((i, el) => {
    const w = $(el).find('a.cvplbd').attr('href')
    linkList.push(w)
  })

  return linkList
}

async function fetchRecipe (url, index) {
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  const ingredients = []
  const preparation = []

  $('.entry-content ul').first().find('li').each((i, el) => {
    ingredients.push($(el).text().trim())
  })

  $('.entry-content ol li').each((i, el) => {
    preparation.push($(el).text().trim())
  })
  const image = $('.entry-content figure picture img').first().attr('data-lazy-src')

  const obje = {
    code: uuidv4(),
    id: index,
    title: $('.entry-title').text(),
    time: '',
    portions: '',
    ingredients,
    preparation,
    latitude: '',
    longitude: '',
    urlImage: image
  }
  return obje

}

async function main () {
  const linkList = await fetchPages(URL)

  const b = await Promise.all(linkList.map((e, index) => fetchRecipe(e, index)))

  try {
    fs.writeFileSync('user2.json', JSON.stringify(b, null, 2))
  } catch (error) {
    console.error(`x-> ${error.message}`)
  }

}

// fetchPage(URL)
main()
