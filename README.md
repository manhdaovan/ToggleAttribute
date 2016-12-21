####No JQuery
```
<script type="text/javascript"> // No jQuery
// For multiple checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach(function (node) {
  node.addEventListener('change', function () {
    z('input[type="submit"]').toggleAttr('disabled');
  }, false);
});
// Or with one checkbox only
document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
      z('input[type="submit"]').toggleAttr('disabled');
    },
    false);
</script>
```

#### With JQuery
```
<script type="text/javascript"> // Having jQuery
$('input[type="checkbox"]').change(function () {
  $('input[type="submit"]').toggleAttr('disabled');
});
</script>
```