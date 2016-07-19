import express from 'express'
import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';
import render from './render';

const app = express();

const compiler = webpack(webpackConfig);

app.use(webpackDev(compiler, {
  eaders: {'Access-Control-Allow-Origin': '*'},
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(webpackHot(compiler));

// render html and send to the client
app.get('*', render)

// start the server at port 8888
app.listen(8888, ()=>{
  console.log(`Server started at http://localhost:8888`);
})