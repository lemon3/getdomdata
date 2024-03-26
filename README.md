# getdomdata
 get string-data stored to a dom element as object

## usage
tbd

from ...
```html
<div id="test"
  data-test="{p1:'cat',p2:'dog',id:1,tmp:true,a:null}"
  data-test-p2="mouse"
  data-test-names="n1: anna,n2: eva"
  data-test-area="51"
  data-test-rect="[123,434]"></div>
```
to this:
```js
// result =
{
  p1: cat,
  p2: mouse,
  id: 1,
  tmp: true,
  a: null,
  names: {
    n1: anna,
    n2: eva,
  },
  area: 51,
  rect: [
    123,
    434,
  ],
}
```
