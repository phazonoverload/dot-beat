# .beat

## Background

**In 1998, [Swatch](http://www.swatch.com/en_gb/) introduced a conceptual time unit called ".beat" as part of a marketing campaign. The rest was history...**

Okay, it never really took off, but the idea was interesting. It implemented an idea of metric time, where a day is split up into 1000 equal parts. 86.4 decimal seconds equaled one metric second, known as one ".beat"

There are no timezones, and instead @200 .beats in London would strike at exactly the same time as in New York, but rather the activities happening would be different. At @50.000 .beats, people of England are fast asleep while at the same time people in California are only packing up for the day.

If you stop trying to compare our current time system to a metric system and not worry too much about the conversion as a result, it could totally work.

## How to set this up

Firstly, head to [timezonedb](http://timezonedb.com), register for a free account and grab your API Key. We're using this service to ensure we're always getting the right base timezone.

You'll notice that in the .gitignore file, it references a keys.js file. This is for security purposes, so you don't share your API Key with others. Create a `keys.js` file and have it look like the following:

```
var key = "YOUR KEY HERE";
```

The web app is pretty much good to go. It's all client-side, so will run on any web server. You may want to consider implementing a more secure way to store your keys if you are using this in production. For the sake of this quick project, this is suitable.
