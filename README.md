# POC Web component

In order to provide a web component example, it was created a component named warning banner.
This component includes: HTML + CSS + JS + External API data.

## Integration
To integrate this web component add to your html:

```
<script type="module" src="https://soniasilvadf.github.io/web-component/banner.js"></script>
<warning-banner></warning-banner>
```

You can customize a content property:
- title

```
<warning-banner title="Features in maintenance:"></warning-banner>
```

And also some CSS properties:
- width
- position (absolute, relative, fixed, ...)
- top (10px, 0px, 5vh, ...)
- left
- right
- width
- height
- z-index


```
<warning-banner class="col" position="absolute" zIndex="100" ></warning-banner>
```

For testing purposes, it was also provided an option to provide all the above CSS properties but in a JSON, by specifying settings property:
```
<warning-banner settings='{"width": "300px"}'></warning-banner>
```

### Angular support
If you want to integrate in your angular component: you can!
You should add the element to the template, as described above, and then add on your component the schemas:

```
@Component({
    .....
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
```

## API data
The banner calls an external API to add data, and currently that URL is static on the component Javascript, but this can be modified to suit other options.