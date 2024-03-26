# getdomdata
get string-data stored to a dom element as object.

## tl;dr
```Bash
npm install getdomdata
```
demo html file
```html
<div id="test"
  data-test="{p1:'cat',p2:'dog',id:1,tmp:true,a:null}"
  data-test-p2="mouse"
  data-test-area="51"
  data-test-rect="[123,434]"></div>
```

```js
import getDomData from 'getdomdata';
const myDiv = document.getElementById('my-div');
const result = getDomData(myDiv, 'test');
```

```js
// result output
{
  p1: cat,
  p2: mouse,
  id: 1,
  tmp: true,
  a: null,
  area: 51,
  rect: [
    123,
    434,
  ],
}
```
