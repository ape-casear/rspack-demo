const data = require('./webpack.js')
const rspack = require('@rspack/core')

const c = rspack(data, (err, stats) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(stats.toString())
})

c.run(() => {
    console.log('done')
})
