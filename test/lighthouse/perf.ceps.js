// here are a few examples of a simple math test
const chai = require('chai')
const Performance = require('./lighthouse-runner');
// make expect available globally
const expect = chai.expect

describe('#Perf CHeck', function () {
  it('must be above 40', function (done) {
    Performance.launchChromeAndRunLighthouse('http://localhost:8080', {
      onlyCategories: ['performance'],
      settings: {
        output: 'json',
        perf: true,
      }
    },
    require('./configs/perf-config'))
      .then((results) => {
        let result = JSON.parse(results.report).categories.performance.score * 100
        expect(result).to.be.greaterThan(40)
        done()
      })
  })
})
