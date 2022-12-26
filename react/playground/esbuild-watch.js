require('esbuild').build({
  entryPoints: ['./public/dist/main.js'],
  outfile: './public/dist/bundle.js',
  sourcemap: true,
  bundle: true,
  watch: {
    onRebuild(error, result) {
      if (error) console.error('watch build failed:', error)
      else { 
        console.log('watch build succeeded:', result)
      }
    },
  },
})
