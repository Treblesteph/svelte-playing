import { feature } from "topojson-client"
import { geoMercator, geoAzimuthalEqualArea, geoConicConformal, geoPath } from "d3-geo"

export const getData = async continent => {
    try {
      const response = await fetch(`/${continent}.json`)
      try {
        const data = await response.json()
        return feature(data, data.objects[`continent${continent}`]).features
      } catch(err1) {
        console.warn(`Error parsing map data: ${err1}`)
      }
    } catch(err0) {
      console.warn(`Error fetching map data: ${err0}`)
    }
  }

export const chooseProjection = continent => {
    switch (continent) {
        case 'northamerica':
            return dat => geoPath().projection(geoConicConformal().rotate([98, 2]).scale(365).parallels([29.5, 45.5]).precision(.1).center([40, 57]))(dat)
        case 'southamerica':
            return dat => geoPath().projection(geoAzimuthalEqualArea().center([-25, -15]).scale(420))(dat)
        case 'europe':
            return dat => geoPath().projection(geoAzimuthalEqualArea().scale(750).center([40, 62]))(dat)
        case 'africa':
            return dat => geoPath().projection(geoAzimuthalEqualArea().scale(460).center([47, 7]))(dat)
        case 'oceania':
            return dat => geoPath().projection(geoConicConformal().rotate([-132, 0]).scale(356).parallels([-18, -36]).precision(.1).center([60, -10]))(dat)
        case 'asia':
            return dat => geoPath().projection(geoMercator().rotate([-92, 0]).scale(170).center([30, 70]))(dat)
        default:
            return dat => geoPath().projection(geoMercator().rotate([-92, 0]).scale(170).center([30, 70]))(dat)
    }
  }