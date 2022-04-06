import Post from "./script";
import * as $ from 'jquery'////// подключаем Jquery
import "./styles/styles.css";
import json from './reznoe/string'
import xml from './reznoe/data.xml'
import csv from './reznoe/data.csv'



const post = new Post('идекс перенял данные скрипта')

console.log('index,js',post.toString());
console.log(json,'JSON');
console.log(xml,'XML');
console.log(csv,'CSV');